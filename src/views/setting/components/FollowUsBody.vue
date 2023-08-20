<template>
    <div class="">
       <div class="bg-white mt-10 p-2 flex items-center" @click="redirectFb">
           <div class="flex items-center pointer-events-none">
              <svgicon name="icon_setting_facebook" width="20" height="20" color="#000000" class="mr-2" />
           </div>
          <p class="text-base items-center flex"><span>Facebook</span></p>
       </div>
    </div>
 </template>
 
 <script>

import '@/icons/icon_setting_facebook';
 export default {
    name: 'FollowUsBody',
    data() {
       return {

       }
    },
    methods: {
        redirectFb() {
            // 
        },
    }
 }
 </script>
 
 <style>
 
 </style>