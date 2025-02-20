<script setup lang="ts">
const store = useImagesStore()

const modalImage = computed(() => store.modalImage)

const closeModal = () => {
  store.closeModal()
}
</script>

<template>
  <Transition name="fade">
    <div v-if="modalImage" class="modal-container" @click.self="closeModal">
      <div class="modal-content">
        <button class="close" @click="closeModal">
          <img src="~/assets/icons/close.svg" alt="close">
        </button>
        <div class="image">
          <img :src="modalImage.urls.regular" :alt="modalImage.alt_description">
        </div>
        <div class="texts">
          <p>{{ modalImage.user.name }}</p>
          <p>{{ modalImage.user.location }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal-container {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #898989CC;
  z-index: 10;

  .modal-content {
    position: relative;
    width: var(--modal-width);
    max-width: 900px;
    max-height: 800px;
    height: var(--modal-height);
    border-radius: 12px;
    display: grid;
    grid-template-rows: 82.14% 17.86%;
    background-color: #F6F6F6;
    animation: image-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

    button {
      position: absolute;
      top: -7%;
      right: -10%;
      border: none;
      display: flex;
      background: transparent;
      cursor: pointer;

      img {
        width: var(--modal-close-button-size);
        height: var(--modal-close-button-size);
      }
    }

    .image {
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }
    }

    .texts {
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      padding: var(--modal-text-padding);
      display: flex;
      flex-direction: column;
      row-gap: 2px;
      justify-content: center;
      background-color: #FFF;

      p:first-of-type {
        font-size: var(--modal-author-name-size);
        color: var(--primary-color);
      }

      p:last-of-type {
        font-size: var(--modal-author-location-size);
        color: #69778D;
      }
    }
  }
}
</style>