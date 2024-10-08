<script setup></script>

<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: var(--header-bg-color);
  padding: 7rem 1rem 6rem;
}
</style>
