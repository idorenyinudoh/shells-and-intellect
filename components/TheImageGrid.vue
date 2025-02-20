<script setup lang="ts">
import type { Image } from '~/utils/types';

const props = defineProps<{
  images: Image[] | []
}>()

const imageGroups = computed(() => {
  const groups = [];

  if (props.images.length > 0) {
    groups.push(props.images.slice(0, 3));
    groups.push(props.images.slice(3, 5));
    groups.push(props.images.slice(5, 8));
  } else {
    groups.push(new Array(3).fill(null));
    groups.push(new Array(2).fill(null));
    groups.push(new Array(3).fill(null));
  }

  return groups;
});
</script>

<template>
  <div class="images-container">
    <div class="image-container" v-for="(group, groupIndex) in imageGroups" :key="groupIndex">
      <BaseImage v-for="(image, index) in group" :key="`${groupIndex}${index}`" :image="image" class="image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (min-width: 640px) and (max-width: 1023px) {
  .image-container:last-of-type {
    grid-column: 1 / 3;
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    column-gap: calc(45px + 1vw);

    .image:nth-of-type(2) {
      margin-top: -21vh;
    }
  }
}

.images-container {
  display: grid;
  grid-template-columns: var(--images-grid-column);
  column-gap: calc(45px + 1vw);
  row-gap: calc(35px + 1vh);
  
  .image-container {
    display: flex;
    flex-direction: column;
    row-gap: calc(35px + 1vh);
  }

  .image-container:first-of-type {
    .image:first-of-type {
      height: 29.4vh;
    }

    .image:nth-of-type(2) {
      height: 36.47vh;
    }

    .image:nth-of-type(3) {
      height: 29.4vh;
    }
  }

  .image-container:nth-of-type(2) {
    .image:first-of-type {
      height: 40vh;
    }

    .image:nth-of-type(2) {
      height: 40vh;
    }
  }

  .image-container:last-of-type {
    .image:first-of-type {
      height: 34.71vh;
    }

    .image:nth-of-type(2) {
      height: 40vh;
    }

    .image:nth-of-type(3) {
      height: 29.4vh;
    }
  }
}
</style>