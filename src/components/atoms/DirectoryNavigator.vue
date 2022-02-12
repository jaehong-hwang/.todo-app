<template>
  <p class="directory-navigation">
    <template v-if="menu && !menu.global">
      <span class="full">{{ menu && menu.value }}</span>
      <span class="summary">{{ menuText }}</span>
    </template>
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  props: {
    menu: Object as PropType<Directory>
  },
  setup (props) {
    const menuText = computed((): string => {
      if (props.menu) {
        const dirArray = props.menu.value.split('/')
        if (props.menu.value[0] === '/' && dirArray.length > 5) {
          return `/${dirArray[1]}/.../${dirArray[dirArray.length-1]}`
        }

        return props.menu.value
      }
      return ''
    })

    return {
      menuText
    }
  }
})
</script>

<style lang="scss" scoped>
.directory-navigation {
  font-size: 14px;
  line-height: 100%;
  color: var(--black);
  opacity: 0.5;
  transition: .3s;

  .full {
    display: none;
  }

  &:hover {
    opacity: 1;

    .full {
      display: inline;
    }

    .summary {
      display: none;
    }
  }
}
</style>
