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
    repeatDates: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      date: new Date(),

      selectAttribute: {
        highlight: {
          style: {
            background: '#E7CAC2',
          },
          contentStyle: {
            color: '#ffffff',
          },
        },
      },
    };
  },
  methods: {
    onDayClick() {
      console.log(this.date);
      this.$emit('onDayClick', this.date);
    },
  },
  computed: {
    calendarAttr() {
      return [
        {
          highlight: {
            contentClass: 'border-2 rounded border-[#E7CAC2] text-[#000000]',
          },
          dates: new Date(),
        },
        {
          highlight: {
            // style: {
            //   background: '#F2E1DC',
            // },
            class: 'vc-highligh-custom',
            contentStyle: {
              color: '#ffffff',
            },
          },
          dates: this.repeatDates,
          // dates: ['Fri Jul 14 2023 16:15:59 GMT+0700 (Indochina Time)', '2023-07-11T15:25:54+07:00'],
        },
      ];
    },
  },
};
</script>

<style>
.vc-day .vc-day-layer .vc-highlight.vc-highligh-custom {
  background-color: #f2e1dc !important;
}
</style>
