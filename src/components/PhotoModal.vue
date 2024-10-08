<script setup>
import { get } from '@/utils/api'
import { defineProps, defineEmits, ref, watch } from 'vue'
import PlaceHolderModalCard from './PlaceHolder/PlaceHolderModalCard.vue'

const props = defineProps({
  show: { type: Boolean },
  id: { type: String }
})

const photo = ref(null)
const loading = ref(true)
const errors = ref('')

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const getUnsplashPhotoById = async () => {
  const response = await get(`/photos/${props.id}`)
  if (response.error) {
    errors.value = 'Something went wrong!'
  } else {
    photo.value = await response.data
  }
  loading.value = false
}

watch(
  () => props.id,
  (newId) => {
    if (newId) {
      photo.value = null
      errors.value = ''
      loading.value = true

      getUnsplashPhotoById()
    }
  },
  { immediate: true }
)
</script>

<template>
  <div v-if="show" class="modal-overlay" @click="closeModal">
    <div class="modal-content">
      <PlaceHolderModalCard v-if="loading" />
      <p class="error" v-else-if="errors !== ''">Something went wrong</p>
      <div v-else-if="photo !== null" class="modal-card" @click.stop>
        <img :src="photo.urls.regular" :alt="photo.alt_description" />
        <div class="photo-info">
          <h5 class="name">{{ photo.user.name }}</h5>
          <p class="address">{{ photo.location.name }}</p>
        </div>
      </div>
      <button class="close-button" @click="closeModal">&times;</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: var(--modal-overlay-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 50px 20px 20px;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 50px 0 0;
  }

  .error {
    color: var(--header-text-color);
    font-size: 20px;
    font-weight: 600;
    padding: 60px 20px;
    background-color: var(--white);
    border-radius: var(--border-radius);
    max-width: var(--modal-width);
    text-align: center;
  }

  .modal-content {
    width: 100%;
    max-width: 700px;
    max-height: 530px;
    position: relative;
  }

  .modal-card {
    background-color: var(--white);
    border-radius: var(--border-radius);
    max-width: var(--modal-width);
    height: 330px;
    position: relative;
    margin: 0 auto;

    @media (min-width: 450px) {
      height: 430px;
    }

    @media (min-width: 768px) {
      height: 530px;
    }

    img {
      width: 100%;
      height: calc(100% - 101px);
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }

    .photo-info {
      padding: 20px 30px;

      .name {
        color: var(--header-text-color);
        font-size: 20px;
        font-weight: 600;
      }

      .address {
        font-size: 14px;
        color: var(--text-color);
      }
    }
  }

  button.close-button {
    position: absolute;
    top: -50px;
    right: -4px;
    font-size: 24px;
    color: var(--text-color);
    background: none;
    border: none;
    cursor: pointer;

    @media (min-width: 768px) {
      right: -35px;
      top: -35px;
    }
  }
}
</style>
