<template>
  <div :class="['circle-background', size]" @click="$emit('update:active', !active)">
    <div :class="{ 'circle-wrapper': true, active }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    size: {
      type: String as PropType<Size>,
      default: () => {
        return 'medium'
      },
    },
    active: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
})
</script>

<style lang="scss" scoped>
.circle-background {
  background: var(--black);
  cursor: pointer;
  padding: 3px;

  &.medium {
    width: 60px;
    height: 30px;
    border-radius: 30px;
  }

  &.small {
    width: 40px;
    height: 20px;
    border-radius: 20px;
  }
}

.circle-wrapper {
  padding-left: 0;
  padding-right: calc(50% + 3px);
  height: 100%;
  transition: .3s;

  &.active {
    padding-left: calc(50% + 3px);
    padding-right: 0;
  }
}
</style>
