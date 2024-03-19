
using System.Text.Json;
using System.Text.Json.Serialization;

namespace ContentEdit.Trello
{
  class TrelloTask
  {
    [JsonPropertyName("checklists")]
    public required TrelloChecklist[] Checklists { get; set; }
  }

  class TrelloChecklist
  {
    [JsonPropertyName("checkItems")]
    public required TrelloCheckItem[] CheckItems { get; set; }
  }

  class TrelloCheckItem
  {
    [JsonPropertyName("name")]
    public required string Name { get; set; }
  }

  class TaskLinkExtractor
  {
    public static void Extract()
    {
      string jsonString = File.ReadAllText($"data/trello-task4.json");
      var trelloTask = JsonSerializer.Deserialize<TrelloTask>(jsonString);
      if (trelloTask == null) return;

      var tasks = trelloTask.Checklists[0].CheckItems
      .Select(item => item.Name);

      var data = "";
      var dataSlugs = "\n";
      foreach (var task in tasks)
      {
        var taskLink = task.Replace("https://", "");

        data += taskLink + "\n";

        var taskLinkSplits = taskLink.Split("/");
        dataSlugs += taskLinkSplits.SkipLast(1).Last() + "\n";

        File.WriteAllText("data/task4.txt", data + dataSlugs);
      }
    }
  }
}