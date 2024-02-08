using System.Collections;
using System.Text.RegularExpressions;

namespace ContentEdit.Core
{
  public static class TechnicalLinkAdder
  {
    public static string Update(TaskDesc taskDesc, string markdownContent)
    {
      if (taskDesc.TaskType == TaskType.IronOCR)
      {
        markdownContent = markdownContent.Replace("`AddImage`", "`LoadImage`");
        markdownContent = markdownContent.Replace(".AddImage(", ".LoadImage(");
      }
      var replaceStringsByTypes = new Dictionary<TaskType, Dictionary<string, string>> {
        { TaskType.IronPDF, new Dictionary<string, string> {}},
        { TaskType.IronOCR, new Dictionary<string, string> {
          { "IronTesseract", "/csharp/ocr/object-reference/api/IronOcr.IronTesseract.html"},
          { "OcrInput", "/csharp/ocr/object-reference/api/IronOcr.OcrInput.html"},
          { "OcrResult", "/csharp/ocr/object-reference/api/IronOcr.OcrResult.html"},
          { "Read", "/csharp/ocr/object-reference/api/IronOcr.IronTesseract.html#IronOcr_IronTesseract_Read_IronOcr_OcrInputBase_"},
          { "LoadImage", "/csharp/ocr/object-reference/api/IronOcr.OcrInput.html#IronOcr_OcrInput_LoadImage_IronSoftware_Drawing_AnyBitmap_IronSoftware_Drawing_Rectangle_"},
          { "LoadPdf", "/csharp/ocr/object-reference/api/IronOcr.OcrInput.html#IronOcr_OcrInput_LoadPdf_System_Byte___System_Int32_System_Boolean_IronSoftware_Drawing_Rectangle_System_String_"},
        }},
        { TaskType.IronXL, new Dictionary<string, string> {
          {"WorkBook", "/csharp/excel/object-reference/api/IronXL.WorkBook.html"},
          {"WorkSheet", "/csharp/excel/object-reference/api/IronXL.WorkSheet.html"},
          { "Load", "/csharp/excel/object-reference/api/IronXL.WorkBook.html#IronXL_WorkBook_Load_System_String_"},
          {"LoadCSV", "/csharp/excel/object-reference/api/IronXL.WorkBook.html#IronXL_WorkBook_LoadCSV_System_String_IronXL_ExcelFileFormat_System_String_System_Boolean_"},
          { "SaveAs", "/csharp/excel/object-reference/api/IronXL.WorkBook.html#IronXL_WorkBook_SaveAs_System_String_"},
          { "SaveAsCSV", "/csharp/excel/object-reference/api/IronXL.WorkBook.html#IronXL_WorkBook_SaveAsCsv_System_String_System_String_"},
          { "GetRange", "/csharp/excel/object-reference/api/IronXL.WorkSheet.html#IronXL_WorkSheet_GetRange_System_String_"},
          {"GetRow", "/csharp/excel/object-reference/api/IronXL.WorkSheet.html#IronXL_WorkSheet_GetRow_System_Int32_"},
          {"GetColumn", "/csharp/excel/object-reference/api/IronXL.WorkSheet.html#IronXL_WorkSheet_GetColumn_System_Int32_"}
        }},
        { TaskType.IronBarcode, new Dictionary<string, string> {}},
      };

      var replaceStringsByType = replaceStringsByTypes[taskDesc.TaskType];
      foreach (var replacePair in replaceStringsByType)
      {
        if (Regex.IsMatch(markdownContent, $"\\[`{replacePair.Key}`\\]"))
        {
          continue;
        }

        var regex = new Regex($"(?<!\\[)`{replacePair.Key}`");
        var replaceValue = $"[`{replacePair.Key}`]({replacePair.Value})";
        markdownContent = regex.Replace(markdownContent, replaceValue, 1);
      }

      return markdownContent;
    }
  }
}