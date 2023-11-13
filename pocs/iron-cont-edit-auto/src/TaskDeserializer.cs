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
        return new TaskDesc
        {
          Site = t.Contains("ironpdf") ? "ironpdf.com" : "ironsoftware.com",
          Slug = urlSplits[urlSplits.Length - 2],
          RelativePathMarkdownFile = t.Replace(urlSplits[0], "").Trim('/') + ".md"
        };
      }).ToArray();
    }
  }
}