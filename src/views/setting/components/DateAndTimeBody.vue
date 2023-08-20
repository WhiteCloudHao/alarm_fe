<template>
    <div class="">
       <div class="bg-white mt-10 p-2 flex items-center">
          <p class="text-base items-center flex"><span>Time Format</span></p>
             <div class="flex items-center pointer-events-none ml-auto">
                <span class="text-slate-500">{{ dateAndTimeType }}</span>
                <!-- <svgicon name="icon_arrow_down" width="16" height="16" color="#A6A6A6" class="ml-2" /> -->
             </div>
       </div>
    </div>
 </template>
 
 <script>
//  import '@/icons/icon_arrow_down';
 export default {
    name: 'DateAndTimeBody',
    data() {
       return {
        dateAndTimeType: '24 Hour',
       }
    }
 }
 </script>
 
 <style>
 
 </style>