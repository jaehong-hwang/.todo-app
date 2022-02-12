<template>
  <header>
    <DirectoryNavigator :menu="currentPage" />
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
import DarkModeSwitch from '@/components/molecules/DarkModeSwitch.vue'
import DirectoryNavigator from '@/components/atoms/DirectoryNavigator.vue'
import { currentPage } from '@/store/page.ts'

export default defineComponent({
  props: {
    menuOpened: Boolean,
  },
  setup () {
    return {
      currentPage
    }
  },
  components: {
    Logo,
    DarkModeSwitch,
    DirectoryNavigator,
  },
})
</script>

<style lang="scss" scoped>
header {
  -webkit-app-region: drag;
  padding: 8px 10px;
  height: 36px;
  line-height: 43px;
  display: flex;
  justify-content: space-between;

  * {
    display: inline-block;
  }
}
</style>
