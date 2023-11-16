using System.Text.Json;
using ContentEdit.Core;

namespace HelloWorld
{
  class Program
  {

    static void Main(string[] args)
    {
      processTasks("ironpdf.com", File.ReadAllText(Path.Join(
        StringFolder.PROJECT_REPOSITORY,
        StringFolder.RELATIVE_FOLDER,
        StringFolder.IRONPDF_INDEX_FILE)));

      // processTasks("ironsoftware.com", File.ReadAllText(Path.Join(
      // StringFolder.PROJECT_REPOSITORY,
      // StringFolder.RELATIVE_FOLDER,
      // StringFolder.IRONSOFTWARE_INDEX_FILE)));
    }

    static void processTasks(string site, string jsonString)
    {
      var blogIndexes =
                JsonSerializer.Deserialize<BlogIndex>(jsonString);
      var posts = blogIndexes?.Categories.SelectMany(s => s.CategoryPosts);
      if (posts == null)
      {
        Console.WriteLine("Posts NOT FOUND");
        return;
      }

      var tasks = TaskDeserializer.TaskDeserialize("tasks.txt")
        .Where(t => t.Site == site);

      foreach (var task in tasks)
      {
        ContentUpdater.Update(task, posts);
      }
    }
  }
}
