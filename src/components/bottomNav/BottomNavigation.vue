<template>
  <div id="app-bottom-nav" class="fixed bottom-0 left-0 z-50 w-full h-[88px] bg-white border-gray-200">
    <div class="grid grid-cols-11 h-full px-2">
      <div class="flex items-center justify-center col-span-2">
        <button v-if="$route.path === '/'" @click="navigateTo('/')">
          <svgicon name="icon_home_bold" width="32" height="32" class="fill-secondary" />
        </button>

        <button v-else class="p-2" @click="navigateTo('/')">
          <svgicon name="icon_home" width="32" height="32" class="" />
        </button>
      </div>
      <div class="flex items-center justify-center col-span-2">
        <button v-if="$route.path.includes('/calendar')" @click="navigateTo('/calendar')">
          <svgicon name="icon_calendar_bold" width="32" height="32" class="fill-secondary" />
        </button>
        <button v-else class="p-2" @click="navigateTo('/calendar')">
          <svgicon name="icon_calendar" width="32" height="32" class="" />
        </button>
      </div>
      <div class="col-span-3 h-16 flex justify-center">
        <div class="relative top-[-50%] cursor-pointer">
          <AddButton id="app-add-btn" />
        </div>
      </div>
      <div class="flex items-center justify-center col-span-2">
        <button v-if="$route.path.includes('/stat')" @click="navigateTo('/stat')">
          <svgicon name="icon_chart_bold" width="32" height="32" class="fill-secondary" />
        </button>
        <button v-else class="p-2" @click="navigateTo('/stat')">
          <svgicon name="icon_chart" width="32" height="32" class="" />
        </button>
      </div>
      <div class="flex items-center justify-center col-span-2" @click="navigateTo('/setting')">
        <button v-if="$route.path.includes('/setting')">
          <svgicon name="icon_setting_bold" width="32" height="32" class="fill-secondary" />
        </button>
        <button v-else @click="navigateTo('/setting')" class="p-2">
          <svgicon name="icon_setting" width="32" height="32" class="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/icons/icon_home';
import '@/icons/icon_home_bold';
import '@/icons/icon_calendar';
import '@/icons/icon_calendar_bold';
import '@/icons/icon_setting';
import '@/icons/icon_setting_bold';
import '@/icons/icon_chart';
import '@/icons/icon_chart_bold';
import AddButton from './AddButton.vue';
export default {
  components: {
    AddButton,
  },
  mounted() {
    console.log('This route: ', this.$route);
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route).catch(() => {});
    },
  },
};
</script>

<style></style>
