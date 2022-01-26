<template>
  <section class="menu">
    <MenuSections title="Directories" :menu="directories" @update="directoryUpdate" />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MenuSections from '@/components/molecules/MenuSections.vue'
import { directoryFetch } from '@/todo'

export default defineComponent({
  setup() {
    const directoryUpdate = (val: String) => {
      console.log(val)
    }

    const directories = ref([{}])
    directoryFetch().then((res: Array<Object>) => directories.value = res)

    return {
      directories,
      directoryUpdate,
    }
  },
  components: {
    MenuSections
  }
})
</script>


<style lang="scss" scoped>
.menu {
  display: block;
  background: var(--black);
  padding: 90px 0 20px 42px;
  width: 343px;
  filter: drop-shadow(4px 0px 15px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(15px);
  text-align: left;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: var(--light-black);
  }
}
</style>vsc 