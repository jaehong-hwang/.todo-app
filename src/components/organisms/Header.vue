<template>
  <header>
    <Logo />
    <Hamberger id="hamberger" :active="menuOpened" @click="$emit('toggle-menu')" />
  </header>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Logo from '@/components/atoms/Logo.vue'
import Hamberger from '@/components/atoms/Hamberger.vue'

export default defineComponent({
  props: {
    menuOpened: Boolean,
  },
  setup () {
  },
  components: {
    Logo,
    Hamberger,
  },
})
</script>

<style lang="scss" scoped>
header {
  padding: 38px 30px 0;
  height: 43px;
  line-height: 43px;

  * {
    display: inline-block;
  }

  #hamberger {
    position: fixed;
    top: 40px;
    left: 42px;
    cursor: pointer;
  }
}
</style>
