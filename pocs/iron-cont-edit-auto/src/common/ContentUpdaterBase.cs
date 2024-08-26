

using System.Text.RegularExpressions;

namespace ContentEdit.Core;

public class ContentUpdaterBase : IContentUpdater
{
    public virtual string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var result = raw;
        var isCRLF = result.Contains("\r\n");

        // replace header
        result = Regex.Replace(result, """(\n#+.*)(C#)(.*)""", "$1C&num;$3");

        // replace common technical terms
        result = result.Replace("visual studio", "Visual Studio", StringComparison.OrdinalIgnoreCase);
        // result = result.Replace("visual studio 2020", "Visual Studio", StringComparison.OrdinalIgnoreCase);
        // result = result.Replace("visual studio 2022", "Visual Studio", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Window form", "Windows Forms", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("C#.NET", "C# .NET", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("dot net", ".NET", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("dotnet core", ".NET Core", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("dot net core", ".NET Core", StringComparison.OrdinalIgnoreCase);
        // result = result.Replace("dotnet ", ".NET ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace(".net core", ".NET Core", StringComparison.OrdinalIgnoreCase);
        // result = result.Replace(" net", " .NET");
        // result = result.Replace("net ", ".NET ");
        result = result.Replace(".Net", ".NET");
        result = result.Replace(" NET Core", " .NET Core");

        result = result.Replace("asp mvc", "ASP.NET MVC", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("VB .NET", "VB.NET");

        result = result.Replace("nuget ", "NuGet ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("console application", "Console Application");
        result = result.Replace("Web application", "Web Application", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Windows application", "Windows Application", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Web forms", "Web Forms", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("windows forms", "Windows Forms", StringComparison.OrdinalIgnoreCase);
        result = result.Replace(".NET framework", ".NET Framework", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Core Framework", "Core Framework", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("-> ", "> ");
        result = result.Replace("Tools>", "**Tools** >", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Tools >", "**Tools** >", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Solution explorer", "Solution Explorer", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("NuGet Package manager", "NuGet Package Manager", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("package manager console", "Package Manager Console", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Manage NuGet Packages manager for Solution", "Manage NuGet Packages for Solution", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Manage NuGet Package manager for Solution", "Manage NuGet Packages for Solution", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("NuGet Packages manager for Solution", "Manage NuGet Packages for Solution", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("NuGet Package manager for Solution", "Manage NuGet Packages for Solution", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("> Manage NuGet Packages for Solution", "> **Manage NuGet Packages for Solution**", StringComparison.OrdinalIgnoreCase);
        result = Regex.Replace(result, """> Manage NuGet(.+)Solution""", "> **Manage NuGet Packages for Solution**");
        result = result.Replace("> NuGet Package manager", "> **NuGet Package Manager**", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("> Package Manager Console", "> **Package Manager Console**", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("** => **", "** > **");
        result = result.Replace("pdf file", "PDF file");
        result = result.Replace("Pdf file", "PDF file");
        result = result.Replace("pdf document", "PDF document");
        result = result.Replace("Pdf document", "PDF document");
        result = result.Replace("xlsx file", "XLSX file");
        result = result.Replace("xls file", "XLS file");
        result = result.Replace("xlsx File", "XLSX File");
        result = result.Replace("xls File", "XLS File");
        // result = result.Replace("excel file", "Excel file", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace("excel ", "Excel ");
        // result = result.Replace(" excel", " Excel");
        result = result.Replace("MS Excel", "Microsoft Excel");
        result = result.Replace("csv ", "CSV ", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace(" csv", " CSV", StringComparison.CurrentCultureIgnoreCase);

        result = result.Replace("word file", "Word file", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace("word document", "Word document", StringComparison.CurrentCultureIgnoreCase);

        result = result.Replace("\"Next\" button", "**Next** button", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Next button", "**Next** button", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("\"Create\" button", "**Create** button", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Create button", "**Create** button", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("__Create__ button", "**Create** button", StringComparison.OrdinalIgnoreCase);

        result = result.Replace("javascript", "JavaScript", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Web Forms Applications", "Web Forms Applications", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Web Form Applications", "Web Forms Applications", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Console Application", "Console Application", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Windows Form ", "Windows Forms ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Window Form ", "Windows Forms ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Window Forms ", "Windows Forms ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("blazor ", "Blazor ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace(" blazor", " Blazor", StringComparison.OrdinalIgnoreCase);


        result = result.Replace("Iron Barcode", "IronBarcode", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Iron OCR", "IronOCR", StringComparison.OrdinalIgnoreCase);

        result = result.Replace("\"Program.cs\"", "`Program.cs`");

        result = result.Replace("```cs  ", "```cs");

        result = result.Replace("heets [", "heets[");
        result = result.Replace("ws [", "ws[");

        // result = result.Replace("IronBarCode", "IronBarcode");

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
        // with space in unordered list
        var imgPattern6 = """<div (.+?)(\n)      <img src="(.+?)(\d{1,2})(.{4,5})" alt="(.*?)"(.*?)>(\n)      <p (.+?)(\n)  </div>""";
        var imgReplacement6 = $"![{matchedPost.PostHeader}, Figure $4: $6]($3$4$5)\n  **$6**";
        result = Regex.Replace(result, imgPattern6, imgReplacement6);

        var imgPattern7 = """<div (.+?)(\n)        <img src="(.+?)(\d{1,2})(.{4,5})" alt="(.*?)"(.*?)>(\n)        <p (.+?)(\n)    </div>""";
        var imgReplacement7 = $"![{matchedPost.PostHeader}, Figure $4: $6]($3$4$5)\n    **$6**";
        result = Regex.Replace(result, imgPattern7, imgReplacement7);

        var imgPattern8 = """<div (.+?)(\n)            <img src="(.+?)(\d{1,2})(.{4,5})" alt="(.*?)"(.*?)>(\n)            <p (.+?)(\n)        </div>""";
        var imgReplacement8 = $"![{matchedPost.PostHeader}, Figure $4: $6]($3$4$5)\n        **$6**";
        result = Regex.Replace(result, imgPattern8, imgReplacement8);

        var imgPattern9 = """<div (.+?)(\n)                <img src="(.+?)(\d{1,2})(.{4,5})" alt="(.*?)"(.*?)>(\n)                <p (.+?)(\n)            </div>""";
        var imgReplacement9 = $"![{matchedPost.PostHeader}, Figure $4: $6]($3$4$5)\n            **$6**";
        result = Regex.Replace(result, imgPattern9, imgReplacement9);


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
            $"{matchedPost.PostHeader}, Figure {i}", StringComparison.CurrentCultureIgnoreCase);
            result = result.Replace($"**{matchedPost.PostHeader}, Figure {i}: ", "**");
            result = result.Replace($"{matchedPost.PostHeader}: Figure {i} - ", $"{matchedPost.PostHeader}, Figure {i}: ");
            result = result.Replace($"{matchedPost.PostHeader}: Figure {i}- ", $"{matchedPost.PostHeader}, Figure {i}: ");
            result = result.Replace($"{matchedPost.PostHeader}: Figure {i}]", $"{matchedPost.PostHeader}, Figure {i}: ]");
        }

        // adding empty **** line after image if missing one
        var urlPattern10 = """    \!\[(.+)\]\((.+)\)\n\n""";
        var urlReplacement10 = "    ![$1]($2)\n    ****\n\n";
        result = Regex.Replace(result, urlPattern10, urlReplacement10);

        var urlPattern11 = """\!\[(.+)\]\((.+)\)\n\n""";
        var urlReplacement11 = "![$1]($2)\n****\n\n";
        result = Regex.Replace(result, urlPattern11, urlReplacement11);

        // ![How to Generate an Excel File on Razor Pages, Figure 2: 
        // **How to Generate an Excel File in Razor Pages, Figure 2: 
        var urlPattern12 = """\!\[(.+)\:\s(.+)\]\((.+)\)\n\*\*\*\*\n""";
        var urlReplacement12 = "![$1: $2]($3)\n**$2**\n\n";
        result = Regex.Replace(result, urlPattern12, urlReplacement12);

        var urlPattern13 = """\s{4}\!\[(.+)\:\s(.+)\]\((.+)\)\n\s{4}\*\*\*\*\n""";
        var urlReplacement13 = "    ![$1: $2]($3)\n    **$2**\n\n";
        result = Regex.Replace(result, urlPattern13, urlReplacement13);

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
        if (isCRLF)
        {
            result = Regex.Replace(result, "\\r\\n\\r\\n\\r\\n", "\r\n\r\n");
        }
        else
        {
            result = Regex.Replace(result, "\\n\\n\\n", "\n\n");
        }

        return result;
    }
}

