<template>
  <div>
    <transition name="slide-up">
      <div v-show="isShow" class="fixed h-[480px] left-0 right-0 bottom-0 z-[1000] bg-bgLayout py-4 rounded-t-lg">
        <!-- Header -->
        <!-- <div class="flex justify-between items-center mb-2">
          <div class="text-sm" @click="fnCloseModal">Cancel</div>
          <div class="font-medium">Create Task</div>
          <div class="text-sm">Done</div>
        </div> -->

        <!-- Form -->
        <div>
          <div class="text-left px-5">
            <input
              type="text"
              ref="taskInput"
              v-model="taskData.title"
              class="bg-transparent text-lg"
              placeholder="New task"
            />
            <input
              type="text"
              v-model="taskData.description"
              class="focus:border-none border-none bg-transparent text-sm"
              placeholder="Description"
            />
          </div>

          <div class="flex border-b-[1px] border-gray-300 justify-between items-center py-4 px-5">
            <div class="flex gap-2">
              <button class="flex gap-1 items-center" @click="fnSetTabPicker(tabList.DATE)">
                <svgicon name="icon_calendar_bold" width="20" height="20" class="fill-secondary"> </svgicon>
                <span v-if="!taskData.startDate" class="text-secondary">Today</span>
                <span v-else class="text-secondary">{{ dateLabel }}</span>
              </button>
              <button @click="fnSetTabPicker(tabList.PRIORITY)">
                <svgicon ref="icon_flag" name="icon_flag_bold" width="20" height="20" class="fill-neutral"> </svgicon>
              </button>
              <button @click="fnSetTabPicker(tabList.TAG)">
                <svgicon
                  name="icon_tag"
                  width="20"
                  height="20"
                  class="fill-neutral"
                  :class="{ 'fill-secondary': taskData.tags.length }"
                >
                </svgicon>
              </button>
              <button @click="fnSetTabPicker(tabList.CATEGORY)" class="flex items-center">
                <svgicon
                  name="icon_menu"
                  width="20"
                  height="20"
                  class="fill-neutral"
                  :class="{ 'fill-secondary': taskData.category }"
                >
                </svgicon>
                <span class="pl-1 text-grey" :class="{ 'text-secondary': taskData.category }">Inbox</span>
              </button>
            </div>
            <button class="flex items-center gap-1 bg-secondary rounded-full px-2 py-1" @click="fnAddTask">
              <span class="text-bgLayout">Add</span>
              <svgicon name="icon_arrow_right_broken_bold" width="20" height="20" class="fill-bgLayout"></svgicon>
            </button>
          </div>
          <!-- Modal DatePicker -->
          <transition name="scale-up">
            <div
              v-show="tabPicker === tabList.DATE && !dateOptionSelected"
              class="fixed top-0 left-0 right-0 bottom-0 mx-4 my-10 bg-bgLayout rounded-md"
            >
              <!-- Modal DatePicker Header -->
              <h3 class="relative py-2 px-4 text-left">
                <button class="text-red-500 text-sm text-left">Clear</button>
                <!-- <button class="text-red-500 text-xs absolute left-3 top-[14px] flex items-center">Clear</button>
                    <div class="flex justify-center gap-3 items-center">
                      <button class="text-xs text-neutral rounded-full px-2 py-1">Date</button>
                      <button class="text-xs text-neutral rounded-full px-2 py-1">Duration</button>
                    </div> -->
              </h3>
              <div>
                <DatePicker @onDayClick="fnPickDay" />
                <div class="flex flex-col">
                  <DateOption label="Time" :value="taskData.time" :isClick="false">
                    <template v-slot:icon>
                      <svgicon name="icon_timer_bold" width="24" height="24" class="fill-neutral"></svgicon>
                    </template>
                  </DateOption>
                  <div class="px-4 pb-2">
                    <input type="time" class="bg-bgLayout" v-model="taskData.time" @change="fnTestTime()" />
                  </div>
                  <DateOption
                    label="Reminder"
                    :value="reminderSelectLabel"
                    @click="fnSelectDateOption(dateOptionList.REMINDER)"
                  >
                    <template v-slot:icon>
                      <svgicon name="icon_clock_bold" width="24" height="24" class="fill-neutral"></svgicon>
                    </template>
                  </DateOption>
                  <DateOption label="Repeat" value="None" @click="fnSelectDateOption(dateOptionList.REPEAT)">
                    <template v-slot:icon>
                      <svgicon name="icon_repeat" width="24" height="24" class="fill-neutral"></svgicon>
                    </template>
                  </DateOption>
                  <DateOption label="Repeat End" value="None">
                    <template v-slot:icon>
                      <svgicon name="icon_repeat" width="24" height="24" class="fill-neutral"></svgicon>
                    </template>
                  </DateOption>
                </div>
              </div>
              <!-- Modal DatePicker Action -->
              <div class="flex absolute bottom-0 w-full border-t-[1px] border-gray-300">
                <button @click="fnCloseTabPicker" class="flex-1 py-3">Cancel</button>
                <button @click="fnCloseTabPicker" class="flex-1 py-3">Done</button>
              </div>
            </div>
          </transition>
          <!-- Modal DatePicker Overlay -->
          <div
            v-show="tabPicker === tabList.DATE"
            class="fixed top-0 left-0 w-full h-full bg-overlay z-[-1]"
            @click="fnCloseTabPicker"
          ></div>
          <!-- Modal DatePicker -->

          <div class="mt-4 px-5" v-show="tabPicker === tabList.PRIORITY">
            <PriorityPicker @onSelect="fnSelectPriority" />
          </div>
          <div v-show="tabPicker === tabList.TAG">
            <TagPicker @select-tags="fnSelectTags" />
          </div>
          <div v-show="tabPicker === tabList.CATEGORY">
            <CategoryPicker @select-category="fnSelectCategory" />
          </div>
        </div>
      </div>
    </transition>

    <ReminderPickerModal
      :show="dateOptionSelected === dateOptionList.REMINDER"
      @closeModal="fnSelectDateOption(null)"
      @addReminder="fnAddReminder"
      :isTime="!!taskData.time"
    />

    <RepeatPickerModal
      :show="dateOptionSelected === dateOptionList.REPEAT"
      :date="taskData.startDate"
      @closeModal="fnSelectDateOption(null)"
      @addRepeat="fnAddRepeat"
    />

    <!-- Overlay -->
    <div v-show="isShow" class="fixed top-0 left-0 w-full h-full bg-overlay z-[999]" @click="fnCloseModal"></div>
  </div>
</template>

<script>
import '@/icons/icon_calendar_bold';
import '@/icons/icon_flag_bold';
import '@/icons/icon_tag';
import '@/icons/icon_menu';
import '@/icons/icon_timer_bold';
import '@/icons/icon_clock_bold';
import '@/icons/icon_repeat';
import '@/icons/icon_arrow_right_broken_bold';
import PriorityPicker from '@/components/picker/PriorityPicker.vue';
import TagPicker from '@/components/picker/TagPicker.vue';
import CategoryPicker from '@/components/picker/CategoryPicker.vue';
import DatePicker from '@/components/picker/DatePicker.vue';
import DateOption from './components/DateOption.vue';
import ReminderPickerModal from './ReminderPickerModal.vue';
import RepeatPickerModal from './RepeatPickerModal.vue';
import { formatDate_yyyyhhmm, compareDatesByDayMonthYear } from '@/utils/dateFormatter';

export default {
  components: {
    PriorityPicker,
    TagPicker,
    DatePicker,
    DateOption,
    ReminderPickerModal,
    RepeatPickerModal,
    CategoryPicker,
  },
  data() {
    return {
      tabPicker: null,
      tabList: {
        DATE: 0,
        PRIORITY: 1,
        TAG: 2,
        CATEGORY: 3,
      },
      dateOptionSelected: null,
      dateOptionList: {
        REMINDER: 1,
        REPEAT: 2,
        REPEAT_ENDS: 3,
      },
      taskData: {
        title: null,
        description: null,
        category: null,
        tags: [],
        repeat: {
          days: null,
          weekdays: null,
          ordinalWeekdays: null,
          weeks: null,
          months: null,
          years: null,
          dailyInterval: null,
          weeklyInterval: null,
          monthInterval: null,
          yearlyInterval: null,
        },
        secondInterval: null,
        hourInterval: null,
        startDate: new Date(),
        endDate: null,
        time: null,
        startTime: null,
        endTime: null,
        reminders: [],
        status: null,
        priority: 0,
        skip: null,
      },
      reminderSelectLabel: 'None',
    };
  },
  computed: {
    isShow() {
      return this.$store.state.app.isAddTaskModal;
    },
    dateLabel() {
      if (compareDatesByDayMonthYear(this.taskData.startDate, new Date())) return 'Today';
      return formatDate_yyyyhhmm(this.taskData.startDate);
    },
  },
  methods: {
    fnCloseModal() {
      this.$store.commit('app/setShowAddTask', false);
    },
    fnCloseTabPicker() {
      this.tabPicker = null;
    },
    fnSetTabPicker(value) {
      this.tabPicker = value;
    },
    fnSelectDateOption(value) {
      this.dateOptionSelected = value;
    },
    fnSelectPriority(value) {
      console.log(value);
      this.taskData.priority = value;

      switch (value) {
        case 1:
          this.$refs.icon_flag.$el.classList.value = 'fill-lowPriority';
          break;
        case 2:
          this.$refs.icon_flag.$el.classList.value = 'fill-mediumPriority';
          break;
        case 3:
          this.$refs.icon_flag.$el.classList.value = 'fill-highPriority';
          break;
        default:
          this.$refs.icon_flag.$el.classList.value = 'fill-neutral';
          break;
      }
    },
    fnSelectTags(value) {
      this.taskData.tags = value;
    },
    fnSelectCategory(category) {
      const value = category.id;
      this.taskData.category = value;
    },
    fnPickDay(selectDate) {
      // const date = formatDate_yyyyhhmm(selectDate);
      this.taskData.startDate = selectDate;
    },
    fnAddReminder(reminderArr) {
      console.log('Array: ', reminderArr);
      console.log(1234);
      if (reminderArr.length) {
        this.taskData.reminders = reminderArr.map(item => item.value);
        this.reminderSelectLabel = reminderArr.reduce(function (label, item, index) {
          if (index) {
            return label + ', ' + item.label;
          }
          return label + item.label;
        }, '');
      } else {
        this.reminderSelectLabel = 'None';
      }
    },
    fnAddRepeat(repeatArr) {},
    fnTestTime() {
      console.log(this.taskData.time);
    },
    fnAddTask() {
      console.log('Add Task: ', this.taskData);
    },
  },
  watch: {
    isShow: function () {
      this.$nextTick(() => {
        this.$refs.taskInput.focus();
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
input {
  border: none;
  outline: none;
  box-shadow: none;
  padding: 0;
}

input:focus {
  border: none;
  outline: none !important;
  box-shadow: none !important;
}
</style>
