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
      var isCRLF = result.Contains("\r\n");

      // replace common technical terms
      result = result.Replace("Window form", "Windows Forms", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("C#.NET", "C# .NET", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("dotnet core", ".NET Core", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("dot net core", ".NET Core", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("dotnet ", ".NET ", StringComparison.OrdinalIgnoreCase);
      result = result.Replace(".net core", ".NET Core", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("asp mvc", "ASP.NET MVC", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("nuget ", "NuGet ", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("console application", "Console Application");
      result = result.Replace(".NET framework", ".NET Framework", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("-> ", "> ");
      result = result.Replace("Tools>", "**Tools** >", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("Tools >", "**Tools** >", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("NuGet Package manager", "NuGet Package Manager", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("package manager console", "Package Manager Console", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("Manage NuGet Packages manager for Solution", "Manage NuGet Packages for Solution", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("Manage NuGet Package manager for Solution", "Manage NuGet Packages for Solution", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("NuGet Packages manager for Solution", "Manage NuGet Packages for Solution", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("NuGet Package manager for Solution", "Manage NuGet Packages for Solution", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("> Manage NuGet Packages for Solution", "> **Manage NuGet Packages for Solution**", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("> NuGet Package manager", "> **NuGet Package Manager**", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("> Package Manager Console", "> **Package Manager Console**", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("** => **", "** > **");
      result = result.Replace("pdf file", "PDF file");
      result = result.Replace("Pdf file", "PDF file");
      result = result.Replace("pdf document", "PDF document");
      result = result.Replace("Pdf document", "PDF document");

      result = result.Replace("\"Next\" button", "**Next** button", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("Next button", "**Next** button", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("\"Create\" button", "**Create** button", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("Create button", "**Create** button", StringComparison.OrdinalIgnoreCase);

      result = result.Replace("javascript", "JavaScript", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("Web Forms Applications", "Web Forms Applications", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("Web Form Applications", "Web Forms Applications", StringComparison.OrdinalIgnoreCase);
      result = result.Replace("Console Application", "Console Application", StringComparison.OrdinalIgnoreCase);

      // result = result.Replace("", "", StringComparison.OrdinalIgnoreCase);

      // // replce h2 tag with proper heading
      // var heading2Pattern = """<h2>(.+?)</h2>""";
      // var heading2Replacement = $"## $1";
      // result = Regex.Replace(result, heading2Pattern, heading2Replacement);

      // replace with markdown img and description
      //handle warpper
      var imgPattern3 = """<div (.+?)>(\n)(\s*)(.+?)?(\s*)<img src="(.+?)(\d{1,2})(.{4,5})" alt="(.*?)"(.*?)>(\n)(\s*)(.+?)?\n</div>""";
      var imgReplacement3 = $"![{matchedPost.PostHeader}, Figure $7: $9]($6$7$8)\n**$9**";
      result = Regex.Replace(result, imgPattern3, imgReplacement3);

      var imgPattern5 = """<div (.+?)(\n)    <img src="(.+?)(\d{1,2})(.{3,5})" alt="(.*?)"(.*?)>(\n)</div>""";
      var imgReplacement5 = $"![{matchedPost.PostHeader}, Figure $4: $6]($3$4$5)\n**$6**";
      result = Regex.Replace(result, imgPattern5, imgReplacement5);

      var imgPattern1 = """<div (.+?)\n(\s*)<img src="(.+?)(\d{1,2})(.{4,5})" alt="(.*?)"(.*?)>(.|\n*?)</div>""";
      var imgReplacement1 = $"![{matchedPost.PostHeader}, Figure $4: $6]($3$4$5)\n**$6**";
      result = Regex.Replace(result, imgPattern1, imgReplacement1);

      var imgPattern4 = """<div (.+?)(\n)    <div (.+?)(\n)        <img src="(.+?)(\d{1,2})(.{4,5})" alt="(.*?)"(.*?)>(\n)        <p (.+?)(\n)    </div>(\n)</div>""";
      var imgReplacement4 = $"![{matchedPost.PostHeader}, Figure $6: $8]($5$6$7)\n**$8**";
      result = Regex.Replace(result, imgPattern4, imgReplacement4);
      //       < div class="content-img-align-center">
      //     <div class="center-image-wrapper">
      //         <img src = "/static-assets/ocr/blog/ocr-screenshot-csharp-tutorial/ocr-screenshot-csharp-tutorial-1.webp" alt="How to OCR Get Text From Screenshot in C#, Figure 1: New Project" class="img-responsive add-shadow">
      //         <p class="content__image-caption">Creating a New Project in Visual Studio</p>
      //     </div>
      // </div>


      // replace with markdown urls
      var urlPattern = """<a href="(.+?)"(.*?)>(.+?)</a>""";
      var urlReplacement = "[$3]($1)";
      result = Regex.Replace(result, urlPattern, urlReplacement);

      var urlPattern2 = """<a class="js-modal-open" href="#trial-license" data-modal-id="trial-license">(.+?)</a>""";
      var urlReplacement2 = "[$1](trial-license)";
      result = Regex.Replace(result, urlPattern2, urlReplacement2);

      // replace images annotation with duplicated information
      for (int i = 1; i < 15; i++)
      {
        result = result.Replace($"{matchedPost.PostHeader}, Figure {i}: {matchedPost.PostHeader}, Figure {i}",
        $"{matchedPost.PostHeader}, Figure {i}");
        result = result.Replace($"**{matchedPost.PostHeader}, Figure {i}: ", "**");
        Console.WriteLine($"**{matchedPost.PostHeader}, Figure {i}: ");
      }
      // var urlPattern10 = $"{matchedPost.PostHeader}, Figure (\\d)\\: {matchedPost.PostHeader}, Figure (\\d+)";
      // var urlReplacement10 = $"{matchedPost.PostHeader}, Figure $1:";
      // result = Regex.Replace(result, urlPattern10, urlReplacement10);

      // ![How to Generate an Excel File on Razor Pages, Figure 2: 
      // **How to Generate an Excel File in Razor Pages, Figure 2: 

      // remove special characters
      result = result.Replace(" ", " ");
      result = result.Replace(" ", " ");
      result = result.Replace("’", "'");
      result = result.Replace("‘", "'");
      result = result.Replace("“", "\"");
      result = result.Replace("”", "\"");
      result = result.Replace("“", "\"");
      result = result.Replace("”", "\"");



      //remove spaces after paragraph end
      if (isCRLF)
      {
        result = Regex.Replace(result, "\\.\\s" + "\\r\\n", ".\r\n");
        result = Regex.Replace(result, "\\:\\s" + "\\r\\n", ":\r\n");
      }
      else
      {
        result = Regex.Replace(result, "\\.\\s" + "\\n", ".\n\n"); //downt know why
        result = Regex.Replace(result, "\\:\\s" + "\\n", ":\n\n");
      }

      //remove duplicate empty lines
      if (isCRLF) {
        result = Regex.Replace(result, "\\r\\n\\r\\n\\r\\n", "\r\n\r\n");
      }
      else {
        result = Regex.Replace(result, "\\n\\n\\n", "\n\n");
      }


      // imgs png to webp, updating image url as well
      result = ImagesUpdater.Update(taskDesc, result);

      File.WriteAllText(markdownFilePath, result);
    }
  }
}