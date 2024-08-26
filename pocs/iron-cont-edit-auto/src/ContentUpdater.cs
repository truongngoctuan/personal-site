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

      var plContentUpdater = new ContentUpdaterFactory().CreateInstant(taskDesc.ProgrammingLanguage);
      var result = plContentUpdater.Update(taskDesc, matchedPost, raw);

      // imgs png to webp, updating image url as well
      result = ImagesUpdater.Update(taskDesc, result);

      var linkAdder = new TechnicalLinkAdderFactory().CreateInstant(taskDesc.ProgrammingLanguage);
      result = linkAdder.Update(taskDesc, matchedPost, result);

      File.WriteAllText(markdownFilePath, result);
    }
  }
}