<template>
  <div id="wrap">
    <transition appear name="slide-left">
      <Menu v-show="menuOpened" />
    </transition>
    <section id="app-wrap" :class="{ 'menu-opened': menuOpened }">
      <Header :menuOpened="menuOpened" @toggle-menu="menuOpened = !menuOpened"/>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Header from '@/components/organisms/Header.vue'
import Menu from '@/components/organisms/Menu.vue'

export default defineComponent({
  setup() {
    const menuOpened = ref(false)

    return {
      menuOpened,
    }
  },
  components: {
    Header,
    Menu,
  },
})
</script>

<style lang="scss">
@import '@/assets/scss/fonts.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: color, background .3s;
}

html, body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: 'noto-sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  background: var(--white);
  width: 100%;
  height: 100%;
}

#wrap {
  display: flex;
  min-height: 100%;

  #app-wrap {
    flex: 1;
  }
}

.menu.slide-left {
  &-enter-active {
    transition: width .25s ease-out;
  }

  &-leave-active {
    transition: width .25s ease-in;
  }

  &-enter-from, &-leave-to {
    width: 0;
  }
}
</style>
