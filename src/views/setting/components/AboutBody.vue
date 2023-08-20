<template>
    <div class="">
        <div class="bg-white mt-10 p-2  items-center" >
            <div class="flex" @click="redirectWebsite">
                <div class="flex items-center pointer-events-none">
                   <svgicon name="icon_setting_about_website" width="20" height="20" color="#000000" class="mr-2" />
                </div>
               <p class="text-base items-center flex"><span>Visit ITodo.com</span></p>
            </div>
            <div class="flex mt-2 pb-1" @click="redirectAppStore">
                <div class="flex items-center pointer-events-none">
                   <svgicon name="icon_setting_rate" width="20" height="20" color="#000000" class="mr-2" />
                </div>
               <p class="text-base items-center flex"><span>Rate Us</span></p>
            </div>
       </div>
       <div class="bg-white mt-6 p-2 flex items-center" @click="redirectFb">
           <div class="flex items-center pointer-events-none">
              <svgicon name="icon_setting_facebook" width="20" height="20" color="#000000" class="mr-2" />
           </div>
          <p class="text-base items-center flex"><span>Facebook</span></p>
       </div>
    </div>
 </template>
 
 <script>
import '@/icons/icon_setting_facebook';
import '@/icons/icon_setting_about_website';
import '@/icons/icon_setting_rate';
 export default {
    name: 'AboutBody',
    data() {
       return {
       }
    },
    methods: {
        redirectFb() {
            // 
        },
        redirectWebsite() {
            // 
        },
        redirectAppStore(){

        }
    }
 }
 </script>
 
 <style>
 
 </style>