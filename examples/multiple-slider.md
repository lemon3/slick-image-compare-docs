---
title: Multiple Slider
---

<script setup>
import { onMounted } from 'vue';
import SlickImageCompare from '../node_modules/slick-image-compare';

import SwitchButtons from '../Components/SwitchButtons.vue';
import SwitchContent from '../Components/SwitchContent.vue';

onMounted(() => {
  const sic = new SlickImageCompare('.example', {
    snapToStart: true,
  });

  const options = {
    snapToStart: true,
  };
  const sync1 = new SlickImageCompare('#sync1', options);
  const sync2 = new SlickImageCompare('#sync2', options);

  let active = '';
  const sliderOneUpdate = (evt) => {
    if ('1' === active || '' === active) {
      sync2.goto(evt.detail.percent);
    }
  }
  const sliderTwoUpdate = (evt) => {
    if ('2' === active || '' === active) {
      sync1.goto(evt.detail.percent);
    }
  }
  const interactionEnded = () => active = '';

  sync1.addEventListener('update', sliderOneUpdate);
  sync1.addEventListener('interactionstart', (evt) => {
    active = '1';
    sync2.stop();
    sync2.goto(evt.detail.percent);
  });
  sync1.addEventListener('interactionend', interactionEnded);

  sync2.addEventListener('update', sliderTwoUpdate);
  sync2.addEventListener('interactionstart', (evt) => {
    active = '2';
    sync1.stop();
    sync1.goto(evt.detail.percent);
  });
  sync2.addEventListener('interactionend', interactionEnded);


});

</script>

# Multiple Slider

## Select via class
Use multiple slider with the same settings (option object)

<SwitchButtons></SwitchButtons>
<SwitchContent>
  <template v-slot:a>

  ```html
  <div class="example">
    <img src="/images/02_before.png" alt="" />
    <img src="/images/02_after.png" alt="" />
  </div>

  <div class="example">
    <img src="/images/01_before.png" alt="" />
    <img src="/images/01_after.png" alt="" />
  </div>
  ```

  ```js
  // class selector is used
  // options apply to all corresponding elements
  const sic = new SlickImageCompare('.example', {
    snapToStart: true
  });
  ```
  </template>
  <template v-slot:b>

  ```html
  <div class="example" data-sic="snapToStart: true">
    <img src="/images/02_before.png" alt="" />
    <img src="/images/02_after.png" alt="" />
  </div>

  <div class="example" data-sic="snapToStart: true">
    <img src="/images/01_before.png" alt="" />
    <img src="/images/01_after.png" alt="" />
  </div>
  ```

  ```js
  SlickImageCompare.init();
  ```
  </template>
</SwitchContent>

<div class="grid">
  <div>
    <div class="example">
      <img src="/images/02_before.png" alt="" />
      <img src="/images/02_after.png" alt="" />
    </div>
    <div class="image-caption">Slider 1</div>
  </div>

  <div>
    <div class="example">
      <img src="/images/01_before.png" alt="" />
      <img src="/images/01_after.png" alt="" />
    </div>
    <div class="image-caption">Slider 2</div>
  </div>
</div>

## Sync two slider
You can also synchronize two (or more) sliders with just a bit of extra code
<div class="grid">
  <div>
    <div id="sync1">
      <img src="/images/04_before.jpg" alt="" />
      <img src="/images/04_after.jpg" alt="" />
    </div>
    <div class="image-caption">Slider 1</div>
  </div>

  <div>
    <div id="sync2">
      <img src="/images/05_before.jpg" alt="" />
      <img src="/images/05_after.jpg" alt="" />
    </div>
    <div class="image-caption">Slider 2</div>
  </div>
</div>


<style scoped>
.grid {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  gap: 0px 10px;
  grid-template-areas:
    ". .";
}
</style>
