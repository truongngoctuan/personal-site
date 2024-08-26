

namespace ContentEdit.Core;

public class TechnicalLinkAdderFactory
{
    public IContentUpdater CreateInstant(ProgrammingLanguage pl)
    {
        switch (pl)
        {
            case ProgrammingLanguage.Java:
                return new JavaTechnicalLinkAdder();
            default:
                return new CSharpTechnicalLinkAdder();
        }
    }
}