<template>
  <select>
    <option v-for="(option, index) in options" :key="'option-' + index" @click="fnSelect(option)"></option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    fnSelect(option) {
      this.$emit('change', option.value);
    },
  },
};
</script>

<style></style>
