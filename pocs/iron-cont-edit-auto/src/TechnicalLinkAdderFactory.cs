

namespace ContentEdit.Core;

public class TechnicalLinkAdderFactory
{
    public IContentUpdater CreateInstant(ProgrammingLanguage pl)
    {
        switch (pl)
        {
            case ProgrammingLanguage.Java:
                return new JavaTechnicalLinkAdder();
            case ProgrammingLanguage.Python:
                return new PythonTechnicalLinkAdder();
            default:
                return new CSharpTechnicalLinkAdder();
        }
    }
}