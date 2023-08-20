<template>
  <div>
    <div
      :class="[isSidebar ? 'translate-x-0' : 'translate-x-[-100%]']"
      class="w-screen h-screen fixed top-0 left-0 z-[99] transition duration-300 ease-in-out"
      @click="fnToggleSidebar"
    >
      <div
        ref="sidebar"
        class="py-8 h-screen bg-gradient-to-br from-[#E2E0D4] to-[#F6E6E2] w-[80%] sm:w-[20%] flex flex-col"
      >
        <!-- Menu Header: Avatar, Setting Btn -->
        <div class="flex items-center mb-8 px-4">
          <!-- Avatar -->
          <div
            class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-stone-400 rounded-full"
          >
            <span class="font-medium text-gray-600">A</span>
          </div>
          <h3 class="font-medium px-4 flex-1 text-left whitespace-nowrap overflow-hidden text-ellipsis">
            Nguyen Van A
          </h3>
          <button class="">
            <svgicon name="icon_setting" width="24" height="24"></svgicon>
          </button>
        </div>
        <!-- Category list -->
        <div id="sidebar-category" class="flex flex-col gap-3 flex-1 overflow-y-auto px-4">
          <CategoryItem to="/" :title="categoryList[0].title" :count="categoryList[0].count"></CategoryItem>
          <CategorySubMenu :title="tagData.name" :menuList="tagData.children" />
          <CategoryItem
            to="/to"
            v-for="category in categoryList"
            :title="category.title"
            :count="category.count"
            :key="category.id + 10"
          ></CategoryItem>
        </div>
        <!-- Add Category -->
        <div class="mt-10 flex items-center p-3 px-4">
          <svgicon name="icon_add" width="24" height="24"></svgicon>
          <span class="font-medium pl-3">Add Category</span>
        </div>
      </div>
    </div>
    <!-- Overlay -->
    <div v-show="isSidebar" class="fixed top-0 left-0 w-full h-full bg-overlay z-[51]"></div>
  </div>
</template>

<script>
import CategoryItem from './components/CategoryItem.vue';
import CategorySubMenu from './components/CategorySubMenu.vue';
import '@/icons/icon_setting';
import '@/icons/icon_calendar';
import '@/icons/icon_add';
import { mapMutations } from 'vuex';
export default {
  components: {
    CategoryItem,
    CategorySubMenu,
  },
  data() {
    return {
      categoryList: [
        {
          id: 1,
          title: 'Today',
          count: 10,
        },
        {
          id: 2,
          title: 'Today',
          count: 6,
        },
        {
          id: 3,
          title: 'Today',
          count: 6,
        },
      ],
      tagData: {
        name: 'Tag',
        children: [
          {
            id: 1,
            title: 'Tag1',
            count: 10,
          },
          {
            id: 2,
            title: 'Tag2',
            count: 6,
          },
          {
            id: 3,
            title: 'Tag3',
            count: 6,
          },
        ],
      },
    };
  },
  computed: {
    isSidebar() {
      return this.$store.state.app.isSidebar;
    },
  },
  methods: {
    ...mapMutations('app', ['toggleSideState', 'setSideState']),
    fnToggleSidebar(e) {
      if (!(this.$refs.sidebar === e.target || this.$refs.sidebar.contains(e.target))) {
        this.setSideState(false);
      }
    },
  },
  mounted() {},
};
</script>

<style>
#sidebar-category::-webkit-scrollbar {
  /* position: relative; */
  /* border-right: 4px solid transparent; */
  /* right: 4px; */
}
</style>
