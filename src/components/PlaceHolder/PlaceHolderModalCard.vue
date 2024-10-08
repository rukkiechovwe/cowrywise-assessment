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
  width: 100%;
  max-width: var(--modal-width);
  height: 530px;
  position: relative;
  border-radius: var(--border-radius);
  background-color: var(--placeholder-card-bg);
}
</style>
