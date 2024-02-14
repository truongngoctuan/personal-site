
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.RegularExpressions;

namespace ContentEdit.Meta
{
  class APIObject
  {
    [JsonPropertyName("uid")]
    public required string Uid { get; set; }
    [JsonPropertyName("name")]
    public required string Name { get; set; }
    [JsonPropertyName("href")]
    public required string Href { get; set; }
    [JsonPropertyName("commentId")]
    public required string CommentId { get; set; }
    [JsonPropertyName("fullName")]
    public required string FullName { get; set; }
    [JsonPropertyName("nameWithType")]
    public required string NameWithType { get; set; }

    //     "uid": "IronPdf.PdfDocument",
    // "name": "PdfDocument",
    // "href": "api/IronPdf.PdfDocument.html",
    // "commentId": "T:IronPdf.PdfDocument",
    // "fullName": "IronPdf.PdfDocument",
    // "nameWithType": "PdfDocument"
  }
  class APIFile
  {
    [JsonPropertyName("references")]
    public required APIObject[] References { get; set; }
  }

  class APIOBjectType
  {
    public const string Property = "P:";
    public const string Method = "M:";
    public const string Type = "T:";
    public const string MethodOverload = "Overload:";
  }

  public class APILink
  {
    public required string Key { get; set; }
    public required string Href { get; set; }
  }

  public static class APILinkExtractor
  {
    public static async Task Extract()
    {
      string jsonString = File.ReadAllText("data/ironpdf-api.json");
      var apiFile = JsonSerializer.Deserialize<APIFile>(jsonString);
      var methods = apiFile?.References;
      // .Where(t => t.Uid.Contains("PdfDocument"));
      var results = new List<APILink>();
      var dict = new Dictionary<string, bool>();

      if (methods == null) return;

      foreach (var method in methods)
      {
        if (!(method.CommentId.StartsWith(APIOBjectType.Type) || method.CommentId.StartsWith(APIOBjectType.Method))) continue;
        if (method.CommentId.StartsWith(APIOBjectType.Method) && method.Uid.Contains("#ctor")) continue;

        var methodName = Regex.Replace(method.Name, """^([a-z,A-Z,0-9]+)\(.*\)""", "$1");
        var methodNameWithType = Regex.Replace(method.NameWithType, """^([a-z,A-Z,0-9,\.]+)\(.*\)""", "$1");
        if (methodName == "ToString") continue;
        if (dict.ContainsKey(methodName)) continue;

        Console.WriteLine($"{methodNameWithType} | {methodName} | {method.Href}");
        results.Add(new APILink
        {
          Key = methodName,
          Href = "/object-reference/" + method.Href
        });
        if (methodName != methodNameWithType)
        {
          results.Add(new APILink
          {
            Key = methodNameWithType,
            Href = "/object-reference/" + method.Href
          });
        }

        dict.Add(methodName, true);

      }

      string fileName = "data/ironpdf-api-link.json";
      await using FileStream createStream = File.Create(fileName);
      await JsonSerializer.SerializeAsync(createStream, results, new JsonSerializerOptions { WriteIndented = true });
    }
  }
}