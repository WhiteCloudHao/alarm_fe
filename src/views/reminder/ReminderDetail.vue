<template>
  <div>
    <DefaultLayout>
        <template v-slot:header>
        <Header></Header>
      </template>
      <RemiderDetailBody />
    </DefaultLayout>
  </div>
</template>
<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Header from '@/components/header/Header.vue';
import RemiderDetailBody from './components/RemiderDetailBody.vue';
export default {
    name: 'RemindeDetail',
    components: {
        DefaultLayout,
        Header,
        RemiderDetailBody
    }
}
</script>
<style>

</style>