<script setup>
import PageHeader from '@/components/PageHeader.vue'
import PhotoListings from '@/components/PhotoListings.vue'
import { get } from '@/utils/api'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const searchText = route.params.search

const photos = ref([])
const loading = ref(true)
const errors = ref('')

const getUnsplashPhotos = async () => {
  const response = await get(`/search/photos/?query=African-${searchText}&page=1&per_page=7`)
  if (response.error) {
    errors.value = 'Something went wrong!'
  } else {
    photos.value = await response.data.results
  }
  loading.value = false
}

onMounted(async () => {
  getUnsplashPhotos()
})
</script>

<template>
  <PageHeader>
    <h1 class="title">
      <template v-if="errors !== ''"> {{ errors }} </template>
      <template v-else>
        <template v-if="loading"> Searching for </template>
        <template v-else-if="photos.length > 0"> Search Results for </template>
        <template v-else> No Search Results for </template>
        <span>"{{ searchText }}"</span>
      </template>
    </h1>
  </PageHeader>

  <PhotoListings :photos="photos" :loading="loading" />
</template>

<style lang="scss" scoped>
h1.title {
  max-width: 1000px;
  margin: 0 auto;
  color: var(--header-text-color);
  font-weight: 600;

  span {
    color: var(--secondary-text-color);
  }
}
</style>
