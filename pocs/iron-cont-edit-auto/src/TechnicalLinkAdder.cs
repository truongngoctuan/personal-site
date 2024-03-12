using System.Collections;
using System.IO.Enumeration;
using System.Text.Json;
using System.Text.RegularExpressions;
using ContentEdit.Meta;

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
        // { TaskType.IronPDF, new Dictionary<string, string> {
        //   {"ChromePdfRenderer", "/object-reference/api/IronPdf.ChromePdfRenderer.html"},
        //   {"RenderHtmlAsPdf", "/object-reference/api/IronPdf.ChromePdfRenderer.html#IronPdf_ChromePdfRenderer_RenderHtmlAsPdf_System_String_System_String_System_String_"},
        //   {"RenderHtmlFileAsPdf", "/object-reference/api/IronPdf.ChromePdfRenderer.html#IronPdf_ChromePdfRenderer_RenderHtmlFileAsPdf_System_String_"},

        //   // PdfDocument
        //   {"PdfDocument", "/object-reference/api/IronPdf.PdfDocument.html"},
        //   {"FromFile","/object-reference/api/IronPdf.PdfDocument.html#IronPdf_PdfDocument_FromFile_System_String_System_String_System_String_IronPdf_Rendering_ChangeTrackingModes_"},
        //   {"ExtractAllText", "/object-reference/api/IronPdf.PdfDocument.html#IronPdf_PdfDocument_ExtractAllText_IronPdf_TextExtractionOrder_"},

        //   // ImageToPdfConverter
        //   {"ImageToPdfConverter", "/object-reference/api/IronPdf.ImageToPdfConverter.html"},
        //   {"ImageToPdf", "/object-reference/api/IronPdf.ImageToPdfConverter.html#IronPdf_ImageToPdfConverter_ImageToPdf_IronSoftware_Drawing_AnyBitmap_IronPdf_Imaging_ImageBehavior_IronPdf_ChromePdfRenderOptions_"}
        // }},
        // { TaskType.IronOCR, new Dictionary<string, string> {
        //   { "IronTesseract", "/csharp/ocr/object-reference/api/IronOcr.IronTesseract.html"},
        //   { "OcrInput", "/csharp/ocr/object-reference/api/IronOcr.OcrInput.html"},
        //   { "OcrResult", "/csharp/ocr/object-reference/api/IronOcr.OcrResult.html"},
        //   { "Read", "/csharp/ocr/object-reference/api/IronOcr.IronTesseract.html#IronOcr_IronTesseract_Read_IronOcr_OcrInputBase_"},
        //   { "LoadImage", "/csharp/ocr/object-reference/api/IronOcr.OcrInput.html#IronOcr_OcrInput_LoadImage_IronSoftware_Drawing_AnyBitmap_IronSoftware_Drawing_Rectangle_"},
        //   { "LoadPdf", "/csharp/ocr/object-reference/api/IronOcr.OcrInput.html#IronOcr_OcrInput_LoadPdf_System_Byte___System_Int32_System_Boolean_IronSoftware_Drawing_Rectangle_System_String_"},
        // }},
        // { TaskType.IronXL, new Dictionary<string, string> {
        //   {"WorkBook", "/csharp/excel/object-reference/api/IronXL.WorkBook.html"},
        //   {"WorkSheet", "/csharp/excel/object-reference/api/IronXL.WorkSheet.html"},
        //   { "Load", "/csharp/excel/object-reference/api/IronXL.WorkBook.html#IronXL_WorkBook_Load_System_String_"},
        //   {"LoadCSV", "/csharp/excel/object-reference/api/IronXL.WorkBook.html#IronXL_WorkBook_LoadCSV_System_String_IronXL_ExcelFileFormat_System_String_System_Boolean_"},
        //   { "SaveAs", "/csharp/excel/object-reference/api/IronXL.WorkBook.html#IronXL_WorkBook_SaveAs_System_String_"},
        //   { "SaveAsCSV", "/csharp/excel/object-reference/api/IronXL.WorkBook.html#IronXL_WorkBook_SaveAsCsv_System_String_System_String_"},
        //   { "GetRange", "/csharp/excel/object-reference/api/IronXL.WorkSheet.html#IronXL_WorkSheet_GetRange_System_String_"},
        //   {"GetRow", "/csharp/excel/object-reference/api/IronXL.WorkSheet.html#IronXL_WorkSheet_GetRow_System_Int32_"},
        //   {"GetColumn", "/csharp/excel/object-reference/api/IronXL.WorkSheet.html#IronXL_WorkSheet_GetColumn_System_Int32_"}
        // }},
        // { TaskType.IronBarcode, new Dictionary<string, string> {
        //   //reader
        //   {"BarcodeReader", "/csharp/barcode/object-reference/api/IronBarCode.BarcodeReader.html"},
        //   {"Read", "/csharp/barcode/object-reference/api/IronBarCode.BarcodeReader.html#IronBarCode_BarcodeReader_Read_IronSoftware_Drawing_AnyBitmap_IronBarCode_BarcodeReaderOptions_"},
        //   {"ReadPdf", "/csharp/barcode/object-reference/api/IronBarCode.BarcodeReader.html#IronBarCode_BarcodeReader_ReadPdf_System_Byte___IronBarCode_PdfBarcodeReaderOptions_"},
        //   { "ReadAsync", "/csharp/barcode/object-reference/api/IronBarCode.BarcodeReader.html#IronBarCode_BarcodeReader_ReadAsync_IronSoftware_Drawing_AnyBitmap_IronBarCode_BarcodeReaderOptions_"},
        //   { "BarcodeResult", "/csharp/barcode/object-reference/api/IronBarCode.BarcodeResult.html"},

        //   // writer
        //   {"QRCodeWriter", "/csharp/barcode/object-reference/api/IronBarCode.QRCodeWriter.html"},
        //   {"BarcodeWriter", "/csharp/barcode/object-reference/api/IronBarCode.BarcodeWriter.html"},
        //   {"CreateBarcode","/csharp/barcode/object-reference/api/IronBarCode.BarcodeWriter.html#IronBarCode_BarcodeWriter_CreateBarcode_System_Byte___IronBarCode_BarcodeEncoding_"},
        //   { "CreateQrCode", "/csharp/barcode/object-reference/api/IronBarCode.QRCodeWriter.html#IronBarCode_QRCodeWriter_CreateQrCode_System_Byte___System_Int32_IronBarCode_QRCodeWriter_QrErrorCorrectionLevel_System_Int32_"},
        //   {"CreateQrCodeWithLogo", "/csharp/barcode/object-reference/api/IronBarCode.QRCodeWriter.html#IronBarCode_QRCodeWriter_CreateQrCodeWithLogo_System_Byte___IronBarCode_QRCodeLogo_System_Int32_System_Int32_"},
        //   { "GeneratedBarcode", "/csharp/barcode/object-reference/api/IronBarCode.GeneratedBarcode.html"},
        //   {"SaveAsPdf", "/csharp/barcode/object-reference/api/IronBarCode.GeneratedBarcode.html#IronBarCode_GeneratedBarcode_SaveAsPdf_System_String_"},
        //   {"SaveAsHtmlFile", "/csharp/barcode/object-reference/api/IronBarCode.GeneratedBarcode.html#IronBarCode_GeneratedBarcode_SaveAsHtmlFile_System_String_"},
        //   {"SaveAsPng", "/csharp/barcode/object-reference/api/IronBarCode.GeneratedBarcode.html#IronBarCode_GeneratedBarcode_SaveAsPng_System_String_"},
        //   {"ChangeBarCodeColor", "/csharp/barcode/object-reference/api/IronBarCode.GeneratedBarcode.html#IronBarCode_GeneratedBarcode_ChangeBarCodeColor_IronSoftware_Drawing_Color_System_Boolean_"},
        //   { "AddAnnotationTextAboveBarcode", "/csharp/barcode/object-reference/api/IronBarCode.GeneratedBarcode.html#IronBarCode_GeneratedBarcode_AddAnnotationTextAboveBarcode_System_String_IronSoftware_Drawing_Font_IronSoftware_Drawing_Color_"},
        //   { "AddAnnotationTextBelowBarcode", "/csharp/barcode/object-reference/api/IronBarCode.GeneratedBarcode.html#IronBarCode_GeneratedBarcode_AddAnnotationTextBelowBarcode_System_String_"},
        //   { "BarcodeEncoding", "/csharp/barcode/object-reference/api/IronBarCode.BarcodeEncoding.html"},
        //   { "ResizeTo", "/csharp/barcode/object-reference/api/IronBarCode.GeneratedBarcode.html#IronBarCode_GeneratedBarcode_ResizeTo_System_Int32_System_Int32_"}
        // }},
      };

      // read from file
      var metaFiles = new[] {
        new {
          Type = TaskType.IronPDF,
          FileName = "data/ironpdf-api-link.json"
        },
        new {
          Type = TaskType.IronOCR,
          FileName = "data/ironocr-api-link.json"
        },
        new {
          Type = TaskType.IronXL,
          FileName = "data/ironxl-api-link.json"
        },
        new {
          Type = TaskType.IronBarcode,
          FileName = "data/ironbarcode-api-link.json"
        }
      };
      foreach (var metaFile in metaFiles)
      {
        string jsonString = File.ReadAllText(metaFile.FileName);
        var apiLinks = JsonSerializer.Deserialize<APILink[]>(jsonString);
        if (apiLinks != null)
        {
          var dictPerType = new Dictionary<string, string>();
          foreach (var apiLink in apiLinks)
          {
            dictPerType.Add(apiLink.Key, apiLink.Href);
          }
          replaceStringsByTypes.Add(metaFile.Type, dictPerType);
        }
      }

      var replaceStringsByType = replaceStringsByTypes[taskDesc.TaskType];
      foreach (var replacePair in replaceStringsByType)
      {
        if (markdownContent.Contains($"{replacePair.Key} button", StringComparison.CurrentCultureIgnoreCase) ||
        markdownContent.Contains($"**{replacePair.Key}** button", StringComparison.CurrentCultureIgnoreCase)) continue;

        markdownContent = markdownContent.Replace($"**{replacePair.Key}**", $"`{replacePair.Key}`", StringComparison.OrdinalIgnoreCase);
        markdownContent = markdownContent.Replace($"`{replacePair.Key}`", $"`{replacePair.Key}`", StringComparison.OrdinalIgnoreCase);
        markdownContent = markdownContent.Replace($"**{replacePair.Key}()**", $"`{replacePair.Key}`", StringComparison.OrdinalIgnoreCase);
        markdownContent = markdownContent.Replace($"`{replacePair.Key}()`", $"`{replacePair.Key}`", StringComparison.OrdinalIgnoreCase);
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