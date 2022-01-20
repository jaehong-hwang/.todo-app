<template>
  <section class="menu">
  </section>
</template>

<style lang="scss" scoped>
.menu {
  display: block;
  background: var(--black);
  width: 343px;
  filter: drop-shadow(4px 0px 15px rgba(0, 0, 0, 0.25));
  backdrop-filter: blur(15px);

  @media (prefers-color-scheme: dark) {
    background: var(--light-black);
  }
}
</style>