

namespace ContentEdit.Core;

public class ContentUpdaterFactory
{
    public IContentUpdater CreateInstant(ProgrammingLanguage pl)
    {
        switch (pl)
        {
            case ProgrammingLanguage.Java:
                return new JavaContentUpdater();
            default:
                return new CSharpContentUpdater();
        }
    }
}