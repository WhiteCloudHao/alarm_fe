<template>
  <div>
    <transition name="scale-up">
      <div
        v-show="show"
        class="fixed top-0 left-0 right-0 bottom-0 mx-4 my-10 bg-bgLayout rounded-md z-[1001] overflow-x-hidden"
      >
        <transition name="slide-right">
          <div v-show="!isShowCustom">
            <header class="relative py-3">
              <svgicon name="icon_arrow-left" width="24" height="24" class="absolute" @click="fnCloseModal"></svgicon>
              <h3 class="font-medium">Repeat</h3>
            </header>
            <div>
              <div class="flex flex-col">
                <div v-for="item in repeatOptionList" :key="item.id" class="flex items-center py-3 px-4">
                  <input
                    v-model="repeatValue"
                    :id="`item-${item.id}`"
                    type="radio"
                    :value="item.id"
                    name="repeat"
                    class="text-secondary w-4 h-4 bg-gray-100 border-gray-300"
                    @change="fnSelectRepeatOption(item)"
                  />
                  <label :for="`item-${item.id}`" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{
                    item?.label
                  }}</label>
                </div>
                <!-- Custom button -->
                <div class="flex items-center py-3 px-4" @click="fnShowCustom">
                  <input
                    v-model="repeatValue"
                    id="custom"
                    type="radio"
                    name="repeat"
                    class="text-secondary w-4 h-4 bg-gray-100 border-gray-300"
                  />
                  <label
                    for="custom"
                    class="flex flex-1 ml-2 justify-between items-center text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <span>Custom</span>
                    <svgicon name="icon_arrow-right" width="16" heigh="16"></svgicon>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <!-- Custom inputs -->
        <transition name="slide-left">
          <div v-show="isShowCustom" class="absolute top-0 left-0 right-0">
            <header class="py-3 w-full">
              <svgicon
                name="icon_arrow-left"
                width="24"
                height="24"
                class="absolute"
                @click="isShowCustom = false"
              ></svgicon>
              <h3 class="font-medium">Repeat Custom</h3>
            </header>
            <div class="px-4 pt-3 pb-4">
              <div class="flex items-center gap-2 whitespace-nowrap">
                <span class="text-sm pr-2">Every</span>
                <input
                  v-model="intervalNum"
                  type="number"
                  min="1"
                  class="w-full rounded text-sm min-w-0 text-center border-0 py-1"
                />
                <select
                  v-model="intervalSelect"
                  name=""
                  id=""
                  class="w-full rounded text-sm min-w-0 text-center border-0 py-1"
                >
                  <option value="day">Day</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                </select>
              </div>
              <div>
                <!-- Weekdays Select -->
                <div v-show="intervalSelect === 'week'" class="grid grid-cols-4 pt-6 gap-2">
                  <label
                    v-for="item in weekdayOptions"
                    :key="'weekday_' + item.value"
                    class="col-span-1 text-sm rounded-full py-1 text-center"
                    :class="[
                      weekdaySelected.includes(item.value) ? 'bg-secondary text-white' : 'bg-zinc-200 text-slate-600 ',
                    ]"
                  >
                    {{ item.label }}
                    <input type="checkbox" :value="item.value" v-model="weekdaySelected" class="hidden" />
                  </label>
                </div>

                <!-- Skip weekends -->
                <div
                  v-show="intervalSelect === 'day' || intervalSelect === 'week'"
                  class="flex justify-between items-center py-6"
                >
                  <span class="text-sm">Skip weekends</span>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input v-model="isSkipWeekends" type="checkbox" value="" class="sr-only peer" checked />
                    <div
                      class="w-11 h-6 bg-zinc-400 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"
                    ></div>
                  </label>
                </div>

                <!-- Month select -->
                <div v-show="intervalSelect === 'month'" class="pt-4">
                  <DayPicker @selectDay="fnSelectDay" />
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
    <div v-show="show" class="fixed top-0 left-0 w-full h-full bg-overlay z-[1000]" @click="fnCloseModal"></div>
  </div>
</template>

<script>
import DayPicker from '../picker/DayPicker.vue';
import '@/icons/icon_arrow-right';

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: () => new Date(),
    },
  },
  components: {
    DayPicker,
  },
  data() {
    return {
      repeatValue: 0,
      isShowCustom: true,

      // Object.date: data for V-calendar with Date patterns
      /** FIELDS:
       * @param days
       * @param weekdays
       * @param ordinalWeekdays
       * @param weeks
       * @param months
       * @param years
       * @param dailyInterval
       * @param weeklyInterval
       * @param monthInterval
       * @param yearlyInterval
       */

      repeatOptionList: [
        {
          label: 'None',
          id: 0,
        },
        {
          label: 'Daily',
          id: 1,
        },
        {
          label: 'Every weekday (Mon-Fri)',
          id: 2,
        },
        {
          label: 'Weekly',
          id: 3,
        },
        {
          label: 'Monthly',
          id: 4,
        },
        {
          label: 'Yearly',
          id: 5,
        },
      ],
      intervalNum: 1,
      intervalSelect: 'day',
      isSkipWeekends: false,
      repeatData: {
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
      weekdayOptions: [
        {
          label: 'Sun',
          value: 1,
        },
        {
          label: 'Mon',
          value: 2,
        },
        {
          label: 'Tue',
          value: 3,
        },
        {
          label: 'Wed',
          value: 4,
        },
        {
          label: 'Thu',
          value: 5,
        },
        {
          label: 'Fri',
          value: 6,
        },
        {
          label: 'Sat',
          value: 7,
        },
      ],
      weekdaySelected: [],
      calendarKey: 1000,
    };
  },
  methods: {
    fnCloseModal() {
      this.$emit('closeModal');
    },
    fnSelectRepeatOption(value) {
      console.log(value);
    },
    fnShowCustom() {
      console.log('Show custom');
      this.isShowCustom = true;
    },
    fnSelectDay(value) {
      console.log(value);
      this.repeatData.days = value;
    },
  },
  mounted() {
    // this.isShowCustom = false;
  },
  watch: {
    date: function (value) {
      this.weekdaySelected = [value.getDay() + 1];
    },
    repeatData: {
      deep: true,
      handler(value) {
        console.log('Repeat change');
      },
    },
  },
  computed: {},
};
</script>

<style></style>
