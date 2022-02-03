<template>
  <div>
    <SectionTitle>{{title}}</SectionTitle>
    <div class="section-content">
      <SectionItem
        v-for="item in menu"
        :key="item.value"
        :value="item.name"
        :active="item.value === currentMenu"
        @click="menuClicked(item.value)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import SectionTitle from '@/components/atoms/Menu/SectionTitle.vue'
import SectionItem from '@/components/atoms/Menu/SectionItem.vue'

export default defineComponent({
  props: {
    title: String,
    menu: Array as PropType<Array<Directory>>,
    default: String
  },
  components: {
    SectionTitle,
    SectionItem,
  },
  setup(props, context) {
    const currentMenu = ref(props.default)

    const menuClicked = (val: string) => {
      if (val === currentMenu.value) return

      currentMenu.value = val
      context.emit('update', val)
    }

    return {
      currentMenu,
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
