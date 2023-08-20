<template>
  <div class="bg-primary px-5 py-6 flex flex-col items-start rounded-lg">
    <h3 class="font-medium">{{ title }}</h3>
    <span class="text-xs text-neutral"> {{ numTaskDone }} tasks done of {{ numTask }} </span>
    <!-- Progress bar -->
    <div class="mt-6 w-full bg-[#D9D9D9] rounded-full h-2.5">
      <div class="bg-secondary h-2.5 rounded-full" :style="{ width: taskPercent + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    numTaskDone: {
      type: Number,
      default: 0,
    },
    numTask: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    taskPercent: function () {
      if (this.numTaskDone === 0) return 0;
      return (this.numTaskDone / this.numTask) * 100;
    },
  },
};
</script>

<style></style>
