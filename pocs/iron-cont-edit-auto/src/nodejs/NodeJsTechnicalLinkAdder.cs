

using System.Text.Json;
using System.Text.RegularExpressions;
using ContentEdit.Meta;

namespace ContentEdit.Core;

public class NodeJsTechnicalLinkAdder : IContentUpdater
{
    public string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var markdownContent = raw;


        var replaceStringsByTypes = new Dictionary<TaskType, Dictionary<string, string>>();
        // read from file
        var metaFiles = new[] {
            new {
            Type = TaskType.IronPDF,
            FileName = "data/nodejs-ironpdf-api-link.json"
            },
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

