<template>
  <DefaultLayout>
    <template v-slot:header>
      <Header></Header>
    </template>

    <!-- Content -->
    <div>
      <TaskSelection :selectionList="selectionList" />

      <div class="flex justify-between mt-1 mb-4 mx-[-4px]">
        <svgicon class="" name="icon_arrow-left" width="20" height="20"></svgicon>
        <div class="flex-1 text-sm font-medium">Today</div>
        <svgicon name="icon_arrow-right" width="20" height="20"></svgicon>
      </div>

      <!-- Chart -->
      <BarChart class="h-[220px] w-full mb-4" />

      <ScrollableWrapper>
        <CategoryCard
          v-for="category in categoryList"
          :key="category.id"
          :title="category.title"
          :numTask="category.numTask"
          :numTaskDone="category.numTaskDone"
          class="col-span-4"
        />
      </ScrollableWrapper>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Header from '@/components/header/Header.vue';
import TaskSelection from '@/components/TaskSelection.vue';
import BarChart from '@/components/chart/BarChart.vue';
import ScrollableWrapper from '@/components/ScrollableWrapper.vue';
import CategoryCard from '@/components/CategoryCard.vue';

import '@/icons/icon_arrow-left';
import '@/icons/icon_arrow-right';

export default {
  components: {
    DefaultLayout,
    Header,
    TaskSelection,
    BarChart,
    CategoryCard,
    ScrollableWrapper,
  },
  data() {
    return {
      selectionList: [
        { id: 1, label: 'Daily' },
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' },
        { id: 4, label: 'Quarterly' },
      ],
      categoryList: [
        {
          title: 'Work',
          numTaskDone: 6,
          numTask: 10,
        },
        {
          title: 'Work',
          numTaskDone: 6,
          numTask: 10,
        },
        {
          title: 'Work',
          numTaskDone: 6,
          numTask: 10,
        },
      ],
    };
  },
};
</script>

<style></style>
