

using System.Text.RegularExpressions;

namespace ContentEdit.Core;

public class NodeJsContentUpdater : CSharpContentUpdater
{
    public override string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var result = base.Update(taskDesc, matchedPost, raw);
        var isCRLF = result.Contains("\r\n");

        result = result.Replace(" Nodejs", " Node.js", StringComparison.OrdinalIgnoreCase);
        result = result.Replace(" Node js", " Node.js", StringComparison.OrdinalIgnoreCase);
        result = result.Replace(" Node ", " Node.js ", StringComparison.OrdinalIgnoreCase);
        result = result.Replace(" Node-js", " Node.js", StringComparison.OrdinalIgnoreCase);
        result = result.Replace("Node.js", "Node.js", StringComparison.OrdinalIgnoreCase);
        // result = result.Replace(" python", " Python", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace("IronPDF Node.js", "IronPDF for Node.js", StringComparison.CurrentCultureIgnoreCase);

        if (isCRLF)
        {
            result = Regex.Replace(result, "```node\\s+\r\n", "```node\r\n");
        }
        else
        {
            result = Regex.Replace(result, "```node\\s+\n", "```node\n");
        }

        return result;
    }
}

