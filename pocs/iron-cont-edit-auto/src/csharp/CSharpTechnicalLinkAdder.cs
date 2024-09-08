

using System.Text.Json;
using System.Text.RegularExpressions;
using ContentEdit.Meta;

namespace ContentEdit.Core;

public class CSharpTechnicalLinkAdder : IContentUpdater
{
    public string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var markdownContent = raw;

        if (taskDesc.TaskType == TaskType.IronOCR)
        {
            markdownContent = markdownContent.Replace("`AddImage`", "`LoadImage`");
            markdownContent = markdownContent.Replace(".AddImage(", ".LoadImage(");
        }

        var replaceStringsByTypes = new Dictionary<TaskType, Dictionary<string, string>>();
        // read from file
        var metaFiles = new[] {
            new {
            Type = TaskType.IronPDF,
            FileName = "data/ironpdf-api-link.json"
            },
            new {
            Type = TaskType.IronOCR,
            FileName = "data/ironocr-api-link.json"
            },
            new {
            Type = TaskType.IronXL,
            FileName = "data/ironxl-api-link.json"
            },
            new {
            Type = TaskType.IronBarcode,
            FileName = "data/ironbarcode-api-link.json"
            }
        };

        foreach (var metaFile in metaFiles)
        {
            string jsonString = File.ReadAllText(metaFile.FileName);
            var apiLinks = JsonSerializer.Deserialize<APILink[]>(jsonString);
            if (apiLinks != null)
            {
                var dictPerType = new Dictionary<string, string>();
                foreach (var apiLink in apiLinks)
                {
                    dictPerType.Add(apiLink.Key, apiLink.Href);
                }
                replaceStringsByTypes.Add(metaFile.Type, dictPerType);
            }
        }
        markdownContent = TechnicalLinkAdder.Update(replaceStringsByTypes, taskDesc, markdownContent);
        return markdownContent;
    }
}

