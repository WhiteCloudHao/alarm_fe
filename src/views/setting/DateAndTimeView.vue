<template>
    <div class="">
      <DefaultLayout> 
          <template v-slot:header>
          <Header :withBackBtn="true"></Header>
        </template>
        <DateAndTimeBody/>
      </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Header from '@/components/header/Header.vue';
import DateAndTimeBody from '@/views/setting/components/DateAndTimeBody.vue';
  
export default {
    name: 'DateAndTimeView',
    components: {
        DefaultLayout,
        Header,
        DateAndTimeBody
    }
}
</script>

<style>
  
</style>