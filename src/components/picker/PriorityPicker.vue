<template>
  <div>
    <div class="grid grid-cols-2">
      <!-- High Priority -->
      <div @click="fnSelectPriority(3)" class="col-span-1 flex flex-col items-center justify-center m-4">
        <div class="p-4 bg-highPriority rounded-full mb-2">
          <svgicon class="fill-white" name="icon_flag_bold" width="24" height="24"></svgicon>
        </div>
        <span class="text-grey">High Priority</span>
      </div>

      <!-- Medium Priority -->
      <div @click="fnSelectPriority(2)" class="col-span-1 flex flex-col items-center justify-center m-4">
        <div class="p-4 bg-mediumPriority rounded-full mb-2">
          <svgicon class="fill-white" name="icon_flag_bold" width="24" height="24"></svgicon>
        </div>
        <span class="text-grey">Medium Priority</span>
      </div>

      <!-- Low Priority -->
      <div @click="fnSelectPriority(1)" class="col-span-1 flex flex-col items-center justify-center m-4">
        <div class="p-4 bg-lowPriority rounded-full mb-2">
          <svgicon class="fill-white" name="icon_flag_bold" width="24" height="24"></svgicon>
        </div>
        <span class="text-grey">Low Priority</span>
      </div>

      <!-- No Priority -->
      <div @click="fnSelectPriority(0)" class="col-span-1 flex flex-col items-center justify-center m-4">
        <div class="p-4 bg-neutral rounded-full mb-2">
          <svgicon class="fill-white" name="icon_flag_bold" width="24" height="24"></svgicon>
        </div>
        <span class="text-grey">No Priority</span>
      </div>
    </div>
  </div>
</template>

<script>
import '@/icons/icon_flag_bold';
export default {
  data() {
    return {};
  },
  methods: {
    fnSelectPriority(value) {
      this.$emit('onSelect', value);
    },
  },
};
</script>

<style></style>
