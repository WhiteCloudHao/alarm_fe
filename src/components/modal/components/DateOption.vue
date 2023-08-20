<template>
  <button class="flex items-center px-4 py-2" @click="fnClick">
    <div class="flex">
      <slot name="icon"></slot>
      <span class="pl-2">{{ label }}</span>
    </div>
    <div class="flex-1 text-right pl-4 pr-2 text-ellipsis overflow-hidden whitespace-nowrap text-neutral">
      {{ currentValue }}
    </div>
    <svgicon v-if="isClick" name="icon_arrow-right" width="20" height="20" class="fill-neutral"></svgicon>
  </button>
</template>

<script>
import '@/icons/icon_arrow-right';
export default {
  props: {
    value: {
      default: 'None',
      type: String,
    },
    label: String,
    isClick: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    fnClick() {
      this.$emit('click');
    },
  },
  computed: {
    currentValue: function () {
      return this.value ? this.value : 'None';
    },
  },
};
</script>

<style></style>
