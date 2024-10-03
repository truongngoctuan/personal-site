

namespace ContentEdit.Core;

public class JavaContentUpdater : ContentUpdaterBase
{
    public override string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var result = base.Update(taskDesc, matchedPost, raw);
        result = result.Replace(" java ", " Java ", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace(" java,", " Java,", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace("IronPDF Java", "IronPDF for Java");

        result = result.Replace(" maven", " Maven", StringComparison.CurrentCultureIgnoreCase);


        result = result.Replace("pom.xml file.", "`pom.xml` file.");
        result = result.Replace("pom.xml file,", "`pom.xml` file,");
        result = result.Replace("pom.xml file:", "`pom.xml` file:");
        result = result.Replace("**pom.xml** file", "`pom.xml` file");
        result = result.Replace("the pom.xml file ", "the `pom.xml` file ");


        result = result.Replace("Netbeans", "NetBeans", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace("IntelliJ", "IntelliJ", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace("IntelliJ IDEA", "IntelliJ IDEA", StringComparison.CurrentCultureIgnoreCase);

        result = result.Replace(" JetBrains", " JetBrains", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace("JetBrains ", "JetBrains ", StringComparison.CurrentCultureIgnoreCase);
        result = result.Replace("JetBrain ", "JetBrains ", StringComparison.CurrentCultureIgnoreCase);

        result = result.Replace("String [] ", "String[] ");


        return result;
    }
}

