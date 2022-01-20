<template>
  <div :class="{ active: active, hamberger: true }">
    <div class="line line-top"></div>
    <div class="line line-middle"></div>
    <div class="line line-bottom"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    active: Boolean
  }
})
</script>

<style lang="scss" scoped>
.hamberger {
  width: 25px;
  height: 25px;
  position: relative;
  overflow: hidden;

  .line {
    width: 100%;
    height: 2px;
    background: var(--black);
    position: absolute;
    left: 0;
    transition: all .3s;

    &-top {
      bottom: 18.5px;
    }

    &-middle {
      top: 11.5px;
    }

    &-bottom {
      top: 18.5px;
    }
  }

  &.active .line {
    background: var(--white);

    &-top {
      width: 12px;
      transform: rotate(-45deg);
      left: -1px;
      bottom: 16px;
    }

    &-bottom {
      width: 12px;
      transform: rotate(45deg);
      left: -1px;
      top: 17px;
    }

    @media (prefers-color-scheme: dark) {
      background: var(--black);
    }
  }
}
</style>
