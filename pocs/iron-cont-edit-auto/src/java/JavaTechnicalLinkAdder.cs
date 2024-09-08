

namespace ContentEdit.Core;

public class JavaTechnicalLinkAdder : IContentUpdater
{
    public string Update(TaskDesc taskDesc, CategoryPost matchedPost, string raw)
    {
        var markdownContent = raw;

        var replaceStringsByTypes = new Dictionary<TaskType, Dictionary<string, string>>
        {
            { TaskType.IronPDF, new Dictionary<string, string> {
            //   {"ChromePdfRenderer", "/object-reference/api/IronPdf.ChromePdfRenderer.html"},
            //   {"RenderHtmlAsPdf", "/object-reference/api/IronPdf.ChromePdfRenderer.html#IronPdf_ChromePdfRenderer_RenderHtmlAsPdf_System_String_System_String_System_String_"},
            //   {"RenderHtmlFileAsPdf", "/object-reference/api/IronPdf.ChromePdfRenderer.html#IronPdf_ChromePdfRenderer_RenderHtmlFileAsPdf_System_String_"},

              // PdfDocument
              {"PdfDocument", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html"},
              {"fromFile", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#fromFile(java.nio.file.Path)"},
              {"renderHtmlAsPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#renderHtmlAsPdf(java.lang.String)"},
              {"renderHtmlFileAsPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#renderHtmlFileAsPdf(java.lang.String)"},
              {"renderUrlAsPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#renderUrlAsPdf(java.lang.String)"},
              {"saveAs", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#saveAs(java.lang.String)"},
              {"fromImage", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#fromImage(java.util.List)"},
              {"extractAllText", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#extractAllText()"},
              {"getSignature", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#getSignature()"},
              {"PdfDocument.fromFile", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#fromFile(java.nio.file.Path)"},
              {"PdfDocument.renderHtmlAsPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#renderHtmlAsPdf(java.lang.String)"},
              {"PdfDocument.renderHtmlFileAsPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#renderHtmlFileAsPdf(java.lang.String)"},
              {"PdfDocument.renderUrlAsPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#renderUrlAsPdf(java.lang.String)"},
              {"PdfDocument.saveAs", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#saveAs(java.lang.String)"},
              {"PdfDocument.fromImage", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#fromImage(java.util.List)"},
              {"PdfDocument.extractAllText", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#extractAllText()"},
              {"PdfDocument.getSignature", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#getSignature()"},
            //   {"", ""},
            //   {"", ""},

            // ChromePdfRenderOptions
            {"ChromePdfRenderOptions", "/java/object-reference/api/com/ironsoftware/ironpdf/render/ChromePdfRenderOptions.html"},

            // SignatureManager
            {"SignatureManager", "/java/object-reference/api/com/ironsoftware/ironpdf/signature/SignatureManager.html"},
            {"SignPdfWithSignature", "/java/object-reference/api/com/ironsoftware/ironpdf/signature/SignatureManager.html#SignPdfWithSignature(com.ironsoftware.ironpdf.signature.Signature)"}
            //   // ImageToPdfConverter
            //   {"ImageToPdfConverter", "/object-reference/api/IronPdf.ImageToPdfConverter.html"},
            //   {"ImageToPdf", "/object-reference/api/IronPdf.ImageToPdfConverter.html#IronPdf_ImageToPdfConverter_ImageToPdf_IronSoftware_Drawing_AnyBitmap_IronPdf_Imaging_ImageBehavior_IronPdf_ChromePdfRenderOptions_"}
            }},
        };


        markdownContent = TechnicalLinkAdder.Update(replaceStringsByTypes, taskDesc, markdownContent);

        return markdownContent;
    }
}

