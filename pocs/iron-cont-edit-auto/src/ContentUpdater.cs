using System.Text.RegularExpressions;

namespace ContentEdit.Core
{
  public static class ContentUpdater
  {
    public static void Update(TaskDesc taskDesc, IEnumerable<CategoryPost> posts)
    {
      var slug = taskDesc.Slug;
      Console.WriteLine($"--slug={slug}---------------------------");
      var matchedPost = posts?
       .Where(p => p.PostLink.Contains(slug + "/")).FirstOrDefault();
      if (matchedPost == null)
      {
        Console.WriteLine("slug post index NOT FOUND");
        return;
      }

      var markdownFilePath = Path.Join(
        StringFolder.PROJECT_REPOSITORY,
        StringFolder.RELATIVE_FOLDER,
        "markdown",
        taskDesc.Site,
        taskDesc.RelativePathMarkdownFile);
      if (!File.Exists(markdownFilePath))
      {
        Console.WriteLine($"file {markdownFilePath} NOT FOUND");
      }

      var raw = File.ReadAllText(markdownFilePath);
      var result = raw;

      // replace with markdown img and description
      //handle warpper
      var imgPattern3 = """<div (.+?)>(\n)(\s*)(.+?)?(\s*)<img src="(.+?)(\d{1,2})(.{4})" alt="(.*?)"(.*?)>(\n)(\s*)(.+?)?\n</div>""";
      var imgReplacement3 = $"![{matchedPost.PostHeader}, Figure $7: $9]($6$7$8)\n**$9**";
      result = Regex.Replace(result, imgPattern3, imgReplacement3);

      var imgPattern1 = """<div (.+?)\n(\s*)<img src="(.+?)(\d{1,2})(.{4})" alt="(.*?)"(.*?)>(.|\n*?)</div>""";
      var imgReplacement1 = $"![{matchedPost.PostHeader}, Figure $4: $6]($3$4$5)\n**$6**";
      result = Regex.Replace(result, imgPattern1, imgReplacement1);


      // replace with markdown urls
      var urlPattern = """<a href="(.+?)"(.*?)>(.+?)</a>""";
      var urlReplacement = "[$3]($1)";

      result = Regex.Replace(result, urlPattern, urlReplacement);

      // remove special characters
      result = result.Replace(" ", " ");
      result = result.Replace(" ", " ");
      result = result.Replace("’", "'");
      result = result.Replace("“", "\"");
      result = result.Replace("”", "\"");

      // imgs png to webp, updating image url as well

      File.WriteAllText(markdownFilePath, result);

    }
  }
}