<script setup>
import { ref } from 'vue'
import PhotoCard from './PhotoCard.vue'
import PlaceHolderPhotoCard from './PlaceHolder/PlaceHolderPhotoCard.vue'
import PhotoModal from './PhotoModal.vue'

defineProps({
  photos: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean
  }
})

const selectedPhotoId = ref(null)
const showModal = ref(false)

const toggleModal = (value) => {
  showModal.value = value
}

const handlePhotoClick = (id) => {
  selectedPhotoId.value = id
  toggleModal(true)
}
</script>

<template>
  <div class="results">
    <!-- use place holder instead -->

    <div class="photo-list">
      <PlaceHolderPhotoCard v-if="loading" />
      <PlaceHolderPhotoCard v-if="loading" />
      <PlaceHolderPhotoCard v-if="loading" />
      <PlaceHolderPhotoCard v-if="loading" />
      <PlaceHolderPhotoCard v-if="loading" />
      <PlaceHolderPhotoCard v-if="loading" />
      <PlaceHolderPhotoCard v-if="loading" />

      <PhotoCard
        v-for="photo in photos"
        :key="photo.id"
        :id="photo.id"
        :name="photo.user.name"
        :location="photo.user.location"
        :image="photo.urls.regular"
        :alt="photo.alt_description"
        @photoClick="handlePhotoClick"
      />
      <PhotoModal :show="showModal" :id="selectedPhotoId" @close="toggleModal(false)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.results {
  padding: 0 2rem 5rem;
  max-width: 845px;
  margin: 0 auto;
  margin-top: -2.5rem;

  @media (min-width: 902px) {
    padding: 0 0 5rem;
  }
}

.photo-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--grid-gap);
  grid-auto-rows: 50px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
