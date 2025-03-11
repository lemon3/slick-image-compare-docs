---
title: Complete Source Classic
---

<script setup>
</script>

# Complete Source Classic

Here is a complete html structure for you to get started.
You only need to change the path to your image files.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>slick-image-compare demo</title>
    <link rel="stylesheet" href="https://unpkg.com/slick-image-compare@0.4.10/dist/slick-image-compare.css" />
  </head>
  <style>
    .my-div {
      max-width: 600px;
      margin-bottom: 1em;
    }
  </style>
  <body>
    <div class="my-div" id="my-div">
      <img src="path-to-image/img01-before.jpg" alt="" />
      <img src="path-to-image/img01-after.jpg" alt="" />
    </div>

    <script src="https://unpkg.com/slick-image-compare"></script>
    <script>
      const options = {
        animateIn: true,
        beforeLabel: "before",
        afterLabel: "after",
      };

      // SlickImageCompare is in the window-space
      new SlickImageCompare("#my-div", options);
    </script>
  </body>
</html>
```
