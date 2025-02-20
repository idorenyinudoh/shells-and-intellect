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

  const modalImage = ref<Image | null>(null);

  const openModal = (image: Image) => {
    modalImage.value = image;
  }
  
  const closeModal = () => {
    modalImage.value = null;
  }
  
  return { images, addImage, $reset, modalImage, openModal, closeModal };
});