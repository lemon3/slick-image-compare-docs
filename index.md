---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Slick Image Compare"
  text: "A fast, lightweight image compassion slider"
  tagline:
  # image:
  #   src: /logo.png
  #   alt: VitePress
  actions:
    - theme: brand
      text: Getting started
      link: /intro/getting-started
    - theme: alt
      text: Examples
      link: /examples/basic

features:
  - title: Zero dependencies
    details: no dependencies to other libraries.
  - title: Vanilla JavaScript
    details: just plain JavaScript.
  - title: Customizable
    details: Can be customized to fit your needs.
---

<script setup>
import { onMounted } from 'vue';
import SlickImageCompare from 'slick-image-compare';
import SwitchButtons from './Components/SwitchButtons.vue';
import SwitchContent from './Components/SwitchContent.vue';

onMounted(() => {
  const options = {
    beforeLabel: 'Original',
    afterLabel: 'Color graded',
    snapToStart: true,
    handleAngle: 6,
    startPos: 38
  }
  const sic1 = new SlickImageCompare('#example', options);
});
</script>

## Info
Is a modern image comparison slider written in vanilla JavaScript and has no dependencies on other libraries. Best for comparing images, image retouching, color adjustments, renderings, generative content, etc.

## Example
<div style="display: flex;
  flex-direction: column;
  align-items: center;">
  <div id="example" style="max-width:720px">
    <img src="/images/04_before.jpg" alt="before" />
    <img src="/images/04_after.jpg" alt="after" />
  </div>
  <div class="image-caption">Italy, Sunrise (color grading)</div>
</div>

the example above used this options:
```js
const options = {
  beforeLabel: 'Original',
  afterLabel: 'Color graded',
  snapToStart: true,
  handleAngle: 6,
  startPos: 38
}
```
