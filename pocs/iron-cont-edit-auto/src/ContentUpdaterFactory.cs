

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
            default:
                return new CSharpContentUpdater();
        }
    }
}