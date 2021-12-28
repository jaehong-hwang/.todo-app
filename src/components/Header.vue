<template>
  <header>
    <span>hanberger</span>
    <Logo />
    <span>add</span>
  </header>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Logo from './Logo.vue'

export default defineComponent({
  setup () {
    const count = ref(0)

    return {
      count,
    }
  },
  components: {
    Logo,
  },
})
</script>

<style lang="scss" scoped>
header {
  display: flex;
  padding: 28px 30px 0;
  height: 43px;
  align-content: center;
  justify-content: space-between;
}
</style>
