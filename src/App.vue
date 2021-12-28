<template>
  <div>
    <Header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'

export default defineComponent({
  setup() {
  },
  components: {
    Header,
  },
})
</script>

<style>
@font-face {
  font-family: 'noto-sans-black';
  src: url('./assets/fonts/Noto_Sans_KR/NotoSansKR-Black.otf');
}

@font-face {
  font-family: 'noto-sans-bold';
  src: url('./assets/fonts/Noto_Sans_KR/NotoSansKR-Bold.otf');
}

@font-face {
  font-family: 'noto-sans-medium';
  src: url('./assets/fonts/Noto_Sans_KR/NotoSansKR-Medium.otf');
}

@font-face {
  font-family: 'noto-sans';
  src: url('./assets/fonts/Noto_Sans_KR/NotoSansKR-Regular.otf');
}

@font-face {
  font-family: 'noto-sans-light';
  src: url('./assets/fonts/Noto_Sans_KR/NotoSansKR-Light.otf');
}

@font-face {
  font-family: 'noto-sans-thin';
  src: url('./assets/fonts/Noto_Sans_KR/NotoSansKR-Thin.otf');
}

* {
  margin: 0;
  padding: 0;
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
  background: #fafafa;
  width: 100%;
  height: 100%;
}
</style>
