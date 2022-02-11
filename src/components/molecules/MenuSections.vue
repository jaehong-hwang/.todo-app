<template>
  <div>
    <SectionTitle v-if="title">{{title}}</SectionTitle>
    <div class="section-content">
      <SectionItem
        v-for="item in menu"
        :key="item.value"
        :value="item.name"
        :icon="item.icon"
        :active="item.value === currentPage"
        @click="$emit('update', item.value)"
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
    menu: Array as PropType<Directory[]>,
    default: String
  },
  components: {
    SectionTitle,
    SectionItem,
  },
  setup(props, context) {
  },
})
</script>

<style lang="scss" scoped>
.section-content {
  padding: 10px 0;
}
</style>
