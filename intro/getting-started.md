---
title: Getting started
editLink: true
---

# Getting started

## Default Settings
Here is the basic html structure to start with.
It uses the default slider settings!

```html
<div id="my-div">
  <img src="04_before.jpg" alt="before" />
  <img src="04_after.jpg" alt="after" />
</div>
```

the call SlickImageCompare with the 'div' (id selector) somewhere in your code, to initialize the slider.
```js
const sic = new SlickImageCompare('#my-div');
```
