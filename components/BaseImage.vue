<script setup lang="ts">
import type { Image } from '~/utils/types';

const props = defineProps<{
  image?: Image
}>()

const store = useImagesStore()

const setImageAsModalImage = () => {
  store.openModal(props.image!)
}
</script>

<template>
  <div class="image">
    <img v-if="props.image" :src="props.image?.urls.small" :alt="props.image?.alt_description" @click="setImageAsModalImage" />
    <div v-if="props.image" class="overlay" />
    <div class="texts">
      <p>{{ props.image?.user.name }}</p>
      <p>{{ props.image?.user.location !== null ? props.image?.user.location : ' ' }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  position: relative;
  display: grid;
  border-radius: 8px;
  background-color: #F6F6F6;
  overflow: hidden;
  animation: image-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: all 250ms linear;
  }

  img:hover {
    inset: -2.5%;
    width: 105%;
    height: 105%;
  }

  .overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(transparent 50%, #000000B3);
    z-index: 1;
    pointer-events: none;
  }

  .texts {
    margin-top: auto;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    z-index: 2;
    pointer-events: none;

    p:empty {
      height: 16px;
      background-color: #E7E7E7;
      animation: text-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    p {
      color: #FFFFFFE6;
    }

    p:first-of-type {
      font-size: 18px;
    }

    p:first-of-type:empty {
      width: 50%;
    }

    p:last-of-type {
      font-size: 14px;
    }

    p:last-of-type:empty {
      width: 30%;
    }
  }
}

@keyframes text-pulse {
  50% {
    opacity: 0.5;
  }
}
</style>