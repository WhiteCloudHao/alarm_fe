<template>
  <div id="app-header">
    <div class="flex justify-between items-center w-full mb-3">
      <div v-if="!withBackBtn" @click="fnToggleMenu">
        <svgicon name="icon_menu" width="24" height="24"></svgicon>
      </div>
      <div v-else class="relative left-[-4px]" @click="fnBack">
        <svgicon name="icon_arrow-left" width="24" height="24"></svgicon>
      </div>
      <div>
        <span class="font-bold" v-if="title">{{ title }}</span>
        <span class="font-bold" v-else>{{ $route.meta.title }}</span>
      </div>
      <div>
        <svgicon name="icon_sort" width="24" height="24"></svgicon>
      </div>
    </div>
  </div>
</template>

<script>
import '@/icons/icon_menu';
import '@/icons/icon_sort';
import '@/icons/icon_arrow-left';
import { mapMutations } from 'vuex';

export default {
  name: 'AppHeader',
  props: {
    title: String,
    withBackBtn: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapMutations('app', ['toggleSideState', 'setSideState']),
    fnToggleMenu() {
      this.toggleSideState();
    },
    fnBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
