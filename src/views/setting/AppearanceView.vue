<template>
    <div class="">
      <DefaultLayout> 
          <template v-slot:header>
          <Header :withBackBtn="true"></Header>
        </template>
        <AppearanceBody />
      </DefaultLayout>
    </div>
  </template>
  
  <script>
  import DefaultLayout from '@/components/layout/DefaultLayout.vue';
  import Header from '@/components/header/Header.vue';
  import AppearanceBody from '@/views/setting/components/AppearanceBody.vue';
  
  export default {
      name: 'AppearanceView',
      components: {
          DefaultLayout,
          Header,
          AppearanceBody
      }
  }
  </script>
  <style>
  
  </style>