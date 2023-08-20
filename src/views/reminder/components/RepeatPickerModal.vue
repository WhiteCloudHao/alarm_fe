<template>
  <div class="">
    <transition name="scale-up">
      <div v-show="show">
        <div class="fixed top-0 left-0 right-0 bottom-0 mx-4 my-10 bg-bgLayout rounded-md z-[1001] overflow-scroll">
          <transition name="slide-right">
import DayPicker from '@/components/picker/DayPicker.vue';
import DayPicker from '@/components/picker/DayPicker.vue';
          <div v-show="!isShowCustom">
            <header class="relative pt-2 pb-4">
            <svgicon name="icon_arrow-left" width="24" height="24" class="absolute" @click="fnCloseModal"></svgicon>
            <h3 class="font-medium">Repeat</h3>
          </header>
          <div>
            <div class="flex flex-col">
              <div v-for="item in repeatOptionList" :key="item.id" class="flex items-center w-full py-2 px-5">
                <input
                  v-model="repeatValue"
                  :id="`item-${item.id}`"
                  type="radio"
                  :value="item.type"
                  name="repeat"
                  class="text-secondary w-4 h-4 bg-gray-100 border-gray-300"
                  @change="fnSelectRepeatOption(item)"
                />
                <label :for="`item-${item.id}`" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{
                  item?.label
                }}</label>
              </div>
              <div @click="fnShowCustom" class="flex items-center w-full py-2 pr-4 pl-5 cursor-pointer">
                <input
                  
                  v-model="repeatValue"
                  id="custom"
                  type="radio"
                  name="repeat"
                  value="custom"
                  class="text-secondary w-4 h-4 bg-gray-100 border-gray-300"
                />
                <span for="custom" class="text-gray-900 dark:text-gray-300 ml-2 font-medium text-sm  mr-auto">Custom</span>
                <svgicon name="icon_arrow-right" width="16" heigh="16"></svgicon>
              </div>
            </div>
          </div>
          </div>
          </transition>  
           <!-- Custom modal -->
          <transition name="slide-left">
            <div v-show="isShowCustom" class="absolute top-0 left-0 right-0">
              <header class="pt-2 pb-4 w-full">
                <svgicon
                  name="icon_arrow-left"
                  width="24"
                  height="24"
                  class="absolute"
                  @click="isShowCustom = false"
                ></svgicon>
                <h3 class="font-medium">Repeat Custom</h3>
              </header>
              <div v-if="isShowCustom" class="px-4">
                <div class="flex items-center  gap-4 mb-4">
                  <span>Every</span>
                  <input min="1" max="365" type="number" class="w-1/2 rounded text-sm min-w-0 text-center border-0 py-2" v-model="tmpTime"/>
                  <select class="rounded border-0 outline-none focus:border-grey text-sm py-2  w-1/2 text-center" v-model="customSelect">
                    <option value="day" selected>Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </select>
                </div>
                <div class="" v-if="customSelect == 'day'">
                  <p class="text-left text-yellow-500 text-sm mb-3 mt-1">
                    <span class="">{{ tmpTime == 1 ? 'Every day' : `Every ${tmpTime} days` }}</span>
                  </p>
                  <div class="flex">
                      <span>Skip Weekends</span>
                    <label class="ml-auto relative items-center cursor-pointer">
                      <input type="checkbox" value="" class="sr-only peer" :checked="isSkipWeekends">
                      <div class="w-11 h-6 bg-zinc-400 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
                    </label>
                  </div>
                </div>
                <!-- modal every week -->
                <div class="" v-if="customSelect == 'week'">
                  <p class="text-left text-yellow-500 text-sm mb-5 mt-3">
                    <span class="">{{ textWeekSpan }}</span>
                  </p>
                  <div class="grid grid-cols-4 grid-rows-14px gap-2" >
                      <button @click="toggleColor(day)" v-for="day in dayInWeek" :key="day.label" :class="['px-[15px] py-[8px] text-[11px]  rounded-full whitespace-nowrap flex-1 cursor-pointer', { 'bg-stone-300': !day.selected, 'bg-secondary': day.selected }]">{{
                        day.label
                      }}</button>
                  </div>
                </div>
                <!-- modal every month -->
                <div class="" v-if="customSelect == 'month'">
                  <DayPicker @selectDay="fnSelectDay" />
                </div>
                <!-- modal every year -->
                <div class="" v-if="customSelect == 'year'">
                  <p class="text-left text-yellow-500 text-sm mb-0 mt-2">
                    <span class="">Every year on</span>
                  </p>
                  <select class="rounded border-0 outline-none focus:border-grey text-sm py-2  w-full  mr-1 mt-2" v-model="monthInYear">
                      <option :value="time.value" v-for="time in monthInYearList" :key="time.value">{{ time.label }}</option>
                  </select>
                  <div class="flex gap-1 mt-2">
                    <select class="rounded border-0 outline-none focus:border-grey text-sm py-2  w-1/2  mr-1" v-model="orderTineSelect">
                      <option :value="time.value" v-for="time in orderTimeSelectList" :key="time.value">{{ time.label }}</option>
                    </select>
                    <select class="rounded border-0 outline-none focus:border-grey text-sm py-2  w-1/2  ml-1" v-model="dayInWeekSelect">
                      <option :value="day.value" v-for="day in dayInWeekSelectList" :key="day.value">{{ day.label }}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </transition>       
        </div>
      </div>
    </transition>
    <div v-show="show" class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-[1000]" @click="fnCloseModal"></div>
  </div>
</template>
  
  <script>
  import '@/icons/icon_arrow-left';
  import '@/icons/icon_arrow-right';
  import '@/icons/icon_add';
  import DatePicker from '@/components/picker/DatePicker.vue';
  import DayPicker from '@/components/picker/DayPicker.vue';
  export default {
    components: {
    DatePicker,
    DayPicker,
},
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
    data() {
      return {
        repeatValue: 0,
  
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
            type: 'none',
            repeateValue: null,
            category: 'default',
          },
          {
            label: 'Daily',
            id: 1,
            type: 'dailyInterval',
            repeateValue: 1,
            category: 'default',
          },
          {
            label: 'Every weekday (Mon-Fri)',
            id: 2,
            type: 'dailyInterval',
            repeateValue: 1,
            category: 'default',
          },
          {
            label: 'Weekly',
            id: 3,
            type: 'weeklyInterval',
            repeateValue: 1,
            category: 'default',
          },
          {
            label: 'Monthly',
            id: 4,
            type: 'monthlyInterval',
            repeateValue: 1,
            category: 'default',
          },
          {
            label: 'Yearly',
            id: 5,
            type: 'yearlyInterval',
            repeateValue: 1,
            category: 'default',
          },
        ],
        tmpTime: 1,
        customSelect: 'day',
        isSkipWeekends: false,
        dayInWeek: [
          {
            label: 'Sun',
            selected: false,
          },
          {
            label: 'Mon',
            selected: true,
          },
          {
            label: 'Tue',
            selected: false,
          },
          {
            label: 'Wed',
            selected: false,
          },
          {
            label: 'Thu',
            selected: false,
          },
          {
            label: 'Fri',
            selected: false,
          },
          {
            label: 'Sat',
            selected: false,
          },
        ],
        selectedDay: 'Mon',
        monthRepeatType: 'each',
        orderTineSelect: 'first',
        orderTimeSelectList: [
          {
            label: 'first',
            value: 'first',
          },
          {
            label: 'second',
            value: 'second',
          },
          {
            label: 'third',
            value: 'third',
          },
          {
            label: 'fourth',
            value: 'fourth',
          },
          {
            label: 'fifth',
            value: 'fifth',
          },
          {
            label: 'last',
            value: 'last',
          },
        ],
        dayInWeekSelectList: [
        {
            label: 'Sunday',
            value: 'sunday',
          },
          {
            label: 'Monday',
            value: 'monday',
          },
          {
            label: 'Tuesday',
            value: 'tuesday',
          },
          {
            label: 'Wednesday',
            value: 'wednesday',
          },
          {
            label: 'Thursday',
            value: 'thursday',
          },
          {
            label: 'Friday',
            value: 'friday',
          },
          {
            label: 'Saturday',
            value: 'saturday',
          },
        ],
        dayInWeekSelect: 'monday',
        monthInYear: 'mar',
        monthInYearList: [
          {
            label: 'Jan',
            value: 'jan',
          },
          {
            label: 'Feb',
            value: 'feb',
          },
          {
            label: 'Mar',
            value: 'mar',
          },
          {
            label: 'Apr',
            value: 'apr',
          },
          {
            label: 'May',
            value: 'may',
          },
          {
            label: 'Jun',
            value: 'jun',
          },
          {
            label: 'Jul',
            value: 'jul',
          },
          {
            label: 'Aug',
            value: 'aug',
          },
          {
            label: 'Sep',
            value: 'sep',
          },
          {
            label: 'Oct',
            value: 'oct',
          },
          {
            label: 'Nov',
            value: 'nov',
          },
          {
            label: 'Dec',
            value: 'dec',
          },
          
        ],
        isShowCustom: false,
      };
    },
    methods: {
      fnCloseModal() {
        this.$emit('closeModal');
      },
      fnSelectRepeatOption(item) {
        if(item.category && item.category == 'default') {
           this.fnCloseModal()
        }
        this.$emit('set:repeat:time', item);
      },
      toggleColor(day) {
         const selectDayConvertArray = this.selectedDay.split(', ')
         if(selectDayConvertArray.length == 1) {
          if(day.label == selectDayConvertArray[0]) {
            return
          }
         }
         day.selected = !day.selected
         const daySelect = this.dayInWeek.filter(item => item.selected);
         this.selectedDay = daySelect.map(day => day.label).join(', ')
         console.log('select day', this.selectedDay)
      },
      setMonthRepeatType(type) {
        this.monthRepeatType = type
      },
      handleSetDate(value) {
        console.log(value)
      },
      resetField() {
        this.tmpTime = 1
        this.dayInWeekSelect= 'monday'
        this.monthInYear = 'mar'
        this.orderTineSelect = 'first'
        this.selectedDay = 'Mon'
        this.dayInWeek.forEach(function(element){
          if(element.label == 'Mon') {
            element.selected = true
          } else {
            element.selected =false
          }
        }) 
      },
      setRepeatValue() {
        document.getElementById('custom').click()
      },
      fnShowCustom() {
        this.isShowCustom = true;
        document.getElementById('custom').click()
      },
      fnSelectDay(value) {
        console.log(value);
        this.repeatData.days = value;
      },
    },
    mounted() {
      this.isShowCustom = false;
    },
  
    computed:  {
      textWeekSpan: function() {
        if(this.selectedDay.split(', ').length == 7) {
          if(this.tmpTime == 1) return 'Every day'
          else return `Every ${this.tmpTime} weeks on all day`
        }
        else {
          if(this.tmpTime == 1) return `Every week on ${this.selectedDay}`
          else return `Every ${this.tmpTime} on ${this.selectedDay}`
        }
      },
    },
    watch: {
      customSelect() {
        this.resetField()
      },
      repeatValue() {
        // console.log('repeate value', this.repeatValue)
      }
    }
  };
  </script>
  
  <style></style>
  