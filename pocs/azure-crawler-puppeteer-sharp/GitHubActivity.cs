using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using PuppeteerSharp;

namespace crawler_puppeterr
{
    public static class GitHubActivity
  {
    [FunctionName("GitHubActivity")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
      log.LogInformation("C# HTTP trigger function processed a request.");

      await new BrowserFetcher().DownloadAsync(BrowserFetcher.DefaultRevision);

      string owner = req.Query["owner"];

      var contributorsPage = $"https://github.com/{owner}/";

      using (var browser = await Puppeteer.LaunchAsync(new LaunchOptions
      {
        Headless = true,
        Args = new[] { "--no-sandbox" },
        DefaultViewport = new ViewPortOptions
        {
          Width = 2000,
          Height = 800
        }
      }))
      using (var page = await browser.NewPageAsync())
      {
        await page.GoToAsync(contributorsPage);
        await page.WaitForSelectorAsync(".graph-before-activity-overview");
        var element = await page.QuerySelectorAsync(".graph-before-activity-overview");
        var image = await element.ScreenshotDataAsync();

        return new FileContentResult(image, "image/png");
      }
    }
  }
}
