<script setup lang="ts">
import type { Image } from '~/utils/types';

const store = useImagesStore()
const config = useRuntimeConfig()
const router = useRouter()

const fetchImages = async () => {
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
      query: 'african',
      per_page: 8
    }
  })

  store.$reset()
  res.results.forEach(image => store.addImage(image))
}

useHead({
  title: 'Home'
})

onMounted(() => {
  fetchImages()
})

const input = ref('')
const search = () => {
  store.$reset()
  router.push({ path: '/search', query: { q: input.value } })
}
</script>

<template>
  <div>
    <form class="input-container" @submit.prevent="search">
      <img src="~/assets/icons/search.svg" alt="search">
      <input v-model="input" type="text" placeholder="Search for a photo" required>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    inset-block: 0;
    margin-block: auto;
    left: var(--input-padding);
    width: var(--search-icon-size);
    height: var(--search-icon-size);;
    pointer-events: none;
  }

  input {
    width: 100%;
    border: 1px solid transparent;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: var(--input-padding) var(--input-padding) var(--input-padding) var(--input-padding-left);
    background-color: #FFF;
    font-size: 20px;
    outline: none;
    transition: all 200ms linear;
  }

  input:focus {
    border: 1px solid var(--primary-color);
  }

  input::placeholder {
    color: #495b72;
  }
}
</style>