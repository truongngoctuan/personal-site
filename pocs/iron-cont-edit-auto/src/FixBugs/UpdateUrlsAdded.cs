
using System.Runtime.CompilerServices;
using System.Text.Json;
using System.Text.RegularExpressions;
using ContentEdit.Core;
using ContentEdit.Meta;

namespace ContentEdit.FixBugs
{

  public static class UpdateUrlsAdded
  {
    public static void ReplaceAPIUrls()
    {
      var libraries = new string[]{
        "ironocr",
        "ironxl",
        "ironbarcode"
      };


      var apiLinks = new List<APILink>();
      foreach (var libraryName in libraries)
      {
        string jsonString = File.ReadAllText($"data/{libraryName}-api-link.json");
        var apiLinksFile = JsonSerializer.Deserialize<APILink[]>(jsonString);
        if (apiLinksFile != null)
        {
          apiLinks.AddRange(apiLinksFile);
        }
      }

      var tasks = TaskDeserializer.TaskDeserialize("tasks-to-fix.txt");
      if (tasks == null) return;
      foreach (var taskDesc in tasks)
      {
        if (taskDesc.TaskType == TaskType.IronPDF) continue;

        var slug = taskDesc.Slug;
        Console.WriteLine($"--slug={slug}---------------------------");

        var markdownFilePath = Path.Join(
          StringFolder.PROJECT_REPOSITORY,
          StringFolder.RELATIVE_FOLDER,
          "markdown",
          taskDesc.Site,
          taskDesc.RelativePathMarkdownFile);
        if (!File.Exists(markdownFilePath))
        {
          Console.WriteLine($"file {markdownFilePath} NOT FOUND");
          continue;
        }

        var markdownContent = File.ReadAllText(markdownFilePath);

        foreach (var apiLink in apiLinks)
        {

          // var linkPrefix = "";
          // if (taskDesc.TaskType == TaskType.IronOCR)
          // {
          //   linkPrefix = "/csharp/ocr";
          // }
          // if (taskDesc.TaskType == TaskType.IronXL)
          // {
          //   linkPrefix = "/csharp/excel";
          // }
          // if (taskDesc.TaskType == TaskType.IronBarcode)
          // {
          //   linkPrefix = "/csharp/barcode";
          // }

          var oldHrefLink = apiLink.Href;
          oldHrefLink = oldHrefLink.Replace("/csharp/ocr", "");
          oldHrefLink = oldHrefLink.Replace("/csharp/excel", "");
          oldHrefLink = oldHrefLink.Replace("/csharp/barcode", "");
          // Console.WriteLine($"({oldHrefLink})");

          markdownContent = markdownContent.Replace(
            $"({oldHrefLink})",
            $"({apiLink.Href})"
          );

        }

        File.WriteAllText(markdownFilePath, markdownContent);

      }
    }
  }
}