

using System.Text.RegularExpressions;

namespace ContentEdit.Core;

public class CSharpContentUpdater : ContentUpdaterBase
{
    public override string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var result = base.Update(taskDesc, matchedPost, raw);

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



        result = result.Replace("Web Forms Applications", "Web Forms Applications", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Web Form Applications", "Web Forms Applications", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Console Application", "Console Application", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Windows Form ", "Windows Forms ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Window Form ", "Windows Forms ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Window Forms ", "Windows Forms ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("blazor ", "Blazor ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace(" blazor", " Blazor", StringComparison.OrdinalIgnoreCase);

        result = result.Replace("\"Program.cs\"", "`Program.cs`");

        result = result.Replace("```cs  ", "```cs");

        result = result.Replace("heets [", "heets[");
        result = result.Replace("ws [", "ws[");


        return result;
    }
}

