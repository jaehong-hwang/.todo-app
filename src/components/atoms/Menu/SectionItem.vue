<template>
  <p :class="{ active }"><fa-icon :icon="'folder'" />{{ value }}</p>  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: String,
    active: Boolean,
  }
})
</script>

<style lang="scss" scoped>
p {
  color: var(--real-white);
  opacity: 0.7;
  font-family: 'noto-sans-medium';
  font-size: 16px;
  cursor: pointer;

  &.active {
    font-family: 'noto-sans-black';
    opacity: 1;
  }
}
</style>
