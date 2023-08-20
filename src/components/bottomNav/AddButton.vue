<template>
  <div @click="handleShowAddTask">
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="32" :fill="color" />
      <line x1="31.5" y1="20" x2="31.5" y2="44" stroke="white" stroke-width="3" />
      <line x1="20" y1="32.5" x2="44" y2="32.5" stroke="white" stroke-width="3" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AddButton',
  props: {
    color: {
      default: '#959595',
    },
  },
  methods: {
    handleShowAddTask() {
      this.$store.commit('app/setShowAddTask', true);
    },
  },
};
</script>

<style></style>
