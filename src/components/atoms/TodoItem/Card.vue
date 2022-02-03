<template>
  <div class="todo-item">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.todo-item {
  width: 100%;
  height: 70px;
  padding: 25px 20px;

  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  @media (prefers-color-scheme: dark) {
    background: var(--dark);
  }
}
</style>
