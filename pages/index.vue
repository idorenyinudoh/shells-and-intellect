<script setup lang="ts">
import type { Image } from '~/utils/types';

const store = useImagesStore()
const config = useRuntimeConfig()

const { data } = useAsyncData('images', () => $fetch<{
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
}))

if (data.value) {
  store.$reset()
  data.value.results.forEach(image => store.addImage(image))
}
</script>

<template>
  <div>
    <div class="input-container">
      <img src="~/assets/icons/search.svg" alt="search">
      <input type="text" placeholder="Search for a photo">
    </div>
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