

using System.Text.RegularExpressions;

namespace ContentEdit.Core;

public class CSharpTechnicalLinkAdder : IContentUpdater
{
    public string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var result = raw;
        result = TechnicalLinkAdder.Update(taskDesc, result);
        return result;
    }
}

