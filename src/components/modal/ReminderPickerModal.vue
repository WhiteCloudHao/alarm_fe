<template>
  <div>
    <transition name="scale-up">
      <div
        v-show="show"
        class="flex flex-col fixed top-0 left-0 right-0 bottom-0 mx-4 my-10 bg-bgLayout rounded-md z-[1001]"
      >
        <header class="relative py-3 border-b-[1px] border-gray-300">
          <svgicon name="icon_arrow-left" width="24" height="24" class="absolute" @click="fnCloseModal"></svgicon>
          <h3 class="font-medium">Reminder</h3>
        </header>
        <div class="overflow-y-scroll pb-5">
          <div class="flex flex-col">
            <div class="flex items-center w-full py-4 px-5">
              <label class="text-sm font-medium w-full text-left flex items-center">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded-full"
                  v-model="isNone"
                />
                <span class="pl-2"> None </span>
              </label>
            </div>
            <div v-if="isTime">
              <div v-for="reminder in reminderListTime" :key="'reminder_time_' + reminder.id">
                <div class="flex items-center w-full py-4 px-5">
                  <label class="text-sm font-medium w-full text-left flex items-center">
                    <input
                      type="checkbox"
                      class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded-full"
                      :value="reminder"
                      v-model="reminders"
                      @change="onSelectReminder"
                    />
                    <span class="pl-2"> {{ reminder.label }} </span>
                  </label>
                </div>
              </div>
            </div>
            <div v-else>
              <div v-for="reminder in reminderListDefault" :key="'reminder_time_default' + reminder.id">
                <div class="flex items-center w-full py-4 px-5">
                  <label class="text-sm font-medium w-full text-left flex items-center">
                    <input
                      type="checkbox"
                      class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded-full"
                      :value="reminder"
                      v-model="reminders"
                      @change="onSelectReminder"
                    />
                    <span class="pl-2"> {{ reminder.label }} </span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Custom reminder list -->
            <div v-for="(reminder, index) in customReminderList" :key="'reminder_time_custom' + index">
              <div class="flex items-center w-full py-4 px-5">
                <label class="text-sm font-medium w-full text-left flex items-center">
                  <input
                    type="checkbox"
                    class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded-full"
                    :value="reminder"
                    v-model="reminders"
                    @change="onSelectReminder"
                  />
                  <span class="pl-2"> {{ reminder.label }} </span>
                </label>
              </div>
            </div>

            <!-- Add custom button -->
            <div @click="isCustom = !isCustom" class="flex items-center w-full py-4 px-4 text-secondary cursor-pointer">
              <svgicon name="icon_add" width="24" height="24" class="fill-secondary"></svgicon>
              <span class="pl-1 font-medium">Custom</span>
            </div>

            <!-- Add custom form -->
            <div v-if="isCustom" class="px-4 flex flex-col">
              <!-- Custom reminder by time -->
              <div v-if="isTime" class="grid grid-cols-2 gap-2">
                <label class="flex justify-between items-center col-span-2">
                  <span class="text-sm pr-2 text-left min-w-10 w-10">Day</span>
                  <div class="flex-1">
                    <input
                      v-model="customDay"
                      type="number"
                      min="0"
                      class="w-full rounded text-sm min-w-0 text-center border-0 py-1"
                    />
                  </div>
                </label>
                <label class="flex justify-between items-center col-span-1">
                  <span class="text-sm pr-2 text-left min-w-10">Hour</span>
                  <div class="w-40">
                    <input
                      v-model="customHour"
                      type="number"
                      min="0"
                      class="w-full rounded text-sm min-w-0 text-center border-0 py-1"
                    />
                  </div>
                </label>
                <label class="flex justify-between items-center col-span-1">
                  <span class="text-sm pr-2 text-left min-w-10">Minute</span>
                  <div class="w-40">
                    <input
                      v-model="customMinute"
                      type="number"
                      min="0"
                      class="w-full rounded text-sm min-w-0 text-center border-0 py-1"
                    />
                  </div>
                </label>
              </div>
              <div v-else>
                <select
                  v-model="customSelect"
                  class="rounded border-0 outline-none focus:border-grey text-sm py-2 mb-2 w-full"
                >
                  <option value="day" selected>Day</option>
                  <option value="week">Week</option>
                </select>

                <!-- Custom reminder by day -->
                <div v-if="customSelect == 'day'" class="flex flex-col gap-2">
                  <label class="flex justify-between items-center">
                    <span class="text-sm pr-2 text-left">Days in advance</span>
                    <div class="w-40">
                      <input
                        type="number"
                        v-model="customDay"
                        min="0"
                        class="w-full rounded text-sm min-w-0 text-center border-0 py-1"
                      />
                    </div>
                  </label>
                  <label class="flex justify-between items-center">
                    <span class="text-sm pr-2 text-left">Remind me at</span>
                    <div class="w-40">
                      <input
                        type="text"
                        v-mask="timeMask"
                        v-model="customTime"
                        placeholder="09:00"
                        @change="fnChangeTime"
                        class="w-full rounded text-sm min-w-0 text-center border-0 py-1"
                      />
                    </div>
                  </label>
                </div>

                <!-- Custom reminder by week -->
                <div v-if="customSelect == 'week'" class="flex flex-col gap-2">
                  <label class="flex justify-between items-center">
                    <span class="text-sm pr-2 text-left">Weeks in advance</span>
                    <div class="w-40">
                      <input
                        type="number"
                        min="1"
                        v-model="customWeek"
                        class="w-full rounded text-sm min-w-0 text-center border-0 py-1"
                      />
                    </div>
                  </label>
                  <label class="flex justify-between items-center">
                    <span class="text-sm pr-2 text-left">Remind me at</span>
                    <div class="w-40">
                      <input
                        type="text"
                        v-mask="timeMask"
                        v-model="customTime"
                        placeholder="09:00"
                        @change="fnChangeTime"
                        class="w-full rounded text-sm min-w-0 text-center border-0 py-1"
                      />
                    </div>
                  </label>
                </div>
              </div>

              <div class="text-right mt-4">
                <button class="bg-secondary text-white px-2 py-1 rounded-md" @click="handleAddCustomReminder">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div v-show="show" class="fixed top-0 left-0 w-full h-full bg-overlay z-[1000]" @click="fnCloseModal"></div>
  </div>
</template>

<script>
import '@/icons/icon_arrow-left';
import '@/icons/icon_add';
import AppCheckbox from '@/components/inputs/AppCheckbox.vue';
import AppInput from '@/components/inputs/AppInput.vue';
import AppSelect from '@/components/inputs/AppSelect.vue';
import { timeMask } from '@/utils/vMaskUtils';
import { formatReminderTime, subtractTime, formatReminderDay, formatReminderWeek } from '@/utils/dateFormatter';
import { isDuplicateObjectField } from '@/utils/objectUtils';
import moment from 'moment';

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    isTime: {
      type: Boolean,
      default: false,
    },
  },
  components: { AppCheckbox, AppInput, AppSelect },
  data() {
    return {
      timeMask: timeMask,
      reminders: [],
      isNone: true,
      // List if time exist or not
      // value: ISO 8601 duration format
      reminderListTime: [
        {
          id: 0,
          label: 'On time',
          value: 'TRIGGER:-PT0M',
        },
        {
          id: 1,
          label: '5 minutes early',
          value: 'TRIGGER:-PT5M',
        },
        {
          id: 2,
          label: '30 minutes early',
          value: 'TRIGGER:-PT30M',
        },
        {
          id: 3,
          label: '1 hour early',
          value: 'TRIGGER:-PT60M',
        },
        {
          id: 4,
          label: '1 day early',
          value: 'TRIGGER:-PT144M',
        },
      ],
      reminderListDefault: [
        {
          id: 1,
          label: 'On the day (09:00)',
          value: 'TRIGGER:P0DT9H0M0S',
        },
        {
          id: 2,
          label: '1 days early (09:00)',
          value: 'TRIGGER:-P0DT15H0M0S',
        },
        {
          id: 3,
          label: '2 days early (09:00)',
          value: 'TRIGGER:-P1DT15H0M0S',
        },
        {
          id: 4,
          label: '3 days early (09:00)',
          value: 'TRIGGER:-P2DT15H0M0S',
        },
        {
          id: 5,
          label: '1 week early (09:00)',
          value: 'TRIGGER:-P6DT15H0M0S',
        },
      ],
      customReminderList: [],
      isCustom: false,
      customSelect: 'day',
      customTime: '09:00',
      customDay: 1,
      customWeek: 1,
      customHour: 0,
      customMinute: 0,
    };
  },
  watch: {
    isNone: function (isChecked) {
      if (isChecked) {
        this.reminders = [];
      }
      console.log(isChecked);
    },
    reminders: {
      deep: true,
      handler(value) {
        this.$emit('addReminder', value);
      },
    },
    isTime: function () {
      // If isTime change, reset custom field, reset reminders
      this.fnResetCustomField();
      this.reminders = [];
      this.customReminderList = [];
    },
    customSelect: function () {
      this.fnResetCustomField();
    },
    customDay: function (value) {
      if (!value) {
        this.customDay = 0;
      }
      return;
    },
    customWeek: function (value) {
      if (!value) {
        this.customWeek = 1;
      }
      return;
    },
    customHour: function (value) {
      if (!value) {
        this.customHour = 0;
      }
    },
    customMinute: function (value) {
      if (!value) {
        this.customMinute = 0;
      }
    },
    // customTime: function (value) {
    //   if (!value) {
    //     this.customTime = '09:00';
    //   }
    // },
  },
  methods: {
    fnCloseModal() {
      this.$emit('closeModal');
    },
    onSelectReminder() {
      console.log(this.reminders);
      this.isNone = false;
    },
    onSelectNone() {},
    fnChangeTime(e) {
      console.log(e.target.value);
    },
    fnAddCustomReminderTime() {
      this.customDay = parseInt(this.customDay);
      this.customHour = parseInt(this.customHour);
      this.customMinute = parseInt(this.customMinute);
      /**
       * 1. Check if newReminder is duplicate to any item in reminders (reminder selected list)
       * -> if true: return
       * -> if false: continue
       * 2. Check if newReminder is duplicate to any item in reminderListTime
       * -> if true: Add to reminders (select)
       * -> if false: continue
       * 3. Check if newReminder is duplicate to any item in reminderCustomList
       * -> if true: Add to reminders (select)
       * -> if false: Add to reminderCustomList, add to reminders (select)
       */

      let newReminder = {
        label: formatReminderTime(this.customDay, this.customHour, this.customMinute),
        value: `TRIGGER:-P${this.customDay}DT${this.customHour}H${this.customMinute}M0S`,
      };

      if (this.reminders.some(item => isDuplicateObjectField(item, newReminder, 'label'))) {
        return;
      }

      let existedReminder = this.reminderListTime.find(item => isDuplicateObjectField(item, newReminder, 'label'));

      if (existedReminder) {
        this.reminders.push(existedReminder);
        return;
      }

      existedReminder = this.customReminderList.find(item => isDuplicateObjectField(item, newReminder, 'value'));
      if (existedReminder) {
        this.reminders.push(existedReminder);
      } else {
        this.customReminderList.push(newReminder);
        this.reminders.push(newReminder);
      }
    },
    fnAddCustomReminderDayWeek() {
      let newReminder;
      if (!this.customTime) this.customTime = '09:00';

      // eg: '00:00', '09:00' -> '15:0'
      const diffTime =
        this.customDay > 0 ? subtractTime('00:00', this.customTime) : subtractTime(this.customTime, '00:00');
      const tmpHour = diffTime.split(':')[0];
      const tmpMinute = diffTime.split(':')[1];

      if (this.customSelect == 'day') {
        this.customDay = parseInt(this.customDay);
        newReminder = {
          label: formatReminderDay(this.customDay, this.customTime),
          value: this.customDay
            ? `TRIGGER:-P${this.customDay - 1}DT${tmpHour}H${tmpMinute}M0S`
            : `TRIGGER:P0DT${tmpHour}H${tmpMinute}M0S`,
        };
      } else if (this.customSelect == 'week') {
        this.customWeek = parseInt(this.customWeek);
        newReminder = {
          label: formatReminderWeek(this.customWeek, this.customTime),
          value: this.customWeek
            ? `TRIGGER:-P${this.customWeek * 7 - 1}DT${tmpHour}H${tmpMinute}M0S`
            : `TRIGGER:P0DT${tmpHour}H${tmpMinute}M0S`,
        };
      }

      /**
       * 1. Check if newReminder is duplicate to any item in reminders (reminder selected list)
       * -> if true: return
       * -> if false: continue
       * 2. Check if newReminder is duplicate to any item in reminderListDefault
       * -> if true: Add to reminders (select)
       * -> if false: continue
       * 3. Check if newReminder is duplicate to any item in reminderCustomList
       * -> if true: Add to reminders (select)
       * -> if false: Add to reminderCustomList, add to reminders (select)
       */

      if (this.reminders.some(item => isDuplicateObjectField(item, newReminder, 'label'))) {
        return;
      }

      let existedReminder = this.reminderListDefault.find(item => isDuplicateObjectField(item, newReminder, 'value'));

      if (existedReminder) {
        this.reminders.push(existedReminder);
        return;
      }

      existedReminder = this.customReminderList.find(item => isDuplicateObjectField(item, newReminder, 'value'));
      if (existedReminder) {
        this.reminders.push(existedReminder);
      } else {
        this.customReminderList.push(newReminder);
        this.reminders.push(newReminder);
      }
    },
    handleAddCustomReminder() {
      if (this.isTime) {
        this.fnAddCustomReminderTime();
      } else {
        // if (this.customSelect == 'day') {
        //   this.fnAddCustomReminderDay();
        // } else {
        //   this.fnAddCustomReminderWeek();
        // }
        this.fnAddCustomReminderDayWeek();
      }

      this.isNone = false;
    },
    fnResetCustomField() {
      this.customTime = '09:00';
      this.customDay = 1;
      this.customWeek = 1;
      this.customHour = 0;
      this.customMinute = 0;
    },
  },

  mounted() {
    console.log(this.date);
  },

  // computed: {
  //   isShow: {
  //     get() {
  //       return this.show;
  //     },
  //     set(value) {
  //       console.log(value);
  //     },
  //   },
  // },
};
</script>

<style></style>
