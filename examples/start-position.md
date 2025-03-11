---
title: Start position
---

<script setup>
import { onMounted } from 'vue';
import SlickImageCompare from 'slick-image-compare';

import SwitchButtons from '../Components/SwitchButtons.vue';
import SwitchContent from '../Components/SwitchContent.vue';

onMounted(() => {
  const sic = new SlickImageCompare('#example', {
    startPos: 25
  });
});

</script>

# Start position

With custom HTML inside the main `div` and a start position.
You can use your own HTML inside, it will not be overwritten (see example below).
`startPos` is set to 25 (percent from left).

<SwitchButtons></SwitchButtons>
<SwitchContent>
  <template v-slot:a>

  ```html
  <div id="example">
    <img src="/images/05_before.jpg" alt="before" />
    <img src="/images/05_after.jpg" alt="after" />
    <div class="info-box-wrapper">
      <div class="info-box">
        <h1>AUSTRIA</h1>
        <p>Krimml waterfalls</p>
      </div>
    </div>
  </div>
  ```

  ```js
  const sic = new SlickImageCompare('#example', {
    startPos: 25
  });
  ```
  </template>
  <template v-slot:b>

  ```html
  <div data-sic="startPos:25">
    <img src="/images/05_before.jpg" alt="before" />
    <img src="/images/05_after.jpg" alt="after" />
    <div class="info-box-wrapper">
      <div class="info-box">
        <h1>AUSTRIA</h1>
        <p>Krimml waterfalls</p>
      </div>
    </div>
  </div>
  ```

  ```js
  SlickImageCompare.init();
  ```
  </template>
</SwitchContent>

<div id="example">
  <img src="/images/05_before.jpg" alt="before" />
  <img src="/images/05_after.jpg" alt="after" />
  <div class="info-box-wrapper">
    <div class="info-box">
      <h1>AUSTRIA</h1>
      <p>Krimml waterfalls</p>
    </div>
  </div>
</div>
<div class="image-caption">Krimml waterfalls (color grading)</div>

Styling used for the **'info box'**.
::: info
If you want the info-box-wrapper to appear in the foreground (above the slider-handle), just use a higher z-index on that element.
:::
```css
.info-box-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.info-box {
  background-color: rgba(200, 200, 200, 0.85);
  display: flex;
  flex-direction: column;
  padding: 1.5em 2em;
  color: #1a4a41;
  box-shadow: 0px 3px 10px -2px rgb(0 8 4 / 40%);
}

.info-box h1,
.info-box p {
  margin: 0;
}
```

<style scoped>
.info-box-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.info-box {
  background-color: rgba(200, 200, 200, 0.85);
  display: flex;
  flex-direction: column;
  padding: 1.5em 2em;
  color: #1a4a41;
  box-shadow: 0px 3px 10px -2px rgb(0 8 4 / 40%);
}

.info-box h1,
.info-box p {
  margin: 0;
}
</style>
