<template>
  <SwitchBox @click="toggleActive">
    <SwitchCircle>
    </SwitchCircle>
  </SwitchBox>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import SwitchBox from '@/components/atoms/Switch/Box.vue'
import SwitchCircle from '@/components/atoms/Switch/Circle.vue'

export default defineComponent({
  async setup () {
    const toggleActive = () => {
      window.toggleDarkmode()
    }

    return {
      toggleActive,
    }
  },
  components: {
    SwitchBox,
    SwitchCircle,
  },
})
</script>
