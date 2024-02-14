using System.Text.Json;
using ContentEdit.Core;
using ContentEdit.Meta;

namespace HelloWorld
{
  class Program
  {

    static void Main(string[] args)
    {
      // process articles
      processTasks();

      //meta processing steps
      // extract API urls and build up a database for API links, then insert in each article, check TechnicalLinkAdder.cs
      // var t = APILinkExtractor.Extract();
      // Task.WaitAll(t);
    }

    static void processTasks()
    {
      var tasks = TaskDeserializer.TaskDeserialize("tasks.txt");

      foreach (var task in tasks)
      {
        var jsonString = File.ReadAllText(Path.Join(
       StringFolder.PROJECT_REPOSITORY,
       StringFolder.RELATIVE_FOLDER,
       task.RelativePathBlogIndexJsonFile));

        var blogIndexes =
                JsonSerializer.Deserialize<BlogIndex>(jsonString);
        var posts = blogIndexes?.Categories.SelectMany(s => s.CategoryPosts);
        if (posts == null)
        {
          Console.WriteLine("Posts NOT FOUND");
          return;
        }

        ContentUpdater.Update(task, posts);
      }
    }
  }
}
