---
title: Right to Left
---

<script setup>
import { onMounted, ref } from 'vue';
import SlickImageCompare from '../node_modules/slick-image-compare';

import SwitchButtons from '../Components/SwitchButtons.vue';
import SwitchContent from '../Components/SwitchContent.vue';

let sic;
let ltrStartValue = false;
const texts = ['false', 'true'];
const info = ref();

const changeText = (val) => info.value = texts[val ? '1' : '0'];
changeText(ltrStartValue);

const toggleLtr = () => {
  sic.changeDirection();
  changeText(sic._ltr);
};

onMounted(() => {
  sic = new SlickImageCompare('#example', {
    beforeLabel: 'real photo',
    afterLabel: 'generated via SD',
    ltr: ltrStartValue,
  });
});

</script>

# Right to Left

If you want to set the slider to a 'right to left' behavior, you have to change the `ltr` option to `false` (default value for `ltr: true`).

<SwitchButtons></SwitchButtons>
<SwitchContent>
  <template v-slot:a>

  ```html
  <div id="example">
    <img src="/images/09_before.jpg" alt="before" />
    <img src="/images/09_after.jpg" alt="after" />
  </div>
  ```

  ```js
  const sic = new SlickImageCompare('#example', {
    beforeLabel: 'real photo',
    afterLabel: 'generated via SD',
    ltr: false,
  });
  ```
  </template>
  <template v-slot:b>

  ```html
  <div data-sic="{
    beforeLabel: 'real photo',
    afterLabel: 'generated via SD',
    ltr: 'false',
  }">
    <img src="/images/09_before.jpg" alt="before" />
    <img src="/images/09_after.jpg" alt="after" />
  </div>
  ```

  ```js
  SlickImageCompare.init();
  ```
  </template>
</SwitchContent>

<div id="example">
  <img src="/images/09_before.jpg" alt="" />
  <img src="/images/09_after.jpg" alt="" />
</div>
<div class="image-caption">Replacing colors in an image (Transparent PNG)</div>

<div class="label">{ ltr: {{ info }} }</div>
<button class="switch" @click="toggleLtr">Toggle LTR</button>
