<template>
  <header>
    <Logo />
    <Hamberger id="hamberger" :active="menuOpened" @click="menuOpened = !menuOpened" />
  </header>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Logo from '@/components/atoms/Logo.vue'
import Hamberger from '@/components/atoms/Hamberger.vue'

export default defineComponent({
  setup () {
    const menuOpened = ref(false)

    return {
      menuOpened,
    }
  },
  components: {
    Logo,
    Hamberger,
  },
})
</script>

<style lang="scss" scoped>
header {
  padding: 28px 30px 0;
  height: 43px;
  line-height: 43px;

  * {
    display: inline-block;
  }

  #hamberger {
    float: right;
    cursor: pointer;
  }
}
</style>
