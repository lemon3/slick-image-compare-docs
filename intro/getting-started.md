---
title: Getting started
editLink: true
---

<script setup>
  import { onMounted } from 'vue';
  import SlickImageCompare from 'slick-image-compare';

  import beforeImage from '../images/01_before.png';
  import afterImage from '../images/01_after.png';

const el = document.createElement('div');
const options = {
  beforeImage,
  afterImage,
};
const sic = new SlickImageCompare(el, options);

onMounted(() => {
  // ad to dom
  const wrapper = document.getElementById('getting-started-demo')
  if (wrapper) {
    wrapper.append(el);
  }
})
</script>

# Getting started

First you need the get the files.

```bash
pnpm add slick-image-compare
# or
npm install slick-image-compare
# or
yarn add slick-image-compare
```

Then import it in your project, like so:

```js
import SlickImageCompare from 'slick-image-compare';
```

... and use it, see below!

## Basic HTML structure

Here is the basic HTML structure to start with.

```html
<div id="my-div">
  <img src="04_before.jpg" alt="before" />
  <img src="04_after.jpg" alt="after" />
</div>
```

Then call SlickImageCompare with the 'div' (id selector) somewhere in your code to initialize the slider. Here we uses the default slider settings, as no option object is being passed as a second parameter to the Class!

```js
import SlickImageCompare from 'slick-image-compare';

const sic = new SlickImageCompare('#my-div');
```

## JavaScript approach

```js
import SlickImageCompare from 'slick-image-compare';

const el = document.createElement('div');
const options = {
  beforeImage: '/images/01_before.png',
  afterImage: '/images/01_after.png',
};
const sic = new SlickImageCompare(el, options);

// e.g. append ad to DOM body element
document.body.append(el);
```

<div id="getting-started-demo"></div>
