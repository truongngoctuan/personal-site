using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using wu_scrapper.Scrappers;
using System.Linq;

namespace wu_scrapper
{
    public static class WuxiaListChaptersScrapper
    {
        [FunctionName("WuxiaListChaptersScrapper")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");
            var novel = req.Query["novel"];

            if (String.IsNullOrEmpty(novel)) throw new Exception("I need [novel] name");

            var scrapper = new WuxiaGetListChapters();
            var rawChapters = await scrapper.GetChapters(novel);

            var result = new ProcessedChapters
            {
                CodeName = novel,
                UrlPattern = GetUrlPattern(novel),
                Chapters = Process(novel, rawChapters)
            };

            return new JsonResult(result);
        }

        private static IEnumerable<ProcessedChapter> Process(string novel, IEnumerable<RawChapter> rawChapters)
        {
            return rawChapters.Select(rawChapter => new ProcessedChapter
            {
                Url = rawChapter.Url.Replace(GetUrlPattern(novel), ""),
                Name = rawChapter.Name.Trim(' ', '\n')
            });
        }

        private static string GetUrlPattern(string novel) => $"https://www.wuxiaworld.com/novel/{novel}/";
    }
}