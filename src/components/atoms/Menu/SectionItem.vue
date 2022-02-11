<template>
  <p v-if="menu" :class="{ active, big: !menuOpened }" @click="updatePage">
    <fa-icon :icon="icon" class="menu-icon" v-if="showIcon" />
    <div class="menu-icon text" v-if="!showIcon">
      {{ menu.name ? menu.name[0] : '' }}
    </div>
    <span class="menu-title">{{ menu.name }}</span>
  </p>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import { getItem } from '@/store/index.ts'
import { setCurrentPage, currentPage } from '@/store/page.ts'

export default defineComponent({
  props: {
    menu: {
      type: Object as PropType<Directory>,
      required: true,
    },
  },
  setup (props, context) {
    const menuOpened = getItem('menuOpened')
    const icon = computed((): Directory['icon'] => {
      return props.menu && props.menu.icon ? props.menu.icon : ['far', 'folder']
    })
    const showIcon = computed(() => {
      return menuOpened.value || typeof icon.value === 'string' || (icon.value instanceof Array && icon.value[1] !== 'folder')
    })

    const active = computed(() => {
      return props.menu && props.menu.value === currentPage.value.value
    })

    const updatePage = () => {
      if (props.menu.prevent) return

      setCurrentPage(props.menu)
    }

    return {
      menuOpened,
      icon,
      showIcon,
      updatePage,
      active,
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
    font-family: 'noto-sans-black';
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
