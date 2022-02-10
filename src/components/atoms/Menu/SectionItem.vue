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
        return ['far', 'folder']
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
  padding: 5px 20px;
  transition: .3s;

  &:hover {
    background: rgba(255,255,255,0.05);
    opacity: 1;
  }

  &.active {
    font-family: 'noto-sans-black';
    opacity: 1;
  }

  .menu-icon {
    margin-right: 14px;
  }
}
</style>
