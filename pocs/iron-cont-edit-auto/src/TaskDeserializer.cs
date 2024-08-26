namespace ContentEdit.Core
{
  public static class TaskDeserializer
  {
    public static TaskDesc[] TaskDeserialize(string url)
    {
      var tasks = File.ReadAllText(url).Split("\n");

      return tasks
      .Where(t => !t.StartsWith("#"))
      .Select(t =>
      {
        var urlSplits = t.Split("/");

        var site = t.Contains("ironpdf") ? "ironpdf.com" : "ironsoftware.com";
        var programmingLanguage = getProgrammingLanguage(urlSplits[1]);
        var taskType = GetTaskType(t, site);

        var slug = urlSplits[urlSplits.Length - 2];

        var staticAssetsPath = $"/static-assets/pdf/blog/{slug}/";


        if (site == "ironsoftware.com")
        {
          if (t.Contains("ocr"))
          {
            staticAssetsPath = $"/static-assets/ocr/blog/{slug}/";
          }
          if (t.Contains("excel"))
          {
            staticAssetsPath = $"/static-assets/excel/blog/{slug}/";
          }
          if (t.Contains("using-ironbarcode"))
          {
            staticAssetsPath = $"/static-assets/barcode/blog/{slug}/";
          }
        }
        return new TaskDesc
        {
          Site = site,
          ProgrammingLanguage = programmingLanguage,
          TaskType = taskType,
          Slug = slug,
          RelativePathMarkdownFile = t.Replace(urlSplits[0], "").Trim('/') + ".md",
          RelativePathImagesFolder = staticAssetsPath,
          RelativePathBlogIndexJsonFile = getRelativeBlogIndexFile(urlSplits),
        };
      }).ToArray();
    }

    internal static ProgrammingLanguage getProgrammingLanguage(string pl)
    {
      switch (pl)
      {
        case "java":
          return ProgrammingLanguage.Java;
        case "python":
          return ProgrammingLanguage.Python;
        default:
          return ProgrammingLanguage.CSharp;
      }
    }

    internal static TaskType GetTaskType(string url, string site)
    {
      if (site == "ironsoftware.com")
      {
        if (url.Contains("ocr"))
        {
          return TaskType.IronOCR;
        }
        if (url.Contains("excel"))
        {
          return TaskType.IronXL;
        }
        if (url.Contains("using-ironbarcode"))
        {
          return TaskType.IronBarcode;
        }
      }

      return TaskType.IronPDF;
    }

    internal static string getRelativeBlogIndexFile(string[] urlSplits)
    {
      return $"json/{String.Join("/", urlSplits[Range.EndAt(urlSplits.Length - 3 - 1)])}/blog/index.json";
    }
  }
}

/// ironpdf.com/blog/pdf-tools/how-to-separate-pdf-pages/
/// 
/// ironsoftware.com/csharp/ocr/blog/using-ironocr/subtitle-ocr-csharp-tutorial/
/// /static-assets          /ocr/blog/subtitle-ocr-csharp-tutorial/subtitle-ocr-csharp-tutorial-1.webp
/// 
/// ironpdf.com/java/blog/using-ironpdf-for-java/pdf-creator-java-tutorial/
/// /static-assets/ironpdf-java/blog/pdf-creator-java/pdf-creator-java-3.webp
/// /static-assets/pdf/blog/pdf-to-pdfa-java/pdf-to-pdfa-java-3.webp ??
/// /static-assets/pdf/blog/how-to-convert-png-to-pdf-java-tutorial/how-to-convert-png-to-pdf-java-tutorial-1.webp