<template>
  <div class="grid grid-cols-7">
    <div
      v-for="day in days"
      :key="day"
      class="col-span-1 min-h-[32px] leading-6 flex items-center justify-center"
      @click="fnSelectDay(day)"
    >
      <span
        class="text-sm font-medium leading-[28px] h-[28px] w-[28px] rounded-full"
        :class="[selectedDays.includes(day) ? 'bg-[#E7CAC2] text-white' : '']"
        >{{ day }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31,
      ],
      selectedDays: [],
    };
  },
  methods: {
    fnSelectDay(day) {
      const index = this.selectedDays.findIndex(item => item === day);
      if (index >= 0) {
        this.selectedDays.splice(index, 1);
      } else {
        this.selectedDays.push(day);
      }
    },
  },
  watch: {
    selectedDays: function (value) {
      this.$emit('selectDay', value);
    },
  },
};
</script>

<style></style>
