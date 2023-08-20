<template>
    <div class="">
      <DefaultLayout> 
          <template v-slot:header>
          <Header :withBackBtn="true"></Header>
        </template>
        <AboutBody/>
      </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Header from '@/components/header/Header.vue';
import AboutBody from '@/views/setting/components/AboutBody.vue';
  
export default {
    name: 'AboutView',
    components: {
        DefaultLayout,
        Header,
        AboutBody
    }
}
</script>

<style>
  
</style>