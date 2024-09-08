

namespace ContentEdit.Core;

public class JavaContentUpdater : ContentUpdaterBase
{
    public override string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var result = base.Update(taskDesc, matchedPost, raw);
        result = result.Replace(" java ", " Java ", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace(" java,", " Java,", StringComparison.CurrentCultureIgnoreCase);


        result = result.Replace("pom.xml file.", "`pom.xml` file.");
        result = result.Replace("pom.xml file,", "`pom.xml` file,");
        result = result.Replace("**pom.xml** file", "`pom.xml` file");

        return result;
    }
}

