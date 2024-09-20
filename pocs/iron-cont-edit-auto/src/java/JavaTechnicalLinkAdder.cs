

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
              {"addBackgroundPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#addBackgroundPdf(com.ironsoftware.ironpdf.PdfDocument)"},
              {"addForegroundPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#addForegroundPdf(com.ironsoftware.ironpdf.PdfDocument)"},
              {"compressImages", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#compressImages(int)"},
              {"print", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#print()"},
              {"extractAllImages", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#extractAllImages()"},
              {"copyPage", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#copyPage(int)"},
              {"copyPages", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#copyPages(int,int)"},
              {"applyStamp", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#applyStamp(com.ironsoftware.ironpdf.stamp.Stamper)"},
              
              
              //   {"", ""},
              {"PdfDocument.fromFile", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#fromFile(java.nio.file.Path)"},
              {"PdfDocument.renderHtmlAsPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#renderHtmlAsPdf(java.lang.String)"},
              {"PdfDocument.renderHtmlFileAsPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#renderHtmlFileAsPdf(java.lang.String)"},
              {"PdfDocument.renderUrlAsPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#renderUrlAsPdf(java.lang.String)"},
              {"PdfDocument.saveAs", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#saveAs(java.lang.String)"},
              {"PdfDocument.fromImage", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#fromImage(java.util.List)"},
              {"PdfDocument.extractAllText", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#extractAllText()"},
              {"PdfDocument.getSignature", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#getSignature()"},
              {"PdfDocument.addBackgroundPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#addBackgroundPdf(com.ironsoftware.ironpdf.PdfDocument)"},
              {"PdfDocument.addForegroundPdf", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#addForegroundPdf(com.ironsoftware.ironpdf.PdfDocument)"},
              {"PdfDocument.compressImages", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#compressImages(int)"},
              {"PdfDocument.print", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#print()"},
              {"PdfDocument.extractAllImages", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#extractAllImages()"},
              {"PdfDocument.copyPage", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#copyPage(int)"},
              {"PdfDocument.copyPages", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#copyPages(int,int)"},
              {"PdfDocument.applyStamp", "/java/object-reference/api/com/ironsoftware/ironpdf/PdfDocument.html#applyStamp(com.ironsoftware.ironpdf.stamp.Stamper)"},
            //   {"", ""},

            // ChromePdfRenderOptions
            {"ChromePdfRenderOptions", "/java/object-reference/api/com/ironsoftware/ironpdf/render/ChromePdfRenderOptions.html"},

            {"HtmlHeaderFooter", "/java/object-reference/api/com/ironsoftware/ironpdf/headerfooter/HtmlHeaderFooter.html"},

            {"TextHeaderFooter", "/java/object-reference/api/com/ironsoftware/ironpdf/headerfooter/TextHeaderFooter.html"},

            {"BookmarkManager", "/java/object-reference/api/com/ironsoftware/ironpdf/bookmark/BookmarkManager.html"},

            {"AnnotationManager", "/java/object-reference/api/com/ironsoftware/ironpdf/annotation/AnnotationManager.html"},
            {"addTextAnnotation", "/java/object-reference/api/com/ironsoftware/ironpdf/annotation/AnnotationManager.html#addTextAnnotation(com.ironsoftware.ironpdf.annotation.AnnotationOptions,int)"},
            {"AnnotationManager.addTextAnnotation", "/java/object-reference/api/com/ironsoftware/ironpdf/annotation/AnnotationManager.html#addTextAnnotation(com.ironsoftware.ironpdf.annotation.AnnotationOptions,int)"},

            {"AnnotationOptions", "/java/object-reference/api/com/ironsoftware/ironpdf/annotation/AnnotationOptions.html"},

            // SignatureManager
            {"SignatureManager", "/java/object-reference/api/com/ironsoftware/ironpdf/signature/SignatureManager.html"},
            {"SignPdfWithSignature", "/java/object-reference/api/com/ironsoftware/ironpdf/signature/SignatureManager.html#SignPdfWithSignature(com.ironsoftware.ironpdf.signature.Signature)"},

            {"MetadataManager", "/java/object-reference/api/com/ironsoftware/ironpdf/metadata/MetadataManager.html"},

            {"FormManager", "/java/object-reference/api/com/ironsoftware/ironpdf/form/FormManager.html"},
            {"setFieldValue", "/java/object-reference/api/com/ironsoftware/ironpdf/form/FormManager.html#setFieldValue(java.lang.String,java.lang.String)"},
            {"FormManager.setFieldValue", "/java/object-reference/api/com/ironsoftware/ironpdf/form/FormManager.html#setFieldValue(java.lang.String,java.lang.String)"},

            {"SecurityManager", "/java/object-reference/api/com/ironsoftware/ironpdf/security/SecurityManager.html"},
            {"removePasswordsAndEncryption", "/java/object-reference/api/com/ironsoftware/ironpdf/security/SecurityManager.html#removePasswordsAndEncryption()"},
            {"setPassword", "/java/object-reference/api/com/ironsoftware/ironpdf/security/SecurityManager.html#setPassword(java.lang.String)"},

            {"SecurityOptions", "/java/object-reference/api/com/ironsoftware/ironpdf/security/SecurityOptions.html"},
            {"setAllowUserPrinting", "/java/object-reference/api/com/ironsoftware/ironpdf/security/SecurityOptions.html#setAllowUserPrinting(com.ironsoftware.ironpdf.security.PdfPrintSecurity)"},
            {"setAllowUserEdits", "/java/object-reference/api/com/ironsoftware/ironpdf/security/SecurityOptions.html#setAllowUserEdits(com.ironsoftware.ironpdf.security.PdfEditSecurity)"},
            {"setAllowUserCopyPasteContent", "/java/object-reference/api/com/ironsoftware/ironpdf/security/SecurityOptions.html#setAllowUserCopyPasteContent(java.lang.Boolean)"},
            {"setAllowUserAnnotations", "/java/object-reference/api/com/ironsoftware/ironpdf/security/SecurityOptions.html#setAllowUserAnnotations(java.lang.Boolean)"},
            {"setUserPassword", "/java/object-reference/api/com/ironsoftware/ironpdf/security/SecurityOptions.html#setUserPassword(java.lang.String)"},
            {"setAllowUserFormData", "/java/object-reference/api/com/ironsoftware/ironpdf/security/SecurityOptions.html#setAllowUserFormData(java.lang.Boolean)"},
            
            {"BarcodeStamper", "/java/object-reference/api/com/ironsoftware/ironpdf/stamp/BarcodeStamper.html"},
            {"HtmlStamper", "/java/object-reference/api/com/ironsoftware/ironpdf/stamp/HtmlStamper.html"},
            {"ImageStamper", "/java/object-reference/api/com/ironsoftware/ironpdf/stamp/ImageStamper.html"},
            {"TextStamper", "/java/object-reference/api/com/ironsoftware/ironpdf/stamp/TextStamper.html"},
            {"PageSelection", "/java/object-reference/api/com/ironsoftware/ironpdf/edit/PageSelection.html"},
            //Stamper class
            {"Stamper", "/java/object-reference/api/com/ironsoftware/ironpdf/stamp/Stamper.html"},
            {"setHtml", "/java/object-reference/api/com/ironsoftware/ironpdf/stamp/Stamper.html#setHtml(java.lang.String)"},
            {"setVerticalAlignment", "/java/object-reference/api/com/ironsoftware/ironpdf/stamp/Stamper.html#setVerticalAlignment(com.ironsoftware.ironpdf.stamp.VerticalAlignment)"},
            {"setHorizontalAlignment", "/java/object-reference/api/com/ironsoftware/ironpdf/stamp/Stamper.html#setHorizontalAlignment(com.ironsoftware.ironpdf.stamp.HorizontalAlignment)"},
            
            }},
        };


        markdownContent = TechnicalLinkAdder.Update(replaceStringsByTypes, taskDesc, markdownContent);

        return markdownContent;
    }
}

