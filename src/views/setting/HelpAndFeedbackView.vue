<template>
    <div class="">
      <DefaultLayout> 
          <template v-slot:header>
          <Header :withBackBtn="true"></Header>
        </template>
        <HelpAndFeedBackBody/>
      </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Header from '@/components/header/Header.vue';
import HelpAndFeedBackBody from '@/views/setting/components/HelpAndFeedBackBody.vue';
  
export default {
    name: 'HelpAndFeedBackView',
    components: {
        DefaultLayout,
        Header,
        HelpAndFeedBackBody
    }
}
</script>

<style>
  
</style>