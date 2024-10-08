

namespace ContentEdit.Core;

public class NodeJsContentUpdater : CSharpContentUpdater
{
    public override string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var result = base.Update(taskDesc, matchedPost, raw);
        // result = result.Replace(" python", " Python", StringComparison.CurrentCultureIgnoreCase);
        // result = result.Replace("IronPDF Python", "IronPDF for Python", StringComparison.CurrentCultureIgnoreCase);


        // result = result.Replace("https://ironpdf.com/python/licensing/", "licensing");
        // result = result.Replace("/python/licensing/)", "licensing)");

        // result = result.Replace("https://ironpdf.com", "");

        // result = result.Replace(" ####", "");
        // result = result.Replace(" ###", "");
        // result = result.Replace(" ##", "");

        return result;
    }
}

