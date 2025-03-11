---
title: Advanced
---

<script setup>
import { onMounted, ref, reactive, useTemplateRef } from 'vue';
import SlickImageCompare from 'slick-image-compare';

import SwitchButtons from '../Components/SwitchButtons.vue';
import SwitchContent from '../Components/SwitchContent.vue';

const texts = {
  info: ['"before" image is shown', '"after" image is shown'],
  caption: ['pink shoes', 'blue shoes'],
  button: ['Show before', 'Show after']
};

let eventInfoBox = useTemplateRef('eventInfoBox');

let isSlide = false;
// let smooth = false;
// let smoothTime = 500;
// let smoothTo;

let sic;
let infoHeader = ref();
let orientationInfo = ref();
let smoothValue = ref(0);
let handleAngle = ref(0);
let fromPercent = ref('left');
let percent = ref(0);
let imageCaption = ref('');
let toggleBtn = ref(texts.button[0]);
let rangeBtn = ref(0);

// let horizontal = ref(true);

let eventInfoObj = [];
let eventInfo = ref([]);
let eventCount = ref(0);

const slide = (e) => {
  sic.goto(e.target.value, smoothValue);
}
// const down = () => {
//   clearTimeout(smoothTo);
//   isSlide = true;
// };
// const up = () => {
//   smoothTo = setTimeout(() => {
//     clearTimeout(smoothTo);
//     isSlide = false;
//   }, smoothTime);
// };

const changeOrientationInfo = () => {
  orientationInfo.value = sic._horizontal
    ? sic._ltr
      ? 'LEFT - RIGHT'
      : 'RIGHT - LEFT'
    : sic._ltr
      ? 'TOP - BOTTOM'
      : 'BOTTOM - TOP';
};

const play = () => {
  sic.play(50, 3, 2000);
};

const clearEventLog = () => {
  eventInfoObj = [];
  eventInfo.value = [];
  eventCount.value = 0;
};

const toggleBeforeAfter = () => {
  sic.toggleView();
};

const changeDirection = () => {
  sic.changeDirection();
  changeOrientationInfo();
};

const changeOrientation = () => {
  sic.changeOrientation();
  fromPercent.value = sic._horizontal ? 'left' : 'top';
  changeOrientationInfo();
};

const setHandleAngle = (evt) => {
  handleAngle.value = +evt.target.value;
  sic.setAngle(handleAngle.value);
};

const addEventInfo = (evt) => {
  const name = evt.type;
  eventCount.value ++;
  eventInfoObj.push({ name, count: eventCount.value });
  eventInfo.value = eventInfoObj;

  setTimeout(() => {
    eventInfoBox.value.scrollTop = eventInfoBox.value.scrollHeight;
  }, 0);
};

const options = {
  beforeImage: '/images/03_before.png',
  afterImage: '/images/03_after.png',
  beforeLabel: 'pink',
  afterLabel: 'blue',
  animateIn: true,
  snapToStart: true,
  init(e) {
    fromPercent.value = e.detail.horizontal ? 'left' : 'top';
    const which = e.detail.afterShown ? 1 : 0;
    infoHeader.value = texts.info[which];
    imageCaption.value = texts.caption[which];
    changeOrientationInfo();
  },
};

onMounted(() => {
  sic = new SlickImageCompare('#example', options);

  sic.allowedEvents.forEach((evt) => {
    if ('update' === evt || 'drag' === evt) return;
    sic.addEventListener(evt, addEventInfo);
  });

  // events
  sic.addEventListener('viewchange', (e) => {
    const afterShown = e.detail.afterShown;
    toggleBtn.value = texts.button[(afterShown ? 0 : 1)];
  });

  sic.addEventListener('update', (e) => {
    let p = Math.round(e.detail.percent * 100) / 100;
    if (!isSlide) rangeBtn.value = p;
    percent.value = `${p}%`;
  });

  sic.addEventListener('beforeshown', (e) => {
    // console.log('beforeshown');
    infoHeader.value = texts.info[0];
    imageCaption.value = texts.caption[0];
  });

  sic.addEventListener('aftershown', (e) => {
    // console.log('aftershown');
    infoHeader.value = texts.info[1];
    imageCaption.value = texts.caption[1];
  });

});

</script>

# Advanced

With custom HTML inside the main 'div' and a start position.
You can use your own HTML inside, it will not be overwritten (see example below).
startPos is set to 25 (percent from left).

```html
<div id="example"></div>
```

```js
const options = {
  beforeImage: '/images/03_before.png',
  afterImage: '/images/03_after.png',
  beforeLabel: 'pink',
  afterLabel: 'blue',
  animateIn: true,
  snapToStart: true,
};

const sic = new sic('#example', options);
```

<div class="grid">
  <div>
    <div class="panel">
      <h3>{{ infoHeader }}</h3>
      <div class="panel-line">
        <div class="label">
          percent (from {{ fromPercent }}):
        </div>
        <span id="adv-percent">{{percent}}</span>
      </div>
      <div class="panel-line">
        <div class="label">slider:</div>
        <input
          @mousedown="down"
          @mouseup="up"
          @touchstart="down"
          @touchend="up"
          @input="slide"
          type="range" step="0.5" min="0" max="100" :value="rangeBtn">
        <!-- <input
          id="adv-smooth"
          type="checkbox"
          :value="smoothValue"
          :checked="smoothValue"
          @input="(e) => smoothValue = (e.target.checked) ? 1 : 0"
        /> -->
        <!-- <label for="adv-smooth">smooth</label> -->
      </div>
      <div class="panel-line">
        <div class="label">handleAngle:</div>
        <input @input="setHandleAngle" type="range" step="1" min="-15" max="15" :value="handleAngle">
        <input type="text" id="adv-handle-angle-value" readonly="" style="width: 40px" :value="handleAngle">
      </div>
      <div class="panel-line">
        <button @click="toggleBeforeAfter" class="switch">{{toggleBtn}}</button>
        <button @click="play" class="switch">play</button>
      </div>
      <div class="panel-line">
        orientation: {{ orientationInfo }}
      </div>
      <div class="panel-line grid">
        <button @click="changeDirection" class="switch">change direction</button>
        <button @click="changeOrientation" class="switch">change orientation</button>
      </div>
    </div>
    <div class="panel">
      events:
      <div id="adv-events" ref="eventInfoBox" class="small">
        <template v-if="eventCount > 0">
          <div v-for="(event, index) in eventInfo" :key="index">
            <span>{{ event.count }}.</span> {{ event.name }}
          </div>
        </template>
      </div>
      <button @click="clearEventLog" class="switch">clear event log</button>
    </div>
  </div>

  <div>
    <div id="example"></div>
    <div class="image-caption">{{ imageCaption }}</div>
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
.panel {
  padding: 1em;
  background-color: var(--vp-code-block-bg);
  font-size: 0.8em;
}
.panel h3 {
  margin-top: 0;
}
.panel-line {
  width: 100%;
  display: inline-flex;
  flex-flow: row nowrap;
  margin-bottom: 0.5em;
  gap: 0px 10px;
}

.panel-line .label {
  padding-right: 0.5em;
}
#adv-events {
  font-size: 0.8em;
  width: 100%;
  line-height: 1em;
  height: 8em;
  overflow-y: scroll;
  background: rgba(255, 255, 255, 0.1);
  margin-bottom: 0.5em;
}
#adv-events span {
  display: inline-block;
  background: #213f92;
  color: #fff;
  padding: 0 0.5em;
  margin: 0.25em 0.25em 0.5em 0;
  line-height: 1.4em;
}
#adv-events div:nth-child(2n) {
  background-color: rgba(0, 0, 0, 0.1);
}
.dark #adv-events div:nth-child(2n) {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
