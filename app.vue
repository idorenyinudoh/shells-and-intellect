<template>
  <div class="page">
    <header>
      <div class="content">
        <NuxtPage />
      </div>
    </header>
  </div>
</template>

<style lang="scss">
:root {
  --header-height: 24vh;
  --content-margin-inline: 7.5%;
}

@media screen and (min-width: 768px) {
  :root {
    --header-height: 29.4vh;
    --content-margin-inline: 11.25%;
  }
}

@media screen and (min-width: 1652px) {
  :root {
    --content-margin-inline: auto;
  }
}

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
    margin-top: calc(0.4 * var(--header-height));
    margin-inline: var(--content-margin-inline);
    max-width: 1280px;
  }
}
</style>