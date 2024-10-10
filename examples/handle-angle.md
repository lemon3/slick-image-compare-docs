---
title: Handle Angle
---

<script setup>
import { onMounted, ref } from 'vue';
import SlickImageCompare from '../node_modules/slick-image-compare';

import SwitchButtons from '../Components/SwitchButtons.vue';
import SwitchContent from '../Components/SwitchContent.vue';

let handleAngle = ref(8);
let sic
onMounted(() => {
  sic = new SlickImageCompare('#example', {
    beforeLabel: 'color',
    afterLabel: 'b & w',
    handleAngle: handleAngle.value,
  });
});

const setHandleAngle = (evt) => {
  handleAngle.value = +evt.target.value;
  sic.setAngle(handleAngle.value);
};

</script>

# Handle Angle

Use a custom angle for the drag handle. To create a little more dynamic, the angle of the handle can be changed.

<SwitchButtons></SwitchButtons>
<SwitchContent>
  <template v-slot:a>

  ```html
  <div id="example">
    <img src="before.jpg" alt="before" />
    <img src="after.jpg" alt="after" />
  </div>
  ```

  ```js
  const sic = new SlickImageCompare('#example', {
    beforeLabel: 'color',
    afterLabel: 'b & w',
    handleAngle: 8,
  });
  ```
  </template>
  <template v-slot:b>

  ```html
  <div data-sic="{
    beforeLabel: 'color',
    afterLabel: 'b & w',
    handleAngle: 8
  }">
    <img src="08_before.jpg" alt="before" />
    <img src="08_after.jpg" alt="after" />
  </div>
  ```

  ```js
  SlickImageCompare.init();
  ```
  </template>
</SwitchContent>

<div id="example">
  <img src="/images/08_before.jpg" alt="before" />
  <img src="/images/08_after.jpg" alt="after" />
</div>
<div class="image-caption">Tyrol - City in Austria (COLOR / B&W)</div>
change the angle on the fly
<div class="label">{ handleAngle: {{handleAngle}} }</div>
<input type="range" @input="setHandleAngle" step="1" min="-15" max="15" :value="handleAngle"/>
