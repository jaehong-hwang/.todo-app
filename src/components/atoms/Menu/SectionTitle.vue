<template>
  <h3 v-if="menuOpened"><slot/></h3>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'
import store from '@/store/index.ts'

export default defineComponent({
  setup() {
    const menuOpened = toRef(store.value, 'menuOpened')

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
