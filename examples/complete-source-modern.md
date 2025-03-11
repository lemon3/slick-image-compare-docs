---
title: Complete Source Modern
---

# Complete Source Modern

Here is a complete html structure for you to get started.
You only need to change the path to your image files.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>slick-image-compare demo</title>
  </head>
  <body>
    <div id="app"></div>

    <script type="module" defer>
      import SlickImageCompare from "slick-image-compare";
      import "slick-image-compare/dist/slick-image-compare.css";

      const el = document.createElement('div');
      el.style.maxWidth = '600px';

      const options = {
        beforeImage: '/images/01_before.png',
        afterImage: '/images/01_after.png',
        animateIn: true,
        beforeLabel: "before",
        afterLabel: "after",
      };
      const sic = new SlickImageCompare(el, options);

      const changeText = (evt) => {
        // od something here
        console.log(evt.detail);
      };

      // use and event listener
      sic.addEventListener('viewchange', changeText);

      // e.g. append ad to app
      const app = document.getElementById('app');
      app.append(el);
    </script>
  </body>
</html>
```

<div id="app2"></div>
