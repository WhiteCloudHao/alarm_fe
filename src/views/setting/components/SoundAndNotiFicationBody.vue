<template>
   <div class="">
      <div class="bg-white mt-10 p-2 flex items-center">
         <p class="text-base items-center flex"><span>Reminder Ringtone</span></p>
            <div class="flex items-center pointer-events-none ml-auto">
               <span class="text-   -500">Beef</span>
               <svgicon name="icon_next" width="16" height="16" color="#A6A6A6" class="ml-2" />
            </div>
      </div>
      <div class="bg-white mt-6 p-2 flex items-center">
         <p class="text-base items-center flex"><span>Email Notification</span></p>
         <label class="ml-auto relative  items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" :checked="isDarkMode">
            <div class="w-11 h-6 bg-zinc-400 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
         </label>
      </div>
   </div>
</template>

<script>
import '@/icons/icon_next';
export default {
   name: 'AppearanceBody',
   data() {
      return {
         isDarkMode: false,
      }
   }
}
</script>

<style>

</style>