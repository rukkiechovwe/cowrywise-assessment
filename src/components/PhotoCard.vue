<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['photoClick'])

const handlePhotoClick = () => {
  emit('photoClick', props.id)
}
</script>

<template>
  <div class="photo" @click="handlePhotoClick">
    <img :src="image" :alt="alt" />
    <div class="overlay"></div>
    <div class="photo-info">
      <h5 class="name">{{ name }}</h5>
      <p class="address">{{ location }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.photo {
  width: 100%;
  position: relative;
  cursor: pointer;

  @media (min-width: 1024px) {
    width: var(--card-width);
  }

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

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
  }

  .overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    border-radius: var(--border-radius);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.4) 15%,
      rgba(0, 0, 0, 0.1) 35%,
      rgba(0, 0, 0, 0.09) 100%
    );
  }

  .photo-info {
    position: absolute;
    bottom: 25px;
    left: 20px;
    color: #fff;

    .name {
      font-size: 18px;
      font-weight: 600;
    }

    .address {
      font-size: 14px;
    }
  }
}
</style>
