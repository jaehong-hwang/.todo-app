<template>
  <h3 v-if="menuOpened"><slot/></h3>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getItem } from '@/store/index.ts'

export default defineComponent({
  setup() {
    const menuOpened = getItem('menuOpened')

    return {
      menuOpened
    }
  },
})
</script>


<style lang="scss" scoped>
h3 {
  text-transform: uppercase;
  color: var(--gray);
  font-size: 11px;
  padding-left: 20px;
}
</style>
