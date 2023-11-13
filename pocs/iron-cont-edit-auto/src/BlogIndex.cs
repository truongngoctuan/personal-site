
using System.Text.Json.Serialization;

namespace ContentEdit.Core
{
  public class CategoryPost
  {
    [JsonPropertyName("post_header")]
    public required string PostHeader { get; set; }
    [JsonPropertyName("post_description")]
    public required string PostDescription { get; set; }
    [JsonPropertyName("post_date")]
    public required string PostDate { get; set; }
    [JsonPropertyName("post_link")]
    public required string PostLink { get; set; }
  }

  public class Category
  {
    [JsonPropertyName("category_link")]
    public required string CategoryLink { get; set; }
    [JsonPropertyName("category_posts")]
    public required CategoryPost[] CategoryPosts { get; set; }
  }
  public class BlogIndex
  {
    [JsonPropertyName("categories")]
    public required Category[] Categories { get; set; }
  }
}