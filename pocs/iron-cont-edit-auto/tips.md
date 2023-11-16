links
/how-to/license-keys/#trial-license




smart Find and replace for Image `(.+?)` or `(.*?)`

```
<div class="content-img-align-center">
    <img src="(.+?)" alt="" class="img-responsive add-shadow">
</div>
```

```
![How to Separate PDF Pages, Figure $2: ]($1)
****
```

```
<div (.+?)
    <img src="(.+?)(\d{1,2})(.{4})" alt="(.*?)"(.*?)>(.\n*?)
</div>

<div class="content-img-align-center">
    <img src="/static-assets/pdf/blog/how-to-delete-page-pdf/how-to-delete-page-pdf-1.png" alt="PDF Page Delete" class="img-responsive add-shadow">
    <p class="content__image-caption">PDF Page Delete</p>
</div>
```

```
![How to Separate PDF Pages, Figure $2: ]($1$2$3)
****

`![How to Delete a Page in PDF Documents, Figure $3: $5]($2$3$4)`
**$5**
```

---

```
<a href="https://pdfchef.com/split-pdf.html" target="_blank" rel="nofollow">PDF splitter</a>

<a href="(.+?)"(.*?)>(.+?)</a>
```

```
[$3]($1)
```

```

<a class="js-modal-open" href="#trial-license" data-modal-id="trial-license">(.+?)</a>
[$1](trial-license)
```
