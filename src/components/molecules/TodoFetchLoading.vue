<template>
  <section class="todo-loading">  
    <div class="todo-loading__icon-box">
      <div class="todo-loading__icon">
        <div class="todo-loading__icon-animate"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="scss" scoped>
.todo-loading {
  position: fixed;
  right: 0;
  top: 0;
  width: calc(100% - 230px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  background: rgba(0,0,0,0.5);

  &__icon {
    width: 100%;
    height: 100%;
    -webkit-mask: url('@/assets/images/loading-mask.png');
    -webkit-mask-size: 50%;
    -webkit-mask-position: 45% center;
    -webkit-mask-repeat: no-repeat;

    &-animate {
      width: 100%;
      height: 100%;
      background: var(--black);
      animation-name: blink;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }


    @keyframes blink {
      0% { opacity: 0; }
      30% { opacity: 1; }
      70% { opacity: 1; }
      100% { opacity: 0; }
    }
  }

  &__icon-box {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--white);
  }
}
</style>
