<template>
    <transition name="scale-up">
      <div v-show="show">
        <div class="fixed top-0 left-0 right-0 bottom-0 mx-4 my-10 bg-bgLayout rounded-md z-[1001] overflow-scroll">
          <header class="relative pt-2 pb-4">
            <svgicon name="icon_arrow-left" width="24" height="24" class="absolute" @click="fnCloseModal"></svgicon>
            <h3 class="font-medium">Reminder</h3>
          </header>
          <div>
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
            <div v-if="!isTime" >
              <div v-for="reminder in reminderOptionListDefault" :key="'reminder_time_default' + reminder.id" class="flex items-center w-full py-4 px-5">
                <input
                  v-model="reminderValues"
                  :id="`reminder-${reminder.id}`"
                  type="checkbox"
                  :value="reminder"
                  name="repeat"
                  class="text-secondary w-4 h-4 bg-gray-100 border-gray-300 rounded-full"
                  @change="fnSelectReminderOption(reminder)"
                />
                <label :for="`reminder-${reminder.id}`" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{
                  reminder?.label
                }}</label>
              </div>
            </div>
            <div v-else>
              <div v-for="reminder in reminderListTime" :key="'reminder_time_' + reminder.id">
                <div class="flex items-center w-full py-4 px-5">
                  <label class="text-sm font-medium w-full text-left flex items-center">
                    <input
                      type="checkbox"
                      class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded-full"
                      :value="reminder"
                      v-model="reminderValues"
                      @change="fnSelectReminderOption(reminder)"
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
                    v-model="reminderValues"
                    @change="fnSelectReminderOption(reminder)"
                  />
                  <span class="pl-2"> {{ reminder.label }} </span>
                </label>
              </div>
            </div>
              <!-- custom button  -->
              <div @click="isCustom = !isCustom" class="flex items-center py-2 px-4 text-secondary cursor-pointer">
                <svgicon name="icon_add" width="24" height="24" class="fill-secondary"></svgicon>
                <span for="custom" class="ml-2 font-medium">Custom</span>
              </div>
              <!-- Add custom form -->
              <div v-if="!isCustom" class="px-4 flex flex-col">
                <!-- Custom reminder by time -->
                <div v-if="isTime" class="grid grid-cols-2 gap-2">
                  <label class="flex justify-between items-center col-span-2">
                    <span class="text-sm pr-2 text-left min-w-10 w-10">Day</span>
                    <div class="flex-1">
                      <input type="number" v-model="customDay" min="0" class="w-full rounded text-sm min-w-0 text-center border-0 py-1" />
                    </div>
                  </label>
                  <label class="flex justify-between items-center col-span-1">
                    <span class="text-sm pr-2 text-left min-w-10">Hour</span>
                    <div class="w-40">
                      <input type="number" v-model="customHour" min="0" class="w-full rounded text-sm min-w-0 text-center border-0 py-1" />
                    </div>
                  </label>
                  <label class="flex justify-between items-center col-span-1">
                    <span class="text-sm pr-2 text-left min-w-10">Minute</span>
                    <div class="w-40">
                      <input type="number" v-model="customMinute" min="0"  class="w-full rounded text-sm min-w-0 text-center border-0 py-1" />
                    </div>
                  </label>
                </div>
                <div v-else>
                  <select
                    v-model="customSelect"
                    class="rounded border-0 outline-none focus:border-grey text-sm py-2 mb-2 w-full flex " style="max-width: 100%"
                  >
                    <option value="day" selected>Day</option>
                    <option value="week">Week</option>
                  </select>

                  <!-- Custom reminder by day -->
                  <div v-if="customSelect == 'day'" class="flex flex-col gap-2">
                    <label class="flex justify-between items-center">
                      <span class="text-sm pr-2 text-left">Days in advance</span>
                      <div class="w-40">
                        <input min="0" v-model="dateWeekCustom" type="number" class="w-full rounded text-sm min-w-0 text-center border-0 py-1" />
                      </div>
                    </label>
                    <label class="flex justify-between items-center">
                      <span class="text-sm pr-2 text-left">Remind me at</span>
                      <div class="w-40">
                        <input
                          type="text"
                          v-mask="timeMask"
                          v-model="customTime"
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
                        <input v-model="dateWeekCustom" type="text" class="w-full rounded text-sm min-w-0 text-center border-0 py-1" />
                      </div>
                    </label>
                    <label class="flex justify-between items-center">
                      <span class="text-sm pr-2 text-left">Remind me at</span>
                      <div class="w-40">
                        <input
                          type="text"
                          v-mask="timeMask"
                          v-model="customTime"
                          @change="fnChangeTime"
                          class="w-full rounded text-sm min-w-0 text-center border-0 py-1"
                        />
                      </div>
                    </label>
                  </div>
                </div>
                <div class="text-right mt-4 mb-8">
                  <button @click="handleAddCustomTime" class="bg-secondary text-white px-2 py-1 rounded-md">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-[1000]" @click="fnCloseModal"></div>
      </div>
    </transition>
  </template>
  
  <script>
  import '@/icons/icon_arrow-left';
  import '@/icons/icon_add';
  import { timeMask } from '@/utils/vMaskUtils';
  import { formatReminderTime, subtractTimeCheckDay } from '@/utils/dateFormatter';
import { isDuplicateObjectField } from '@/utils/objectUtils';
  export default {
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      isTime: {
        type: Boolean,
        default: false,
      } 
    },
    data() {
      return {
        reminderValues: [],
        reminderOptionListDefault: [
          {
            label: 'On the day (09:00)',
            id: 1,
            value: 'TRIGGER:P0DT9H0M0S',
          },
          {
            label: '1 day early (09:00)',
            id: 2,
            value: 'TRIGGER:-P0DT15H0M0S',
          },
          {
            label: '2 days early (09:00)',
            id: 3,
            value: 'TRIGGER:-P1DT15H0M0S',
          },
          {
            label: '3 days early (09:00)',
            id: 4,
            value: 'TRIGGER:-P2DT15H0M0S',
          },
          {
            label: '1 week early (09:00)',
            id: 5,
            value: 'TRIGGER:-P6DT15H0M0S',
          },
        ],
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
            value: 'TRIGGER:-PT1440M',
          },
        ],
        isCustom: false,
        customSelect: 'day',
        timeMask: timeMask,
        isNone: null,
        customTime: '09:00',
        dateWeekCustom: 0,
        customDay: 1,
        customHour: 0,
        customMinute: 0,
        customReminderList: [],
      };
    },
    methods: {
      fnCloseModal() {
        this.$emit('closeModal');
      },
      fnSelectReminderOption(value) {
        this.isNone = false;
      },
      fnChangeTime() {
        console.log('time', this.customTime);
      },
      handleRepeatCustomRemiders(reminderCustom) {
        console.log('custom', reminderCustom)
        let remiderListCheck = this.reminderOptionListDefault
        if (this.reminderValues.some(item => isDuplicateObjectField(item, reminderCustom, 'label'))) {
          console.log('lot remoderValeues rrepeat')
          return true
        }
        let RepeatRemiderCustom = remiderListCheck.find(reminder => reminder.label == reminderCustom.label)
        if(RepeatRemiderCustom) {
          console.log('lot default list')
            this.reminderValues.push({...RepeatRemiderCustom})
            return true
        }
        let existedReminder = this.customReminderList.find(item => isDuplicateObjectField(item, reminderCustom, 'value'));
        if (existedReminder) {
          this.reminderValues.push(existedReminder);
          return true
        } else {
          return false
        }
      },
      fnAddCustomReminderTime() {
      this.customDay = parseInt(this.customDay);
      this.customHour = parseInt(this.customHour);
      this.customMinute = parseInt(this.customMinute);
      let newReminder = {
        label: formatReminderTime(this.customDay, this.customHour, this.customMinute),
        value: `TRIGGER:-P${this.customDay}DT${this.customHour}H${this.customMinute}M0S`,
      };

      if (this.reminderValues.some(item => isDuplicateObjectField(item, newReminder, 'label'))) {
        return;
      }

      let existedReminder = this.reminderListTime.find(item => isDuplicateObjectField(item, newReminder, 'label'));

      if (existedReminder) {
        this.reminderValues.push(existedReminder);
        return;
      }

      existedReminder = this.customReminderList.find(item => isDuplicateObjectField(item, newReminder, 'value'));
      if (existedReminder) {
        this.reminderValues.push(existedReminder);
      } else {
        this.customReminderList.push(newReminder);
        this.reminderValues.push(newReminder);
      }
    },
    addCustom() {
        const handleLabel = (type) => {          
          if(this.dateWeekCustom == 0) {
            return `On the day (${this.customTime})`
          }
          else if(this.dateWeekCustom == 1) {
            return `${parseInt(this.dateWeekCustom)} ${type} early (${this.customTime})`
          } 
          else {
            return `${parseInt(this.dateWeekCustom)} ${type}s early (${this.customTime})`
          }
        }
        const handleValue = (type) => {
          let customerDay
          if (type == 'day') {
            customerDay = parseInt(this.dateWeekCustom)
          }
          else if(type == 'week') {
            customerDay = parseInt(this.dateWeekCustom)*7
          }
          this.dateWeekCustom = parseInt(this.dateWeekCustom)

          const diffTime = subtractTimeCheckDay('00:00', this.customTime, customerDay);
          const tmpDay = diffTime.split(':')[0];
          const tmpHour = diffTime.split(':')[1];
          const tmpMinute = diffTime.split(':')[2];
          return `TRIGGER:P${tmpDay}DT${tmpHour}H${tmpMinute}M0S`
        }
        let timeCustom = {
            id: Math.floor(Math.random() * (1000000 - 6 + 1)) + 6,
            label: handleLabel(this.customSelect),
            value: handleValue(this.customSelect)
        }
        let isRemiderCustomRepeat = this.handleRepeatCustomRemiders(timeCustom)
        if (!isRemiderCustomRepeat) {
          this.customReminderList.push(timeCustom)
          this.reminderValues.push(timeCustom)
        }
      },
      handleAddCustomTime() {
        if (this.isTime) {
          this.fnAddCustomReminderTime()
        }
        else {
          this.addCustom()
        }
      },
      fnResetCustomField() {
        this.customTime = '09:00';
        this.customDay = 1;
        this.dateWeekCustom = 0;
        this.customHour = 0;
        this.customMinute = 0;
      },
      
    },

    mounted() {
      // console.log('ok')
    },
    watch: {
      isNone: function (isChecked) {
        if (isChecked) {
          this.reminderValues = [];
        }
      },
      reminderValues: function (value) {
        this.$emit('add:reminder:time', value);
      },
      isTime(value) {
        this.reminderValues = []
        this.customReminderList = [];
        this.fnResetCustomField();
      },
      customSelect: function () {
        this.fnResetCustomField();
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
      dateWeekCustom: function (value) {
        if (!value) {
          this.customWeek = 1;
        }
        return;
      },
      customDay: function (value) {
        if (!value) {
          this.customDay = 0;
        }
        return;
      },
    },
  };
  </script>
  
  <style></style>
  