<template>
  <div class="image">
    <div class="texts">
      <p></p>
      <p></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  position: relative;
  display: grid;
  border-radius: 8px;
  padding-left: 20px;
  padding-bottom: 24px;
  background-color: #F6F6F6;
  animation: image-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  .texts {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    row-gap: 8px;

    p {
      height: 16px;
      background-color: #E7E7E7;
      animation: text-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    p:first-of-type {
      width: 50%;
    }

    p:last-of-type {
      width: 30%;
    }
  }
}

@keyframes image-pulse {
  0% {
    background-color: #F6F6F6;
  }
  50% {
    background-color: #F2F2F2;
  }
  100% {
    background-color: #F6F6F6;
  }
}

@keyframes text-pulse {
  50% {
    opacity: 0.5;
  }
}
</style>