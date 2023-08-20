<template>
  <div class="flex items-center w-full py-4 px-5">
    <label class="text-sm font-medium w-full text-left flex items-center">
      <input type="checkbox" class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded-full" />
      <span class="pl-2"> {{ label }} </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log(this.modelValue);
  },
};
</script>

<style></style>
