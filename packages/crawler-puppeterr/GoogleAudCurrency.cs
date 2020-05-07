using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using PuppeteerSharp;

namespace crawler_puppeterr
{
    public static class GoogleAudCurrency
  {
    const string query = "aud+to+vnd";

    [FunctionName("GoogleAudCurrency")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
      log.LogInformation("C# HTTP trigger function processed a request.");

      await new BrowserFetcher().DownloadAsync(BrowserFetcher.DefaultRevision);

      var queryPage = $"https://www.google.com/search?q={GoogleAudCurrency.query}";
      Console.WriteLine(queryPage);
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
        await page.GoToAsync(queryPage);
        // var image = await page.ScreenshotDataAsync();
        await page.WaitForSelectorAsync("#knowledge-currency__updatable-data-column");
        // var element = await page.QuerySelectorAsync("#knowledge-currency__updatable-data-column");
        var element = await page.QuerySelectorAsync("[data-exchange-rate]");
        var property = element.GetPropertyAsync("data-exchange-rate");
        var attr = await element.EvaluateFunctionAsync("(obj) => obj.getAttribute('data-exchange-rate')");
        
        var exchangeRate = Decimal.Parse(attr.ToString());

        return new JsonResult(exchangeRate);
      };
    }
  }
}
