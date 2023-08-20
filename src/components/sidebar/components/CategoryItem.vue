<template>
  <router-link :to="to" active-class="category__item--active" class="p-3 rounded">
    <div class="flex flex-row">
      <div class="pr-3">
        <div v-if="icon" v-html="icon"></div>
        <div v-else>
          <svgicon name="icon_menu" width="24" height="24"></svgicon>
        </div>
      </div>
      <div class="flex-1 text-left whitespace-nowrap text-ellipsis overflow-hidden font-medium">
        {{ title }}
      </div>
      <div class="pl-5 text-grey">
        {{ count }}
      </div>
    </div>
  </router-link>
</template>

<script>
import '@/icons/icon_menu';
import '@/icons/icon_calendar';
// import '@/icons/icon_'

export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    count: {
      required: true,
      type: Number,
    },
    to: {
      required: true,
      type: String,
    },
    icon: String,
  },
};
</script>

<style>
.category__item--active {
  background-color: #dbd8c6;
}
</style>
