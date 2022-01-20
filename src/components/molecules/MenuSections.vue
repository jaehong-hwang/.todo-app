<template>
  <div>
    <SectionTitle>{{title}}</SectionTitle>
    <div class="section-content">
      <SectionItem
        v-for="item in menu"
        :key="item"
        :value="item"
        :active="item === currentDirectory"
        @click="menuClicked(item)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SectionTitle from '@/components/atoms/Menu/SectionTitle.vue'
import SectionItem from '@/components/atoms/Menu/SectionItem.vue'

export default defineComponent({
  props: {
    title: String,
    menu: Array,
  },
  components: {
    SectionTitle,
    SectionItem,
  },
  setup(props, context) {
    const currentDirectory = ref('~')
    const menuClicked = (val: string) => {
      if (val === currentDirectory.value) return

      currentDirectory.value = val
      context.emit('update', val)
    }

    return {
      currentDirectory,
      menuClicked,
    }
  },
})
</script>

<style lang="scss" scoped>
.section-content {
  padding: 10px 0;

  > :not(:last-child) {
    padding-bottom: 5px;
  }
}
</style>
