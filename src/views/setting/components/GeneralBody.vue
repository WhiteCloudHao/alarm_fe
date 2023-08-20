<template>
    <div class="">
       <div class="bg-white mt-10 p-2 flex items-center">
          <p class="text-base items-center flex"><span>Language</span></p>
             <div class="flex items-center pointer-events-none ml-auto">
                <span class="text-slate-500">{{ language }}</span>
                <!-- <svgicon name="icon_arrow_down" width="16" height="16" color="#A6A6A6" class="ml-2" /> -->
             </div>
       </div>
       <div class="bg-white mt-3 p-2 flex items-center" @click="redirectChangePassword">
          <p class="text-base items-center flex"><span>Change password</span></p>
             <div class="flex items-center pointer-events-none ml-auto">
             
                <svgicon name="icon_next" width="16" height="16" color="#A6A6A6" class="ml-2" />
             </div>
       </div>
    </div>
 </template>
 
 <script>
 import '@/icons/icon_next';
 export default {
    name: 'GeneralBody',
    data() {
       return {
        language: 'English',
       }
    },
    methods: {
      redirectChangePassword() {
         this.$router.push('/setting/change-password')
      },
    }
 }
 </script>
 
 <style>
 
 </style>