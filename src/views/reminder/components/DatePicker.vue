<template>
    <div>
      <!-- <v-calendar :attributes="calendarAttr" is-expanded locale="en" @dayclick="onDayClick"></v-calendar> -->
      <v-date-picker
        v-model="date"
        mode="date"
        :attributes="calendarAttr"
        is-expanded
        locale="en"
        @dayclick="onDayClick"
        is-required
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      dailyInterval: Number,
      weeklyInterval: Number,
      monthlyInterval: Number,
      yearlyInterval: Number,
      dateProp: Object,
    },
    data() {
      return {
        date: new Date(),
        calendarAttr: [
          {
            highlight: {
              contentClass: 'border-2 rounded border-[#E7CAC2] text-[#000000]',
              // style: {
              //   background: '#F2E1DC',
              // },
            },
            dates: new Date()
          },
          // {
          //   highlight: true,
          //   dates: {
          //       start: new Date(),
          //       // weekdays: [1,2,3,4,5,6,7] 
          //       monthlyInterval: 2
          //   },
          // },
        ],
      };
    },
    methods: {
      onDayClick() {
        console.log(this.date);
        this.$emit('onDayClick', this.date);
      },
    },
    watch: {
      // dailyInterval() {
      //   console.log('kkk');
      //   // console.log('okkk', this.dailyInterval)
      // },
    },
    mounted(){
      console.log('mounted');
      if(!(Object.keys(this.dateProp).length === 0 && this.dateProp.constructor === Object)) {
        console.log(this.dateProp)
        // this.dateProp.start = this.date
        this.calendarAttr[0].dates = this.dateProp
        this.calendarAttr[0].dates.start = this.date
      }
    }
  };
  </script>
  
  <style></style>
  