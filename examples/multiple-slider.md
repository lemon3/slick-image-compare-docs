---
title: Multiple Slider
---

<script setup>
import { onMounted } from 'vue';
import SlickImageCompare from 'slick-image-compare';

import SwitchButtons from '../Components/SwitchButtons.vue';
import SwitchContent from '../Components/SwitchContent.vue';

onMounted(() => {
  const sic = new SlickImageCompare('.example', {
  snapToStart: true,
});

const options = { snapToStart: true };

const sync1 = new SlickImageCompare('#sync1', options);
const sync2 = new SlickImageCompare('#sync2', options);
let active = '';

const handleUpdate = (evt, otherSlider) => {
  const id = evt.detail.instance.element.id;
  if (active === '' || active === id.replace('#sync', '')) {
    otherSlider.goto(evt.detail.percent);
  }
};

const handleInteractionStart = (evt) => {
  const id = evt.detail.instance.element.id;
  active = id.replace('#sync', '');
  const otherSlider = active === '1' ? sync2 : sync1;
  otherSlider.stop();
  otherSlider.goto(evt.detail.percent);
};

const handleInteractionEnd = () => {
  active = '';
};

sync1.addEventListener('update', (evt) => handleUpdate(evt, sync2));
sync1.addEventListener('interactionstart', handleInteractionStart);
sync1.addEventListener('interactionend', handleInteractionEnd);

sync2.addEventListener('update', (evt) => handleUpdate(evt, sync1));
sync2.addEventListener('interactionstart', handleInteractionStart);
sync2.addEventListener('interactionend', handleInteractionEnd);
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

### HTML Code for sync two sliders

```html
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
```

### JavaScript Code for sync two sliders

```js
import SlickImageCompare from 'slick-image-compare';

const options = { snapToStart: true };
const sync1 = new SlickImageCompare('#sync1', options);
const sync2 = new SlickImageCompare('#sync2', options);
let active = '';

const handleUpdate = (evt, otherSlider) => {
  const id = evt.detail.instance.element.id;
  if (active === '' || active === id.replace('#sync', '')) {
    otherSlider.goto(evt.detail.percent);
  }
};

const handleInteractionStart = (evt) => {
  const id = evt.detail.instance.element.id;
  active = id.replace('#sync', '');
  const otherSlider = active === '1' ? sync2 : sync1;
  otherSlider.stop();
  otherSlider.goto(evt.detail.percent);
};

const handleInteractionEnd = () => {
  active = '';
};

sync1.addEventListener('update', (evt) => handleUpdate(evt, sync2));
sync1.addEventListener('interactionstart', handleInteractionStart);
sync1.addEventListener('interactionend', handleInteractionEnd);

sync2.addEventListener('update', (evt) => handleUpdate(evt, sync1));
sync2.addEventListener('interactionstart', handleInteractionStart);
sync2.addEventListener('interactionend', handleInteractionEnd);
```


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
