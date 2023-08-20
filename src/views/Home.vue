<template>
  <!-- <div class="home"> -->
  <DefaultLayout>
    <template v-slot:header>
      <Header></Header>
    </template>

    <!-- Header of Page -->
    <div id="header-section">
      <TaskSearch></TaskSearch>
      <TaskSelection :selectionList="selectionList"></TaskSelection>
    </div>
    <!-- Task list -->
    <ScrollableWrapper>
      <TaskCard v-for="task in taskList" :taskData="task" :key="task.id" class="col-span-4" />
    </ScrollableWrapper>
  </DefaultLayout>
  <!-- </div> -->
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import ScrollableWrapper from '@/components/ScrollableWrapper.vue';
import Header from '@/components/header/Header.vue';
import TaskSearch from '@/components/search/TaskSearch.vue';
import TaskSelection from '@/components/TaskSelection.vue';
import TaskCard from '@/components/TaskCard.vue';
export default {
  name: 'Home',
  components: {
    DefaultLayout,
    ScrollableWrapper,
    Header,
    TaskSearch,
    TaskSelection,
    TaskCard,
  },
  data() {
    return {
      selectionList: [
        { id: 1, label: 'All' },
        { id: 2, label: "Today's Task" },
        { id: 3, label: 'Completed' },
        { id: 4, label: 'Deleted' },
      ],
      taskList: [
        {
          id: 1,
          title: 'Drink Water',
          description: 'For good health',
          categoryList: 'Personal',
          tags: [
            {
              id: 1,
              name: 'Tag 1',
            },
            {
              id: 2,
              name: 'Tag 2',
            },
          ],
        },
        {
          id: 2,
          title: 'Drink Water',
          description: 'For good health, drink at least 100ml per hours, hahahahahahaha',
          categoryList: 'Personal',
          tags: [
            {
              id: 1,
              name: 'Tag 1',
            },
            {
              id: 2,
              name: 'Tag 2 123132123123123',
            },
            {
              id: 3,
              name: 'Tag 3 tag 3',
            },
          ],
        },
        {
          id: 3,
          title: 'Drink Water',
          description: 'For good health',
          categoryList: 'Personal',
          tags: [
            {
              id: 1,
              name: 'Tag 1',
            },
            {
              id: 2,
              name: 'Tag 2',
            },
          ],
        },
        {
          id: 4,
          title: 'Drink Water',
          description: 'For good health',
          categoryList: 'Personal',
          tags: [
            {
              id: 1,
              name: 'Tag 1',
            },
            {
              id: 2,
              name: 'Tag 2',
            },
          ],
        },
        {
          id: 5,
          title: 'Drink Water',
          description: 'For good health',
          categoryList: 'Personal',
          tags: [
            {
              id: 1,
              name: 'Tag 1',
            },
            {
              id: 2,
              name: 'Tag 2',
            },
          ],
        },
        {
          id: 6,
          title: 'Drink Water',
          description: 'For good health',
          categoryList: 'Personal',
          tags: [
            {
              id: 1,
              name: 'Tag 1',
            },
            {
              id: 2,
              name: 'Tag 2',
            },
          ],
        },
      ],

      homeWrapperHeight: 0,
    };
  },
  methods: {},
  mounted() {},
};
</script>
