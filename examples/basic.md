---
title: Basic Example
---

<script setup>
import { onMounted } from 'vue';
import SlickImageCompare from '../node_modules/slick-image-compare';
import SwitchButtons from '../Components/SwitchButtons.vue';
import SwitchContent from '../Components/SwitchContent.vue';

onMounted(() => {
  const sic1 = new SlickImageCompare('#example');
});
</script>

# Basic Example
Just a basic example with the default options.

<SwitchButtons></SwitchButtons>
<SwitchContent>
  <template v-slot:a>

  ```html
  <div id="example">
    <img src="/images/04_before.jpg" alt="before" />
    <img src="/images/04_after.jpg" alt="after" />
  </div>
  ```

  ```js
  const sic = new SlickImageCompare('#example');
  ```
  </template>
  <template v-slot:b>

  ```html
  <div data-sic>
    <img src="/images/04_before.jpg" alt="before" />
    <img src="/images/04_after.jpg" alt="after" />
  </div>
  ```

  ```js
  SlickImageCompare.init();
  ```
  </template>
</SwitchContent>

<div id="example">
  <img src="/images/04_before.jpg" alt="before" />
  <img src="/images/04_after.jpg" alt="after" />
</div>
<div class="image-caption">Italy, Sunrise (color grading)</div>
