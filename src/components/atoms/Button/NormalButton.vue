<template>
  <button :type="type" :class="{ primary, error }">
    <slot/>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, ButtonHTMLAttributes } from 'vue'

export default defineComponent({
  props: {
    primary: Boolean,
    error: Boolean,
    type: {
      type: String as PropType<ButtonHTMLAttributes['type']>,
      default () {
        return 'button'
      }
    },
  }
})
</script>


<style lang="scss" scoped>
button {
  background: var(--dark);
  color: var(--real-white);
  padding: 10px 30px;
  border: 0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &.primary {
    background: var(--primary);
  }

  &.error {
    background: var(--error);
  }
}
</style>
