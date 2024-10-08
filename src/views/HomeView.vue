<script setup>
import { onMounted, ref } from 'vue'
import PhotoListings from '@/components/PhotoListings.vue'
import { useRouter } from 'vue-router'
import { get } from '@/utils/api'
import PageHeader from '@/components/PageHeader.vue'
import IconSearch from '@/components/icons/IconSearch.vue'

const router = useRouter()

const search = ref('')
const photos = ref([])
const loading = ref(true)
const errors = ref('')

const getUnsplashPhotos = async () => {
  const response = await get('/search/photos/?query=Africa&page=1&per_page=7&order_by=latest')
  if (response.error) {
    errors.value = 'Something went wrong!'
  } else {
    photos.value = await response.data.results
  }
  loading.value = false
}

const handleSearch = (event) => {
  if (event.keyCode === 13 && search.value.trim !== '') {
    router.push(`/s/${search.value}`)
  }
}

onMounted(async () => {
  getUnsplashPhotos()
})
</script>

<template>
  <PageHeader>
    <div class="input-wrapper">
      <IconSearch />

      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a photo"
        v-model="search"
        @keyup.prevent="handleSearch"
      />
    </div>
  </PageHeader>

  <PhotoListings v-if="photos.length > 0 || loading" :photos="photos" :loading="loading" />
  <h1 class="title" v-else>
    <template v-if="errors !== ''"> {{ errors }} </template>
    <template v-else> No Search Results for </template>
  </h1>
</template>

<style lang="scss" scoped>
.input-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  input {
    font-size: 18px;
    padding-left: 60px;
  }
  svg {
    position: absolute;
    top: 19px;
    left: 20px;
    color: var(--text-color);
  }
}

h1.title {
  max-width: 1000px;
  margin: 0 auto;
  color: var(--header-text-color);
  font-weight: 600;
}
</style>
