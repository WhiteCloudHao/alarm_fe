<template>
  <div class="">
    <div class="flex flex-row p-3 rounded">
      <div class="pr-3">
        <div v-if="icon" v-html="icon"></div>
        <div v-else>
          <svgicon name="icon_tag" width="24" height="24"></svgicon>
        </div>
      </div>
      <div class="flex-1 text-left whitespace-nowrap text-ellipsis overflow-hidden font-medium">
        {{ title }}
      </div>
      <!-- Button toggle show sub menu -->
      <div class="pl-5 text-right">
        <svgicon
          name="icon_arrow-left"
          width="20"
          height="20"
          class="fill-grey cursor-pointer duration-300"
          :class="{ 'rotate-[-90deg]': isShowSubMenu }"
          @click="fnToggleSubMenu"
        ></svgicon>
      </div>
    </div>

    <!-- Sub Menu List -->
    <div v-show="isShowSubMenu" class="flex flex-col gap-3 mt-1">
      <CategoryItem
        to="/abc"
        v-for="item in menuList"
        :title="item.title"
        :count="item.count"
        :key="item.id"
        class="pl-12"
      />
    </div>
  </div>
</template>

<script>
import '@/icons/icon_tag';
import '@/icons/icon_arrow-left';
import CategoryItem from './CategoryItem.vue';

export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    menuList: {
      required: true,
      type: Array,
    },
    icon: String,
  },
  components: {
    CategoryItem,
  },
  data() {
    return {
      isShowSubMenu: false,
    };
  },
  methods: {
    fnToggleSubMenu() {
      this.isShowSubMenu = !this.isShowSubMenu;
    },
  },
};
</script>

<style></style>
