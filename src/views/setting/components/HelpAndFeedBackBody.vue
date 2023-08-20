<template>
    <div class="">
      <div class="grid grid-cols-1 mt-20">  
               <div class="mb-5 w-full">
                  <input type="text" v-model="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required>
               </div>
               <div class="mb-9">         
                  <textarea v-model="description"  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your detail descripton"></textarea>
               </div>
               <button @click="submit" type="submit" class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Send</button>
        </div>
    </div>
 </template>
 
 <script>
 export default {
    name: 'DateAndTimeBody',
    data() {
       return {
         title: '',
         description: '',
       }
    },
    methods: {
      submit() {
         console.log(this.description)
      },
    }
 }
 </script>
 
 <style>
 
 </style>