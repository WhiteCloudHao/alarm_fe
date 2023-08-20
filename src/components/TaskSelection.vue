<template>
  <div class="pt-2 pb-3">
    <ul class="flex w-full justify-between items-center">
      <li v-for="item in selectionList" :key="item.id">
        <span
          :class="[currentActive === item ? 'underline font-medium' : 'text-grey']"
          class="text-sm cursor-pointer"
          @click="selectItem(item)"
          >{{ item.label }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selectionList: {
      type: Array,
    },
  },
  data() {
    return {
      currentActive: this.selectionList[0],
    };
  },
  methods: {
    selectItem(item) {
      this.currentActive = item;
    },
  },
};
</script>

<style></style>
