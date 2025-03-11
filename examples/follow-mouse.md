---
title: Follow Mouse
---

<script setup>
import { onMounted } from 'vue';
import SlickImageCompare from 'slick-image-compare';

import SwitchButtons from '../Components/SwitchButtons.vue';
import SwitchContent from '../Components/SwitchContent.vue';

onMounted(() => {
  const sic = new SlickImageCompare('#example', {
    followMouse: true,
    beforeLabel: 'before',
    afterLabel: 'after'
  });
});

</script>

# Follow Mouse

The slider follows mouse movement (only on desktop devices where a trackpad or mouse is available). The default slider is used on touch devices!

<SwitchButtons></SwitchButtons>
<SwitchContent>
  <template v-slot:a>

  ```html
  <div id="example">
    <img src="/images/01_before.png" alt="before" />
    <img src="/images/01_after.png" alt="after" />
  </div>
  ```

  ```js
  const sic = new SlickImageCompare('#example', {
    followMouse: true,
    beforeLabel: 'before',
    afterLabel: 'after'
  });
  ```
  </template>
  <template v-slot:b>

  as comma-separated list (always use key: 'value'):
  ```html
  <div data-sic="followMouse: true, beforeLabel: 'before', afterLabel: 'after'">
    <img src="/images/01_before.png" alt="before" />
    <img src="/images/01_after.png" alt="after" />
  </div>
  ```

  as object syntax (always use key: 'value'):
  ```html
  <div data-sic="{
      followMouse: 'true',
      beforeLabel: 'before',
      afterLabel: 'after',
    }">
    <img src="/images/01_before.png" alt="before" />
    <img src="/images/01_after.png" alt="after" />
  </div>
  ```

  ```js
  SlickImageCompare.init();
  ```
  </template>
</SwitchContent>

<div id="example">
  <img src="/images/01_before.png" alt="before" />
  <img src="/images/01_after.png" alt="after" />
</div>
<div class="image-caption">Replacing colors in an image (Transparent PNG)</div>
