using PuppeteerSharp;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace wu_scrapper.Scrappers
{
    public class WuxiaGetListChapters
    {
        public async Task<IEnumerable<RawChapter>> GetChapters(string novel)
        {
            var fromTime = DateTime.Now;

            await new BrowserFetcher().DownloadAsync(BrowserFetcher.DefaultRevision);
            Console.WriteLine($"take {(DateTime.Now - fromTime).TotalMilliseconds} miliseconds to init browser fetcher");
            fromTime = DateTime.Now;

            if (String.IsNullOrEmpty(novel)) throw new Exception("I need [novel] name");

            var queryPage = $"https://www.wuxiaworld.com/novel/{novel}";
            Console.WriteLine(queryPage);
            using (var browser = await Puppeteer.LaunchAsync(new LaunchOptions
            {
                Headless = true,
                Args = new[] { "--no-sandbox" },
                DefaultViewport = new ViewPortOptions
                {
                    Width = 500,
                    Height = 500
                }
            }))
            using (var page = await browser.NewPageAsync())
            {
                Console.WriteLine($"take {(DateTime.Now - fromTime).TotalMilliseconds} miliseconds to init new page");
                fromTime = DateTime.Now;

                await page.GoToAsync(queryPage, WaitUntilNavigation.DOMContentLoaded);

                Console.WriteLine($"take {(DateTime.Now - fromTime).TotalMilliseconds} miliseconds to go to wuxia");
                fromTime = DateTime.Now;

                var jsCode = @"() => {
                    const selectors = Array.from(document.querySelectorAll('.chapter-item a')); 
                    return selectors.map( t=> {return { Name: t.innerHTML, Url: t.href}});
                    }";
                var results = await page.EvaluateFunctionAsync<RawChapter[]>(jsCode);
                if (results.Length > 0)
                {
                    Console.WriteLine($"#chaps {results.Length}");
                    Console.WriteLine(results[results.Length - 1]);
                }

                Console.WriteLine($"take {(DateTime.Now - fromTime).TotalMilliseconds} miliseconds to finish evaluating chapters");

                return results;
                //var image = await chapters.ScreenshotDataAsync();
                //return new FileContentResult(image, "image/jpeg");

            };
        }
    }
}
