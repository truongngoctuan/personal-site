namespace ContentEdit.Core
{
  public enum TaskType
  {
    IronPDF,
    IronOCR,
    IronZip,
    IronQR,
    IronBarcode,
    IronXL,
  }

  public class TaskDesc
  {
    public required TaskType TaskType { get; set; }
    public required string Site { get; set; }
    public required string Slug { get; set; }
    public required string RelativePathMarkdownFile { get; set; }
    public required string RelativePathImagesFolder { get; set; }
    public required string RelativePathBlogIndexJsonFile { get; set; }
  }
}