<script setup>
import PlaceHolderPhotoInfo from './PlaceHolderPhotoInfo.vue'
</script>

<template>
  <div class="placeholder">
    <PlaceHolderPhotoInfo />
  </div>
</template>

<style lang="scss" scoped>
.placeholder {
  width: var(--card-width);
  position: relative;
  border-radius: var(--border-radius);
  background-color: var(--placeholder-card-bg);

  &:nth-child(6n + 1) {
    grid-row: span 4;
  }
  &:nth-child(6n + 2) {
    grid-row: span 6;
  }
  &:nth-child(6n + 3) {
    grid-row: span 5;
  }
  &:nth-child(6n + 4) {
    grid-row: span 5;
  }
  &:nth-child(6n + 5) {
    grid-row: span 7;
  }
  &:nth-child(6n + 6) {
    grid-row: span 6;
  }
}
</style>
