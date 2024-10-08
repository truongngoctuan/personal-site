
using System.Text.Json;
using ContentEdit.Core;
using HtmlAgilityPack;

namespace ContentEdit.Meta;

public static class NodeJsAPILinkExtractor
{
    public static async Task Extract()
    {
        var libraryName = "ironpdf";
        var results = new List<APILink>();

        var indexHtmlFilePath = Path.Join(
          StringFolder.PROJECT_REPOSITORY,
          "static-assets",
          $"{libraryName}-nodejs",
          "api-reference",
          "index.html");
        if (!File.Exists(indexHtmlFilePath))
        {
            Console.WriteLine($"file {indexHtmlFilePath} NOT FOUND");
            return;
        }

        string htmlString = await File.ReadAllTextAsync(indexHtmlFilePath);
        var htmlDoc = new HtmlDocument();
        htmlDoc.LoadHtml(htmlString);

        var aLinks = htmlDoc.DocumentNode
        .SelectNodes("//ul[@class='tsd-small-nested-navigation']/li/a");

        Console.WriteLine(aLinks.Count);

        foreach (var aLinkNode in aLinks)
        {
            var href = aLinkNode.GetAttributeValue("href", "");
            if (string.IsNullOrEmpty(href))
            {
                continue;
            }

            var hrefParts = href.Split("/");
            var methodName = hrefParts.Last().Replace(".html", "");
            Console.WriteLine(methodName + ": " + href);
            var methodType = hrefParts[0];
            var linkPrefix = "/nodejs/object-reference/api/";

            results.Add(new APILink
            {
                Key = methodName,
                Href = linkPrefix + href
            });

            if (!href.StartsWith("classes"))
            {
                continue;
            }

            var detailsHtmlFilePath = Path.Join(StringFolder.PROJECT_REPOSITORY,
              "static-assets",
              $"{libraryName}-nodejs",
              "api-reference",
              aLinkNode.GetAttributeValue("href", ""));
            if (!File.Exists(detailsHtmlFilePath))
            {
                Console.WriteLine($"file {detailsHtmlFilePath} NOT FOUND");
                continue;
            }

            string htmlDetailString = await File.ReadAllTextAsync(detailsHtmlFilePath);
            var htmlDetailDoc = new HtmlDocument();
            htmlDetailDoc.LoadHtml(htmlDetailString);


            var aDetailLinks = htmlDetailDoc.DocumentNode
            .SelectNodes("//div[@class='tsd-index-list']/a");

            foreach (var aDetailLink in aDetailLinks)
            {
                if (aDetailLink.GetAttributeValue("class", "").Contains("private"))
                {
                    continue;
                }
                var detailRef = aDetailLink.GetAttributeValue("href", "");
                var detailMethodName = detailRef.Split("#").Last();
                if (detailMethodName == "constructor" || detailMethodName.StartsWith("_"))
                {
                    continue;
                }
                Console.WriteLine("\t" + detailMethodName + ": " + detailRef);
                results.Add(new APILink
                {
                    Key = detailMethodName,
                    Href = $"{linkPrefix}/{methodType}/{detailRef}"
                });

                results.Add(new APILink
                {
                    Key = methodName + "." + detailMethodName,
                    Href = $"{linkPrefix}/{methodType}/{detailRef}"
                });
            }

        }

        string fileName = $"data/nodejs-{libraryName}-api-link.json";
        await using FileStream createStream = File.Create(fileName);
        await JsonSerializer.SerializeAsync(createStream, results, new JsonSerializerOptions { WriteIndented = true });
    }
}