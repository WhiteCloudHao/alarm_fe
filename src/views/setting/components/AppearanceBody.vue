<template>
   <div class="">
      <div class="bg-white mt-10 p-2 flex items-center">
         <p class="text-base items-center flex"><span>Dark mode</span></p>
         <label class="ml-auto relative  items-center cursor-pointer">
            <input @change="setTheme($event)" type="checkbox" value="" class="sr-only peer" :checked="isDarkMode">
            <div class="w-11 h-6 bg-zinc-400 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
         </label>
      </div>
   </div>
</template>

<script>

export default {
   name: 'AppearanceBody',
   data() {
      return {
         isDarkMode:  localStorage.getItem('theme')? (localStorage.getItem('theme') == 'dark'): false
      }
   },
   methods: {
      setTheme(e) {
         const theme = e.target.checked ? 'dark' : 'light'
         localStorage.setItem('theme', theme)
         // window.addEventListener("storage", (event) => {
         //    if (event.key === "theme") {
         //       const data = event.newValue
         //       console.log("Data received:", data);
         //    }
         // });
      }
   },
   mounted() {
   }  
}
</script>

<style>

</style>