

namespace ContentEdit.Core;

public interface IContentUpdater
{
    string Update(TaskDesc taskDesc, CategoryPost post, string raw);
}

