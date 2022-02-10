<template>
  <p :class="{ active }"><fa-icon :icon="icon" class="menu-icon" />{{ value }}</p>  
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: String,
    active: Boolean,
    icon: {
      type: String,
      default () {
        return 'folder'
      }
    }
  }
})
</script>

<style lang="scss" scoped>
p {
  color: var(--real-white);
  opacity: 0.7;
  font-family: 'noto-sans-medium';
  font-size: 14px;
  cursor: pointer;
  padding: 5px 0;

  &.active {
    font-family: 'noto-sans-black';
    opacity: 1;
  }

  .menu-icon {
    margin-right: 14px;
  }
}
</style>
