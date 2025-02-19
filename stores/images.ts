import { defineStore } from "pinia";
import type { Image } from '~/utils/types';


export const useImagesStore = defineStore('images', () => {
  const images = ref<Image[]>([]);
  const addImage = (image: Image) => {
    images.value.push(image);
  }

  const $reset = () => {
    images.value = [];
  }
  
  return { images, addImage, $reset };
});