<script setup>
import { ref } from "vue";
const elVisible = ref("a");
window.addEventListener(
  "switch",
  (evt) => (elVisible.value = evt.detail.currentActive)
);
</script>

<template>
  <div class="switch-content" ref="a" v-if="'a' === elVisible">
    <slot name="a"></slot>
  </div>
  <div class="switch-content" ref="b" v-if="'b' === elVisible">
    <slot name="b"></slot>
  </div>
</template>
