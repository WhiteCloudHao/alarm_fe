<template>
    <div class="">
      <DefaultLayout> 
          <template v-slot:header>
          <Header :withBackBtn="true"></Header>
        </template>
        <SoundAndNotiFicationBody />
      </DefaultLayout>
    </div>
  </template>
  
  <script>
  import DefaultLayout from '@/components/layout/DefaultLayout.vue';
  import Header from '@/components/header/Header.vue';

import SoundAndNotiFicationBody from '@/views/setting/components/SoundAndNotiFicationBody.vue';
  
  export default {
      name: 'SoundAndNotificationView',
      components: {
          DefaultLayout,
          Header,
          SoundAndNotiFicationBody
      }
  }
  </script>
  <style>
  
  </style>