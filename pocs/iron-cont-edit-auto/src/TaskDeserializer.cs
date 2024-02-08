namespace ContentEdit.Core
{
  public static class TaskDeserializer
  {
    public static TaskDesc[] TaskDeserialize(string url)
    {
      var tasks = File.ReadAllText(url).Split("\n");

      return tasks.Select(t =>
      {
        var urlSplits = t.Split("/");
        var slug = urlSplits[urlSplits.Length - 2];
        var site = t.Contains("ironpdf") ? "ironpdf.com" : "ironsoftware.com";
        var staticAssetsPath = $"/static-assets/pdf/blog/{slug}/";
        var taskType = TaskType.IronPDF;

        if (site == "ironsoftware.com")
        {
          if (t.Contains("ocr"))
          {
            taskType = TaskType.IronOCR;
            staticAssetsPath = $"/static-assets/ocr/blog/{slug}/";
          }
          if (t.Contains("excel"))
          {
            taskType = TaskType.IronXL;
            staticAssetsPath = $"/static-assets/excel/blog/{slug}/";
          }
          if (t.Contains("using-ironbarcode"))
          {
            taskType = TaskType.IronBarcode;
            staticAssetsPath = $"/static-assets/barcode/blog/{slug}/";
          }
          // add more type
        }
        return new TaskDesc
        {
          TaskType = taskType,
          Site = site,
          Slug = slug,
          RelativePathMarkdownFile = t.Replace(urlSplits[0], "").Trim('/') + ".md",
          RelativePathImagesFolder = staticAssetsPath,
          RelativePathBlogIndexJsonFile = $"json/{String.Join("/", urlSplits[Range.EndAt(urlSplits.Length - 3 - 1)])}/blog/index.json"
        };
      }).ToArray();
    }
  }
}

///ironsoftware.com/csharp/ocr/blog/using-ironocr/subtitle-ocr-csharp-tutorial/
///static-assets          /ocr/blog/subtitle-ocr-csharp-tutorial/subtitle-ocr-csharp-tutorial-1.webp