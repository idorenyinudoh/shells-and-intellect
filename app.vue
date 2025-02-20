<script setup lang="ts">
const store = useImagesStore()
const images = computed(() => store.images)
</script>

<template>
  <div class="page">
    <header>
      <div class="content">
        <NuxtPage />
      </div>
    </header>
    <TheImageGrid :images="images" class="grid" />
    <TheImageModal />
  </div>
</template>

<style lang="scss" scoped>
.page {
  min-height: 100dvh;
  background-color: #FFF;

  header {
    position: absolute;
    inset: 0;
    width: 100%;
    height: var(--header-height);
    background-color: #DCE3EA;
  }

  .content {
    position: absolute;
    top: calc(0.4 * var(--header-height));
    inset-inline: 0;
    width: calc(100% - (var(--content-margin-inline) * 2));
    max-width: 1280px;
    margin-inline: var(--content-margin-inline);
  }

  .grid {
    position: absolute;
    top: calc(0.85 * var(--header-height));
    inset-inline: 0;
    width: calc(100% - ((var(--content-margin-inline) * 2) + 9.2vw));
    max-width: 1128px;
    margin-inline: auto;
    padding-bottom: calc(0.3 * var(--header-height));
  }
}
</style>