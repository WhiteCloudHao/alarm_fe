<template>
  <div>
    <label class="block mb-2 text-sm font-medium"
      >{{ label }}
      <input
        :type="type"
        :value="value"
        class="bg-gray-50 border border-gray-300 text-sm rounded-md ml-2"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
    placeholder: {
      type: String,
    },
  },
};
</script>

<style></style>
