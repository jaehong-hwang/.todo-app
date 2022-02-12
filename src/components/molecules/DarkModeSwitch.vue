<template>
  <SwitchBox size="small" @click="toggleActive" v-model:active="isDarkMode">
    <SwitchCircle>
    </SwitchCircle>
  </SwitchBox>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SwitchBox from '@/components/atoms/Switch/Box.vue'
import SwitchCircle from '@/components/atoms/Switch/Circle.vue'

export default defineComponent({
  async setup () {
    const toggleActive = () => {
      window.toggleDarkmode()
    }

    const isDarkMode = ref(false)

    return {
      toggleActive,
      isDarkMode,
    }
  },
  components: {
    SwitchBox,
    SwitchCircle,
  },
})
</script>
