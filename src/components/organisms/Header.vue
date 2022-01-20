<template>
  <header>
    <Logo />
    <Hamberger id="hamberger" :active="menuOpened" @click="$emit('toggle-menu')" />
    <Suspense>
      <template #default>
        <DarkModeSwitch id="switch" />
      </template>
    </Suspense>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '@/components/atoms/Logo.vue'
import Hamberger from '@/components/atoms/Hamberger.vue'
import DarkModeSwitch from '@/components/molecules/DarkModeSwitch.vue'

export default defineComponent({
  props: {
    menuOpened: Boolean,
  },
  setup () {
  },
  components: {
    Logo,
    Hamberger,
    DarkModeSwitch,
  },
})
</script>

<style lang="scss" scoped>
header {
  -webkit-app-region: drag;
  padding: 38px 30px 0;
  height: 81px;
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

  #switch {
    position: fixed;
    top: 40px;
    right: 42px;
  }
}
</style>
