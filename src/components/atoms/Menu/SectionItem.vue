<template>
  <p :class="{ active, big: !menuOpened }">
    <fa-icon :icon="icon" class="menu-icon" v-if="showIcon" />
    <div class="menu-icon text" v-if="!showIcon">
      {{ value ? value[0] : '' }}
    </div>
    <span class="menu-title">{{ value }}</span>
  </p>
</template>

<script lang="ts">
import { defineComponent, computed, toRef } from 'vue'
import store from '@/store/index.ts'

export default defineComponent({
  props: {
    value: String,
    active: Boolean,
    icon: {
      type: String,
      default: () => {
        return ['far', 'folder']
      }
    }
  },
  setup (props) {
    const menuOpened = toRef(store.value, 'menuOpened')
    const showIcon = computed(() => {
      return menuOpened.value || typeof props.icon === 'string' || props.icon[1] !== 'folder'
    })

    return {
      menuOpened,
      showIcon
    }
  }
})
</script>

<style lang="scss" scoped>
p {
  position: relative;
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
    
    opacity: 1;
  }

  &.big {
    display: flex;
    width: 75px;
    height: 40px;
    justify-content: center;
    align-items: center;

    .menu-title {
      display: none;
    }

    .menu-icon {
      margin: 0;
      font-size: 16px;

      &.text {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        overflow: hidden;
        text-align: center;
        background: rgba(255,255,255,0.1);
      }
    }

    &:hover .menu-title {
      position: absolute;
      display: block;
      padding: 5px 10px;
      border-radius: 3px;
      background: var(--black);
      font-family: 'noto-sans-medium';
      color: var(--white);
      left: 80px;
      box-shadow: 0 3px 5px rgba(0,0,0,0.3);
      z-index: 1;
      opacity: 1;
      animation: slideup;
      animation-duration: .3s;
    }

    @keyframes slideup {
      from {
        transform: translateY(5px);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  .menu-icon {
    margin-right: 14px;
    transition: .3s;
  }
}
</style>
