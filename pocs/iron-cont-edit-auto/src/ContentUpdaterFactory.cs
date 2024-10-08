

namespace ContentEdit.Core;

public class ContentUpdaterFactory
{
    public IContentUpdater CreateInstant(ProgrammingLanguage pl)
    {
        switch (pl)
        {
            case ProgrammingLanguage.Java:
                return new JavaContentUpdater();
            case ProgrammingLanguage.Python:
                return new PythonContentUpdater();
            case ProgrammingLanguage.NodeJs:
                return new NodeJsContentUpdater();
            default:
                return new CSharpContentUpdater();
        }
    }
}