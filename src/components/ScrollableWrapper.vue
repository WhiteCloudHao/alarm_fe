<template>
  <div
    id="scrollable-section"
    class="grid grid-cols-4 gap-3 overflow-y-auto hide-scrollbar pb-10"
    :style="{ maxHeight: sectionHeight + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionHeight: null,
    };
  },
  mounted() {
    const HomeContainer = document.getElementById('scrollable-section');
    console.log(HomeContainer.offsetTop);
    const BotNav = document.getElementById('app-bottom-nav');
    console.log(BotNav.offsetHeight);
    const AddBtn = document.getElementById('app-add-btn');
    console.log(AddBtn.offsetHeight);
    console.log(window.innerHeight);

    this.sectionHeight =
      window.innerHeight - BotNav.offsetHeight - AddBtn.offsetHeight / 2 - HomeContainer.offsetTop + 32; // padding-bottom: 10px

    console.log('Home Wrapper Height: ', this.sectionHeight);
  },
};
</script>

<style></style>
