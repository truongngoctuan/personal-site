using System.Collections;
using System.IO.Enumeration;
using System.Text.Json;
using System.Text.RegularExpressions;
using ContentEdit.Meta;

namespace ContentEdit.Core
{
    public static class TechnicalLinkAdder
    {
        public static string Update(Dictionary<TaskType, Dictionary<string, string>> replaceStringsByTypes, TaskDesc taskDesc, string markdownContent)
        {
            var replaceStringsByType = replaceStringsByTypes[taskDesc.TaskType];
            foreach (var replacePair in replaceStringsByType)
            {
                if (replacePair.Key == "") continue;

                if (markdownContent.Contains($"{replacePair.Key} button", StringComparison.CurrentCultureIgnoreCase) ||
                markdownContent.Contains($"**{replacePair.Key}** button", StringComparison.CurrentCultureIgnoreCase)) continue;

                markdownContent = markdownContent.Replace($"`**{replacePair.Key}**`", $"`{replacePair.Key}`", StringComparison.OrdinalIgnoreCase);
                markdownContent = markdownContent.Replace($"**{replacePair.Key}**", $"`{replacePair.Key}`", StringComparison.OrdinalIgnoreCase);
                markdownContent = markdownContent.Replace($"`{replacePair.Key}`", $"`{replacePair.Key}`", StringComparison.OrdinalIgnoreCase);
                markdownContent = markdownContent.Replace($"**{replacePair.Key}()**", $"`{replacePair.Key}`", StringComparison.OrdinalIgnoreCase);
                markdownContent = markdownContent.Replace($"`{replacePair.Key}()`", $"`{replacePair.Key}`", StringComparison.OrdinalIgnoreCase);
                if (Regex.IsMatch(markdownContent, $"\\[`{replacePair.Key}`\\]"))
                {
                    continue;
                }

                var regex = new Regex($"(?<!\\[)`{replacePair.Key}`");
                var replaceValue = $"[`{replacePair.Key}`]({replacePair.Value})";
                markdownContent = regex.Replace(markdownContent, replaceValue, 1);
            }

            return markdownContent;
        }
    }
}