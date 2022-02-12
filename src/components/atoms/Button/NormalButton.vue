<template>
  <button :type="type" :class="{ primary, error, loading }">
    <fa-icon v-if="loading" icon="spinner" class="loading-icon" />
    <slot/>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, ButtonHTMLAttributes } from 'vue'

export default defineComponent({
  props: {
    primary: Boolean,
    error: Boolean,
    loading: Boolean,
    type: {
      type: String as PropType<ButtonHTMLAttributes['type']>,
      default: () => {
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
  transition: box-shadow .3s;

  &.primary {
    background: var(--primary);
  }

  &.error {
    background: var(--error);
  }

  &.loading {
    opacity: 0.7;
    cursor: default;

    & .loading-icon {
      margin-right: 8px;
      animation-name: rotate;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }

    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }

  &:not(.loading):hover {
    box-shadow: 0px 5px 13px rgba(0,0,0,0.3);
  }
}
</style>
