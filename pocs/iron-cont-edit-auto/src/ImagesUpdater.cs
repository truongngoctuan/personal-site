using System.Text.RegularExpressions;
using SixLabors.ImageSharp.Formats.Webp;

namespace ContentEdit.Core
{
  public static class ImagesUpdater
  {
    public static string Update(TaskDesc taskDesc, string markdownContent)
    {
      var imageFolder = Path.Join(
        StringFolder.PROJECT_REPOSITORY,
        taskDesc.RelativePathImagesFolder
        );

      if (!Directory.Exists(imageFolder))
      {
        Console.WriteLine($"folder taskDesc.RelativePathImagesFolde NOT FOUND");
        return markdownContent;
      }

      var imagePaths = Directory.GetFiles(imageFolder)
      .Where(p => new string[] { ".png" }.Contains(Path.GetExtension(p)));

      foreach (var imagePath in imagePaths)
      {
        var fileName = Path.GetFileName(imagePath);
        var fileExtension = Path.GetExtension(imagePath);
        Console.WriteLine($"fileName={fileName}");

        using (var image = Image.Load(imagePath))
        {
          image.SaveAsWebp(imagePath.Replace(fileExtension, ".webp"), new WebpEncoder
          {
            Quality = 80,
            FileFormat = WebpFileFormatType.Lossy
          });
        }

        // remove old file
        // File.Delete(imagePath);

        // replace png file with webp one
        markdownContent = markdownContent.Replace(fileName, fileName.Replace(fileExtension, ".webp"));
      }

      return markdownContent;
    }
  }
}