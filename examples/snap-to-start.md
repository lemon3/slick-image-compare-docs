---
title: Snap to start
---

<script setup>
import { onMounted } from 'vue';
import SlickImageCompare from '../node_modules/slick-image-compare';

import SwitchButtons from '../Components/SwitchButtons.vue';
import SwitchContent from '../Components/SwitchContent.vue';

onMounted(() => {
  const sic = new SlickImageCompare('#example', {
    snapToStart: true,
    beforeLabel: 'pink',
    afterLabel: 'turquoise',
  });
});

</script>

# Snap to start

if set to true, the slider will animate back to the defined start position when user-interaction ends.

<SwitchButtons></SwitchButtons>
<SwitchContent>
  <template v-slot:a>

  ```html
  <div id="example">
    <img src="/images/02_before.png" alt="" />
    <img src="/images/02_after.png" alt="" />
  </div>
  ```

  ```js
  const sic = new SlickImageCompare('#example', {
    snapToStart: true,
    beforeLabel: 'pink',
    afterLabel: 'turquoise',
  });
  ```
  </template>
  <template v-slot:b>

  ```html
  <div data-sic="{
    snapToStart: 'true',
    beforeLabel: 'pink',
    afterLabel: 'turquoise',
  }">
    <img src="/images/02_before.png" alt="" />
    <img src="/images/02_after.png" alt="" />
  </div>
  ```

  ```js
  SlickImageCompare.init();
  ```
  </template>
</SwitchContent>

<div id="example">
  <img src="/images/02_before.png" alt="" />
  <img src="/images/02_after.png" alt="" />
</div>
<div class="image-caption">Replacing colors in an image (Transparent PNG)</div>
