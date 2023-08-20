<template>
   <div>
      <div class="bg-zinc-300 w-full h-12 flex items-center justify-center">
            <button @click="fnSetTabPicker(tabList.DATE)" class="text-center flex-1  pl-6 text-sm">
               {{ dateTime }}
               <p class="text-sm text-gray-400">{{ this.repeatValue != 'None'?this.repeatValue: '' }}</p>
            </button>
            <button class="mr-2" data-modal-target="priopertyModal" data-modal-toggle="priopertyModal">
               <svgicon  name="icon_prioperty" width="24" height="24" :color="priopertyColor"  />
            </button>
      </div>
      <div class="mt-4 mb-1">
         <input name="title" v-model="taskData.title" type="text" class="border-0 bg-bgLayout block w-full px-0 py-2.5 focus:border-bgLayout focus:ring-bgLayout " placeholder="What would you like to do?" />
      </div>
      <div class="my-1">
         <textarea name="description" v-model="taskData.description" type="text" class="border-0 bg-bgLayout block w-full px-0 py-2.5 focus:border-bgLayout focus:ring-bgLayout " placeholder="Description" />
      </div>
      <div class="my-1">
         <input name="place" v-model="taskData.place" type="text" class="border-0 bg-bgLayout block w-full px-0 py-2.5 focus:border-bgLayout focus:ring-bgLayout " placeholder="Where would you like to do?" />
      </div>
      <div class="my-1">
         <img class="w-20" alt="Chose image" @click="inputImageClick" :src="taskData.img" :key="imgKey"/>
         <input @change="setImg" id="inputImg" name="place" type="file" class="hidden border-0 bg-bgLayout w-full px-0 py-2.5 focus:border-bgLayout focus:ring-bgLayout " placeholder="Where would you like to do?" />
      </div>
      <div class="flex  gap-1 flex-wrap mt-4 mb-5" @click="handleShowUpdateTask">
         <div @click="handleShowUpdateTask" class="cursor-pointer ">
         <svgicon name="icon_tag" width="20" height="20" class="fill-secondary"></svgicon>
      </div>
          <Tag class="" v-for="tag in taskData.tags" :tagData="tag" :key="tag.id" />
      </div>
      <button @click="save" type="submit" class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
      
    
      <!-- modal priopirty -->
      <div id="priopertyModal" data-modal-placement="top-right" tabindex="-1" class="fixed top-20 left-0 right-2 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
         <div class="relative w-3/5 max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button type="button" class="absolute top-0 right-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="priopertyModal">
                     <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                     <span class="sr-only">Close modal</span>
                  </button>
                  <button class="p-2 flex pt-4  w-full" @click="selectPrioperty('#EB0831')" data-modal-hide="priopertyModal">
                        <svgicon  name="icon_prioperty" width="24" height="24" color="#EB0831"  />
                        <p class="ml-2 text-red-500">High Priority</p>
                  </button>
                  <button class="p-2 flex w-full" @click="selectPrioperty('#eab308')" data-modal-hide="priopertyModal">
                        <svgicon  name="icon_prioperty" width="24" height="24" color="#eab308"  />
                        <p class="ml-2 text-yellow-500">Medium Priority</p>
                  </button>
                  <button class="p-2 flex w-full" @click="selectPrioperty('#0ea5e9')" data-modal-hide="priopertyModal">
                        <svgicon  name="icon_prioperty" width="24" height="24" color="#0ea5e9"  />
                        <p class="ml-2 text-sky-500">Low Priority</p>
                  </button>
                  <button class="p-2 flex pb-4 w-full" @click="selectPrioperty('#6b7280')" data-modal-hide="priopertyModal">
                        <svgicon  name="icon_prioperty" width="24" height="24" color="#6b7280"  />
                        <p class="ml-2 text-gray-500">Not important</p>
                  </button>
            </div>
         </div>
      </div>
      <!-- modal DatePicker -->
      <div class="">
         <transition name="scale-up">
            <div
               v-show="tabPicker === tabList.DATE && !dateOptionSelected"
               class="fixed z-[1001]  top-0 left-0 right-0 bottom-0 mx-4 my-10 bg-bgLayout rounded-md"
            >
               <!-- Modal DatePicker Header -->
               <h3 class="relative py-2 px-4 text-left">
                  <button @click="fnResetModalDateTime" class="text-red-500 text-sm text-left">Clear</button>
                  <!-- <button class="text-red-500 text-xs absolute left-3 top-[14px] flex items-center">Clear</button>
               <div class="flex justify-center gap-3 items-center">
                  <button class="text-xs text-neutral rounded-full px-2 py-1">Date</button>
                  <button class="text-xs text-neutral rounded-full px-2 py-1">Duration</button>
               </div> -->
               </h3>
               <div>
                  <DatePicker @onDayClick = "handleSetDate($event)" :dateProp="dateProp" :key="datePickerKey"/>
                  <div class="flex flex-col">
                     <DateOption :value="taskData.time" label="Time" :isClick="false">
                        <template v-slot:icon>
                           <svgicon name="icon_timer_bold" width="24" height="24" class="fill-neutral"></svgicon>
                        </template>
                     </DateOption>
                     <div class="py-2 px-4">
                        <input v-model="taskData.time" @change="setTime($event)" type="time" class="bg-bgLayout" />
                     </div>
                     <DateOption label="Reminder" :value="reminderSelectLabel" @click="fnSelectDateOption(dateOptionList.REMINDER)">
                        <template v-slot:icon>
                           <svgicon name="icon_clock_bold" width="24" height="24" class="fill-neutral"></svgicon>
                        </template>
                     </DateOption>
                     <DateOption label="Repeat" :value="repeatSelectLabel" @click="fnSelectDateOption(dateOptionList.REPEAT)">
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
                     <button @click="fnCloseModalDateTime" class="flex-1 py-3">Cancel</button>
                     <button class="flex-1 py-3">Done</button>
                  </div>
               </div>
         </transition>
         <!-- Modal DatePicker Overlay -->
         <div
            v-show="tabPicker === tabList.DATE"
            class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-[999]"
            @click="() => {
               tabPicker = null;
            }"
         ></div>
         <ReminderPickerModal
            :show="dateOptionSelected === dateOptionList.REMINDER"
            :isTime="!!taskData.time"
            @closeModal="fnSelectDateOption(null)"
            @add:reminder:time="handleSetRemider($event)"
         />
         <RepeatPickerModal @set:repeat:time="handleSetRepeat($event)" :show="dateOptionSelected === dateOptionList.REPEAT" @closeModal="fnSelectDateOption(null)" />
      </div>
</div>
</template>

<script>
import '@/icons/icon_prioperty';
import '@/icons/icon_next';
import '@/icons/icon_add';
import '@/icons/icon_previous';
import Tag from '@/components/Tag.vue';
import '@/icons/icon_calendar_bold';
import '@/icons/icon_flag_bold';
import '@/icons/icon_tag';
import '@/icons/icon_menu';
import '@/icons/icon_timer_bold';
import '@/icons/icon_clock_bold';
import '@/icons/icon_repeat';
import ReminderPickerModal from '@/views/reminder/components/ReminderPickerModal.vue';
import RepeatPickerModal from '@/views/reminder/components/RepeatPickerModal.vue';
import DatePicker from '@/views/reminder/components/DatePicker.vue';
import DateOption from '@/components/modal/components/DateOption.vue';
import moment from 'moment';
export default {
    components: {
      Tag,
      DatePicker,
      ReminderPickerModal,
      RepeatPickerModal,
      DateOption,
      // ModalCustom,
    },
   //  props: ['taskDataInfor'],
    data() {
      return {
         priopertyColor: '#EB0831', 
         imgKey: 0,
         taskData: {
            title: null,
            description: null,
            place: null,
            img: null,
            category: null,
            tags: [],
            dayInterval: null,
            weekInterval: null,
            monthInterval: null,
            secondInterval: null,
            hourInterval: null,
            startDate: null,
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
         tabPicker: null,
         tabList: {
            DATE: 0,
         },
         dateOptionSelected: null,
         dateOptionList: {
            REMINDER: 1,
            REPEAT: 2,
            REPEAT_ENDS: 3,
         },
         repeatValue: 'None',
         time: '',
         date: 'Today',
         repeatSelectLabel: 'None',
         dailyInterval: null,
         weeklyInterval: null,
         monthlyInterval: null,
         yearlyInterval: null,
         datePickerKey: 0,
         dateProp: {},
      }
   },
   methods: {
      selectPrioperty(color) {
         this.priopertyColor = color
      },
      inputImageClick() {
         document.getElementById('inputImg').click()
      },
      setImg() {
         const fileInput = document.getElementById('inputImg')
         const file = fileInput.files[0];
         if (file) {
            const reader = new FileReader();
            reader.onload =  (e) =>  {
               const imageData = e.target.result;
               this.taskData.img= imageData
               this.imgKey++
            };
            reader.readAsDataURL(file);
      }
      },
      save() {
         alert('Saved reminder')
      },
      handleSetRemider(reminderArr) {
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
      handleSetRepeat(item) {
         if(item.category == 'default') {
               if(item.type == 'none') {
                  return
               }
               this.repeatSelectLabel = item.label
               this.dateProp[item.type] = item.repeateValue
               console.log('type', item.type,this.dateProp,  this.dateProp[item.type], )
               this.datePickerKey++
         }
      },
      handleShowUpdateTask() {
         this.$store.commit('app/setShowUpdateTag', true)
      },
      fnSetTabPicker(value) {
         this.tabPicker = value;
      },
      fnSelectDateOption(value) {
         this.dateOptionSelected = value;
         console.log(this.dateOptionSelected);
      },
      setTime(e) {
         console.log(e.target.value)
      },
      handleSetDate(value) {
         this.date = moment(value).format('DD/MM/YYYY')
         console.log('date', this.date)
         if(!(Object.keys(this.dateProp).length === 0 && this.dateProp.constructor === Object)) {
            this.dateProp.startDate = value
         }
      },
      fnCloseModalDateTime() {
         this.fnSetTabPicker('')
      },
      fnResetModalDateTime() {
         // this.remiderValue = 'None'
         // this.repeatValue = 'None'
         // this.date = 'Today'
         // this.time = ''
      },
   },
   watch: {
      dailyInterval() {
         console.log('fff', typeof(this.dailyInterval))
      },
   },
   mounted() {
      // console.log(this.date)
      console.log('data', this.$route.params.taskDataInfor)
      this.taskData = {...this.$route.params.taskDataInfor}
      this.taskData.img = this.taskData.img? this.taskData.img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXDw8MAAABwcHDHx8eKioqkpKS8vLzGxsatra3KysqQkJCenp6AgIB3d3dra2u3t7dZWVlMTEyysrIsLCxTU1NDQ0OUlJQhISEyMjJlZWUMDAw9PT2Dg4N0dHQYGBhGRkaaAXj3AAACVklEQVR4nO3a63KiQBBAYbATxxYQbxtNdjd5/7dMIFwEGbaA1Fo05/tpNFVzZJgBCQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICFEdFJROTRQ5jKxbvVRLF79CCmkW043XbeEeTpBxo8zXs2ZA2i9RSRiQbPUw5l90wDUw2cqIyIYamBHpP9Lho+GEMNNM7P8IfB/8BOg2qbcNaB/8BQg2qt3ww8J5hpkA2kkAwcj50GUdVgN3AymGkQpPW+1zMXfFeHdhror7LBuvt9GsXHzpHaaVAdCC/dw9FddnnYNU0MNXDp4WuUp6j7bCAv3jXDUIPAabo5eia9K46SS9ffDDX44nxbA7kWM2V/f5gYa+CTnwyKVeMuwjIaSL15CMNj+72LaODWt7fNTotsUG8dcq+t2bCEBpq0bqC2dhA2G4ho/cLN1VT3TtJkA00u57R8xQVvdw2ujdlgsYGusnGWEfRwl6B1aWmwQbEQ/v4elf7pSBCGt7cdDTYoF8K/2XftNp0JGqcEew3qhTD7rt27p8FHPRvMNbhZCN/Wge49CcIwqSJYa9BYCD+07yfpxmcsNQgax/6qJ0H4Xn7EWAM99426pfwhwlYDz0LoU1xGm2rgXQh9vu+smWoQXAY2uJhr0LMQ+uR31gw1GPVs1lZMNUj/PeIOqaUGchrV4Cp2GujrqATZZbSVBr274n5bNdJANuOJjQY8ozl6GtRm3sD9yDPb824QuHjqo/ureOYJ8p8TZKJHDwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOB/+wQBph2Iu8J1cQAAAABJRU5ErkJggg=='
   },
   computed: {
      dateTime() {
         let dateAndTime = this.time? this.date + ', '+ this.time: this.date
         return dateAndTime
      }
   }
   
}
</script>

<style>

</style>