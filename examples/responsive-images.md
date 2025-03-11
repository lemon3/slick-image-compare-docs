---
title: Responsive Image
---

<script setup>
import { onMounted } from 'vue';
import SlickImageCompare from 'slick-image-compare';

import SwitchButtons from '../Components/SwitchButtons.vue';
import SwitchContent from '../Components/SwitchContent.vue';

onMounted(() => {
  const sic1 = new SlickImageCompare('#example1');
  const sic2 = new SlickImageCompare('#example2');
});

</script>

# Responsive Images

## Responsive images (via picture-element)

The only restriction: all (before, after) responsive images must have exactly the same size and the media queries must match (see below).

<SwitchButtons></SwitchButtons>
<SwitchContent>
  <template v-slot:a>

  ```html
  <div id="example2">
    <picture>
      <source srcset="/images/07_before_sm.jpg" media="(max-width: 639px)" />
      <img src="/images/07_before_md.jpg" alt="before" />
    </picture>
    <picture>
      <source srcset="/images/07_after_sm.jpg" media="(max-width: 639px)" />
      <img src="/images/07_after_md.jpg" alt="after" />
    </picture>
  </div>
  ```

  ```js
  const sic = new SlickImageCompare('#example2');
  ```
  </template>
  <template v-slot:b>

  ```html
  <div data-sic>
    <picture>
      <source srcset="/images/07_before_sm.jpg" media="(max-width: 639px)" />
      <img src="/images/07_before_md.jpg" alt="before" />
    </picture>
    <picture>
      <source srcset="/images/07_after_sm.jpg" media="(max-width: 639px)" />
      <img src="/images/07_after_md.jpg" alt="after" />
    </picture>
  </div>
  ```

  ```js
  SlickImageCompare.init();
  ```
  </template>
</SwitchContent>

<div id="example2">
  <picture>
    <source srcset="/images/07_before_sm.jpg" media="(max-width: 639px)" />
    <img src="/images/07_before_md.jpg" alt="before" />
  </picture>
  <picture>
    <source srcset="/images/07_after_sm.jpg" media="(max-width: 639px)" />
    <img src="/images/07_after_md.jpg" alt="after" />
  </picture>
</div>
<div class="image-caption">Sweden - Stockholm, sunset (color grading)</div>

## Responsive images (via srcset attribute)

The only restriction: the images (before, after) must have exactly the same srcset and sizes attributes. (only the file name should be different). Otherwise it won't work and the wrong images may be loaded - this is especially important if the aspect ratio changes.

<SwitchButtons></SwitchButtons>
<SwitchContent>
  <template v-slot:a>

  ```html
  <div id="example1">
    <img
      sizes="(max-width: 1200px) 100vw, 1200w"
      srcset="/images/06_before_sm.jpg 840w, /images/06_before_md.jpg 1200w"
      src="/images/06_before_sm.jpg"
      alt="deer"
    />
    <img
      sizes="(max-width: 1200px) 100vw, 1200w"
      srcset="/images/06_after_sm.jpg 840w, /images/06_after_md.jpg 1200w"
      src="/images/06_after_sm.jpg"
      alt="deer"
    />
  </div>
  ```

  ```js
  const sic = new SlickImageCompare('#example1');
  ```
  </template>
  <template v-slot:b>

  ```html
  <div data-sic>
    <img
      sizes="(max-width: 1200px) 100vw, 1200w"
      srcset="/images/06_before_sm.jpg 840w, /images/06_before_md.jpg 1200w"
      src="/images/06_before_sm.jpg"
      alt="deer"
    />
    <img
      sizes="(max-width: 1200px) 100vw, 1200w"
      srcset="/images/06_after_sm.jpg 840w, /images/06_after_md.jpg 1200w"
      src="/images/06_after_sm.jpg"
      alt="deer"
    />
  </div>
  ```

  ```js
  SlickImageCompare.init();
  ```
  </template>
</SwitchContent>

<div id="example1">
  <img
    sizes="(max-width: 1200px) 100vw, 1200w"
    srcset="/images/06_before_sm.jpg 840w, /images/06_before_md.jpg 1200w"
    src="/images/06_before_sm.jpg"
    alt="deer"
  />
  <img
    sizes="(max-width: 1200px) 100vw, 1200w"
    srcset="/images/06_after_sm.jpg 840w, /images/06_after_md.jpg 1200w"
    src="/images/06_after_sm.jpg"
    alt="deer"
  />
</div>
<div class="image-caption">Deer in the wild (color grading)</div>
