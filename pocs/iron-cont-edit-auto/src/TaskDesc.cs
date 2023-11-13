namespace ContentEdit.Core
{
  public class TaskDesc
  {
    public required string Site { get; set; }
    public required string Slug { get; set; }
    public required string RelativePathMarkdownFile { get; set; }
  }
}