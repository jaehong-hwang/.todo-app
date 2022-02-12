<template>
  <section :class="{ 'menu-wrapper': true, 'opened': menuOpened }">
    <div class="menu-close" v-if="menuOpened" @click="menuOpened = false">
      <fa-icon icon="angles-left" />
    </div>
    <div class="menu">
      <SectionItem
        v-if="!menuOpened"
        @click="menuOpened = true"
        :menu="{
          value: 'open',
          name: 'open',
          icon: 'angles-right',
          prevent: true
        }"
      />
      <Author />
      <MenuSections
        v-for="(item, k) in pageList"
        :key="k"
        :title="k === 'index' ? '' : k"
        :menu="item"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SectionItem from '@/components/atoms/Menu/SectionItem.vue'
import MenuSections from '@/components/molecules/MenuSections.vue'
import { getItem } from '@/store/index.ts'
import { pageList } from '@/store/page.ts'

export default defineComponent({
  components: {
    MenuSections,
    SectionItem,
  },
  setup() {
    const menuOpened = getItem('menuOpened')

    return {
      menuOpened,
      pageList,
    }
  }
})
</script>


<style lang="scss" scoped>
.menu {
  width: 230px;

  &-wrapper {
    position: relative;
    display: block;
    background: var(--dark);
    padding: 36px 0 0;
    width: 75px;
    height: 100vh;
    backdrop-filter: blur(15px);
    text-align: left;
    transition: .3s;

    &.opened {
      width: 230px;
      filter: drop-shadow(4px 0px 10px rgba(0, 0, 0, 0.1));
    }
  }

  & > :not(:last-child) {
    margin-bottom: 10px;
  }

  &-open {
    color: var(--real-white);
    opacity: 0.7;
    transition: .3s;

    &:hover {
      opacity: 1;
    }
  }

  &-close {
    position: absolute;
    color: var(--real-white);
    opacity: 0;
    transition: .3s;
    top: 5px;
    right: 10px;
    cursor: pointer;
  }

  &-wrapper:hover &-close {
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
