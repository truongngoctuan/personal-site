using System.Text.Json;
using ContentEdit.Core;

namespace HelloWorld
{
  class Program
  {

    static void Main(string[] args)
    {
      processTasks();
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
