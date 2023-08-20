<template>
  <DefaultLayout>
    <template v-slot:header>
      <Header></Header>
    </template>

    <!-- Page Content -->
    <div class="calendar-view">
      <!-- Calendar -->
      <v-calendar :attributes="calendarAttr" locale="en" is-expanded />
      <TaskSelection :selectionList="selectionList" />
      <!-- Task List -->
      <ScrollableWrapper>
        <TaskCard v-for="task in taskList" :taskData="task" :key="task.id" class="col-span-4" />
      </ScrollableWrapper>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Header from '@/components/header/Header.vue';
import TaskSelection from '@/components/TaskSelection.vue';
import ScrollableWrapper from '@/components/ScrollableWrapper.vue';
import TaskCard from '@/components/TaskCard.vue';

export default {
  components: {
    DefaultLayout,
    Header,
    TaskSelection,
    ScrollableWrapper,
    TaskCard,
  },
  data() {
    return {
      calendarAttr: [
        {
          dot: {
            style: {
              backgroundColor: 'red',
            },
          },
          highlight: {
            borderColor: '#8c66ff',
            borderWidth: '2px',
            style: {
              background: '#E7CAC2',
            },
            contentStyle: {
              color: 'white',
            },
          },
          dates: new Date(),
        },
      ],
      selectionList: [
        { id: 1, label: 'All' },
        { id: 2, label: 'Task for this day' },
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
    };
  },
};
</script>

<style>
.calendar-view .vc-pane-container {
  background-color: #e2e0d4;
}

.calendar-view .vc-weekday {
  color: #8f8f8f !important;
  /* font-weight: 400 !important; */
}

.calendar-view .vc-day-content.vc-focusable.is-disabled {
  color: #cccccc;
}
</style>
