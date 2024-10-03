

namespace ContentEdit.Core;

public class PythonTechnicalLinkAdder : IContentUpdater
{
    public string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var markdownContent = raw;

        var replaceStringsByTypes = new Dictionary<TaskType, Dictionary<string, string>>
        {
            { TaskType.IronPDF, new Dictionary<string, string> {
            
            
                }
            },
        };


        markdownContent = TechnicalLinkAdder.Update(replaceStringsByTypes, taskDesc, markdownContent);

        return markdownContent;
    }
}

