<script setup>
import { ref } from "vue";
let currentSelected = window.currentActive;
const possibleValues = ["a", "b"];

const changeMode = (evt) => {
  const el = evt.target;
  const name = el.dataset.name;

  if (possibleValues.indexOf(name) < 0) name = "js";
  if (name === currentSelected) return;
  currentSelected = name;

  const switchEvent = new CustomEvent("switch", {
    bubbles: true,
    detail: { currentActive: name },
  });
  window.dispatchEvent(switchEvent);
};

window.addEventListener("switch", (evt) => {
  const mode = evt.detail.currentActive;
  buttons.value.forEach(button => {
    button.class = (mode === button.mode) ? 'active' : '';
  });
});

const buttons = ref([
  { name: "javascript", class: "active", mode: "a" },
  { name: "data api", class: "", mode: "b" },
]);
</script>

<template>
  <div class="switchButtons">
    <div
      v-for="button in buttons"
      class="switch"
      :class="button.class"
      @click="changeMode"
      :data-name="button.mode"
      :key="button.name"
    >
      {{ button.name }}
    </div>
    <!-- <div class="switch" @click="changeMode" data-name="js">javascript</div>
    <div class="switch" @click="changeMode" data-name="data">data api</div> -->
  </div>
</template>

<style scoped>
.switchButtons {
  margin: 1em 0em;
  display: flex;
}

.switch {
  font-size: 14px;
  padding: 0.5em 1em;
  margin: 0;
  display: flex;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;

  border-color: var(--vp-button-brand-border);
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
}

.switch:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: #1c3998;
}

.switch.active,
.switch.active:hover {
  background-color: #1c3998;
}
</style>
