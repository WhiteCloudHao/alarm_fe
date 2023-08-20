<template>
  <div @click="navigateToDetail" class="py-[10px] pl-[10px] pr-4 w-full min-h-[80px] bg-primary rounded-lg">
    <div class="flex items-center h-full">
      <!-- Check -->
      <button class="h-full">
        <svgicon name="icon_circle" width="20" height="20" color="#959595"></svgicon>
      </button>

      <!-- Task data -->
      <div class="flex flex-1 flex-col pl-3 justify-between gap-2 overflow-hidden">
        <div class="flex justify-between items-center">
          <h3 class="text-sm flex-1 text-left font-regular">{{ taskData.title }}</h3>
          <!-- <h3 class="text-sm flex-1 text-left font-regular">Hasdfsdfasfasfasdfasfasdfasdfasfasdfasfasfasd</h3> -->
          <span class="text-xs">{{ taskData.categoryList }}</span>
        </div>
        <div class="text-left">
          <div class="text-neutral text-xs text-ellipsis overflow-hidden whitespace-nowrap">
            {{ taskData.description }}
          </div>
        </div>
        <div class="text-neutral text-xs text-left">Tomorrow, At 18:00</div>
        <!-- Tag list -->
        <div class="flex flex-wrap gap-1 justify-end">
          <Tag v-for="tag in taskData.tags" :tagData="tag" :key="tag.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/icons/icon_circle';
import Tag from './Tag.vue';

export default {
  components: {
    Tag,
  },
  props: {
    taskData: {
      required: true,
      type: Object,
    },
  },
  methods: {
    navigateToDetail() {
      console.log('jjj', this.taskData)
      let _this = this
      this.$router.push({ name: 'detailRemiders', params: { taskDataInfor: _this.taskData } })
    },
  }
};
</script>

<style></style>
