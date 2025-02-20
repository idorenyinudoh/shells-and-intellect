<script setup lang="ts">
import type { Image } from '~/utils/types';

const store = useImagesStore()
const config = useRuntimeConfig()
const route = useRoute()
const query = route.query.q as string
const imagesAreLoading = ref(false)

const fetchImages = async () => {
  imagesAreLoading.value = true

  const res = await $fetch<{
    results: Image[],
    total: number,
    total_pages: number
  }>('/search/photos', {
    baseURL: 'https://api.unsplash.com/',
    headers: {
      'Authorization': `Client-ID ${config.public.unsplashAccessKey}`
    },
    params: {
      query,
      per_page: 8
    }
  })

  imagesAreLoading.value = false

  store.$reset()
  res.results.forEach(image => store.addImage(image))
}

useHead({
  title: `Search Results for “${query}”`
})

onMounted(() => {
  fetchImages()
})
</script>

<template>
  <div>
    <h1>
      {{ imagesAreLoading ? 'Searching for' : 'Search Results for' }} <span>“{{ query }}”</span>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
:root {
  --heading-font-size: 32px;
}

@media screen and (min-width: 768px) {
  :root {
    --heading-font-size: 40px;
  }
}

h1 {
  font-size: var(--heading-font-size);
  font-weight: 500;
  color: var(--primary-color);

  span {
    color: #69778D;
    text-transform: capitalize;
  }
}
</style>