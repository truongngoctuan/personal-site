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
        return new TaskDesc
        {
          Site = t.Contains("ironpdf") ? "ironpdf.com" : "ironsoftware.com",
          Slug = slug,
          RelativePathMarkdownFile = t.Replace(urlSplits[0], "").Trim('/') + ".md",
          RelativePathImagesFolder = $"/static-assets/pdf/blog/{slug}/"
        };
      }).ToArray();
    }
  }
}