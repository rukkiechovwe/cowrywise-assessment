<script setup></script>

<template>
  <div class="placeholder-info">
    <div class="name"></div>
    <div class="address"></div>
  </div>
</template>

<style lang="scss" scoped>
.placeholder-info {
  position: absolute;
  bottom: 25px;
  left: 20px;
  width: 100%;

  .name,
  .address {
    background-color: var(--placeholder-text-bg);
    height: 10px;
    animation: shimmer 2s infinite linear;
    background: linear-gradient(
      to right,
      var(--placeholder-text-bg) 8%,
      #f9f9f9 18%,
      var(--placeholder-text-bg) 33%
    );
    background-size: 1000px 100%;
  }

  .name {
    width: 45%;
  }

  .address {
    width: 25%;
    margin-top: 5px;
  }
}
@keyframes shimmer {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
}
</style>
