

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
                case ProgrammingLanguage.NodeJs:
                return new NodeJsTechnicalLinkAdder();
            default:
                return new CSharpTechnicalLinkAdder();
        }
    }
}