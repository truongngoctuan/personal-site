Many people out there may be wondering "What is an OCR Screenshot?" Others might wonder how to convert a screenshot of any text into a digital text-editable format or to .txt, or .doc format. If you are one of these people, then worry no more because we have the perfect solutions for you. 

In this article, we will discuss different tools that will allow you to perform OCR, Optical Character Recognition, on screenshots.

There are many OCR tools out there but today we will be using [IronOCR](/csharp/ocr/) to extract text from screenshots.

## 1. IronOCR

IronOCR is a software library for the C# and VB.NET programming languages, designed to enable developers to add OCR (Optical Character Recognition) capabilities to their applications. The library can be used to recognize text in images and convert it into machine-readable text. The library is built on the Tesseract OCR engine, which is considered one of the most accurate OCR engines available.

IronOCR can be used to read text from images in many different file formats, including PNG, JPG, TIFF, and PDF. It also provides a range of advanced features for working with text recognition, such as the ability to recognize multiple languages, as well as the ability to recognize text from images that have been rotated or skewed. Additionally, developers can use IronOCR to quickly integrate OCR functionality into their applications, as it provides a simple, easy-to-use API that can be called from C# or VB.NET code. Using IronOCR you can choose your OCR language, and perform OCR on images, digital PDF files, and scanned PDF files.

IronOCR is considered a good option for developers who want to add OCR functionality to their applications. It's open source, easy to use and integrate, fast, accurate, and up to date with the latest OCR technologies.

## 2. IronOCR Features

IronOCR provides a wide range of features to help developers integrate OCR functionality into their applications. Some of the key features of IronOCR include:

1. **Multi-language support**: IronOCR can recognize text in over 60 languages, including English, Spanish, German, French, Italian, and Chinese.
2. **Automatic detection of text orientation**: IronOCR can automatically detect the orientation of text in an image, even if the image has been rotated or skewed.
3. **Support for a wide range of image formats**: IronOCR can read text from images in many different file formats, including PNG, JPG, TIFF, and PDF.
4. **Customizable recognition settings**: Developers can customize the recognition settings to improve recognition accuracy for specific types of images or use cases.
5. Ability to recognize text from scanned documents and PDFs with multiple pages.
6. **Fast recognition and high accuracy**: IronOCR uses the Tesseract OCR engine which is one of the most accurate and widely used OCR engines available.
7. **Easy-to-use API**: IronOCR provides a simple, easy-to-use API that can be called from C# or VB.NET code, which makes it easy to integrate OCR functionality into any application.
8. Ability to recognize handwriting and support for handwriting recognition.

 Overall, IronOCR is a powerful tool that provides a wide range of features to help developers add OCR functionality to their applications.

## 3. Creating a New Project in Visual Studio

Open Visual Studio and go to the File menu. Select "New Project" and then select Console Application.

Enter the project name and select the path in the appropriate text box. Then, click the create button. Select the required .NET framework, as in the screenshot below:

<div class="content-img-align-center">
    <div class="center-image-wrapper">
        <img src="/static-assets/ocr/blog/ocr-screenshot-csharp-tutorial/ocr-screenshot-csharp-tutorial-1.webp" alt="How to OCR Get Text From Screenshot in C#, Figure 1: New Project" class="img-responsive add-shadow">
        <p class="content__image-caption">Creating a New Project in Visual Studio</p>
    </div>
</div>

The Visual Studio project will now generate the structure for the console application. Once finished, it will open the program.cs file, in which you can write and execute source code.

<div class="content-img-align-center">
    <div class="center-image-wrapper">
        <img src="/static-assets/ocr/blog/ocr-screenshot-csharp-tutorial/ocr-screenshot-csharp-tutorial-2.webp" alt="How to OCR Get Text From Screenshot in C#, Figure 2: Program.cs" class="img-responsive add-shadow">
        <p class="content__image-caption">The program.cs file, generated from Visual Studio's New Project Wizard</p>
    </div>
</div>

Now we can add the IronOCR library and test the program.

## 4. Install IronOCR

In Visual Studio, you can easily integrate IronOCR with your C# project.

IronOCR offers multiple processes to integrate with a C#.NET project. Here, we'll discuss one of them: installing IronOCR using the NuGet Package Manager.

In Visual Studio go to **Tools** > **NuGet Package Manager** > **Package Manager Console**

<div class="content-img-align-center">
    <div class="center-image-wrapper">
        <img src="/static-assets/ocr/blog/ocr-screenshot-csharp-tutorial/ocr-screenshot-csharp-tutorial-3.webp" alt="How to OCR Get Text From Screenshot in C#, Figure 3: NuGet Package Manager" class="img-responsive add-shadow">
        <p class="content__image-caption">The NuGet Package Manager UI</p>
    </div>
</div>

After clicking, a new console will appear at the bottom of Visual Studio's window. Type the below command in the console and press enter.

```shell
:ProductInstall
```

IronOCR will be installed in just a few seconds.

## 5. Using IronOCR to Perform OCR on a Screenshot

IronOCR is a powerful OCR library that can be used to recognize text from screenshots. With IronOCR, you can take a screenshot of text, and then use the library's OCR capabilities to convert the text in the screenshot into a digital, editable format. Here's an example of how you might use IronOCR to perform OCR on a screenshot in C#. To perform screenshot OCR, just capture a screenshot and run the below code to extract the text to any output format you want.

```cs
using IronOcr;
using System;

string imageText = new IronTesseract().Read("ocr.png").Text;
Console.WriteLine(imageText);
```

### Input Image file

<div class="content-img-align-center">
    <div class="center-image-wrapper">
        <img src="/static-assets/ocr/blog/ocr-screenshot-csharp-tutorial/ocr-screenshot-csharp-tutorial-4.webp" alt="How to OCR Get Text From Screenshot in C#, Figure 4: NuGet Package Manager" class="img-responsive add-shadow">
        <p class="content__image-caption">Sample Screenshot used for input</p>
    </div>
</div>

### Text Output

```txt
- IRONOCR for NET
- The C# OCR Library
- OCR for C# to scan and read images & PDFs
- NET OCR library with 127+ global language packs
- Output as text, structured data, or searchable PDFs
- Supports NET 6, 5, Core, Standard, Framework
```

## 6. Using IronOCR to Perform OCR on a Specific Zone

IronOCR allows you to perform OCR on specific zones within an image. This can be useful when the image contains multiple regions of text, and you only want to recognize the text within a specific region. Example code for this is shown below.

```cs
using IronOcr;
using IronSoftware.Drawing;
using System;
var ocrTesseract = new IronTesseract();
using (var ocrInput = new OcrInput())
{
    var ContentArea = new CropRectangle(x: 0, y: 0, width: 350, height: 150);
    ocrInput.AddImage("ocr.png", ContentArea);
    var ocrResult = ocrTesseract.Read(ocrInput);
    Console.WriteLine(ocrResult.Text);
}
```

### Output

- IRONOCR for NET
- The C# OCR Library
- OCR for C# to scan and read images & PDFs
- NET OCR library with 127+ global language packs

## 7. Using IronOCR to Perform OCR on an Image

To perform OCR on an image and save the recognized text in .txt file, you can use the following code.

```cs
using IronOcr;
using System;

var Ocr = new IronTesseract();
using (var Input = new OcrInput("ocr.png"))
{
    var Result = Ocr.Read(Input);
    Result.SaveAsTextFile("output.txt");
}
```

The contents of the output file is shown below:

<div class="content-img-align-center">
    <div class="center-image-wrapper">
        <img src="/static-assets/ocr/blog/ocr-screenshot-csharp-tutorial/ocr-screenshot-csharp-tutorial-5.webp" alt="How to OCR Get Text From Screenshot in C#, Figure 5: output.txt File" class="img-responsive add-shadow">
        <p class="content__image-caption">Contents of the generated output.txt file/p>
    </div>
</div>

## 8. Learn More

Read the [Image Text Extraction](/csharp/ocr/tutorials/how-to-read-text-from-an-image-in-csharp-net/) tutorial for more inforamtion about how to perform OCR on images.

IronOCR is a part of a [suite](/suite/) of five .NET libraries designed to work different types of documents. You can purchase all five libaries for the price of just two [licenses](/csharp/ocr/licensing/).
