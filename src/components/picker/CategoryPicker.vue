<template>
  <div>
    <div v-for="category in categoryList" :key="category.id">
      <div
        class="flex w-full py-4 px-5"
        :class="{ 'bg-secondary/20': categorySelected === category }"
        @click="fnSelectCategory(category)"
      >
        <svgicon name="icon_menu" width="24" height="24" />
        <span class="flex-1 text-left pl-2">{{ category.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import '@/icons/icon_menu';

export default {
  data() {
    return {
      categorySelected: null,
      categoryList: [
        {
          id: 1,
          title: 'Inbox',
        },
        {
          id: 2,
          title: 'Inbox',
        },
        {
          id: 3,
          title: 'Inbox',
        },
      ],
    };
  },
  methods: {
    fnSelectCategory(category) {
      this.categorySelected = category;
      this.$emit('select-category', category);
    },
  },
};
</script>

<style></style>
