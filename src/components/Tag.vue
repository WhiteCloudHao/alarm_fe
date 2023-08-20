<template>
  <span class="px-[10px] py-[2px] text-[10px] bg-secondary rounded-full whitespace-nowrap max-w-fit">{{
    tagData.name
  }}</span>
</template>

<script>
export default {
  props: {
    tagData: {
      required: true,
    },
  },
};
</script>

<style></style>
