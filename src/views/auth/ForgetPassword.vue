<template>
    <div class="bg-bgLayout h-screen">
        <div id="login" class="flex  pt-12 px-11 flex-col">
            <div class="">
                <h1 class="text-3xl font-serif font-medium mb-40">ITodo</h1>
                <div class="route_auth_text mb-11 text-center px-0">
                    <span class="text-lg underline text-sky-500 underline-offset-8 decoration-black decoration-solid decoration-1">Forget password</span>
                </div>
            </div>
            <div class="grid grid-cols-1">
                <form class="mb-9" @submit.prevent="getPassword">     
                    <!-- <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label> -->
                    <div class="mb-9">
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svgicon name="icon_email" width="24" height="24" color="#A6A6A6" class="" />
                            </div>
                            <input @blur="blurField('email')" v-model="email" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" >
                        </div>
                        <div v-if="isBlur['email'] && !$v.email.required" class="text-red-500 text-left">Email field is required</div>
                        <div v-if="isBlur['email']  && !$v.email.email" class="text-red-500 text-left">Please provide valid email</div>
                    </div>
                    <button @click="getPassword" type="submit" class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get password</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import '@/icons/icon_email';
import {
        required,
        email,
        minLength,
        sameAs
    } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            email: '',
            isBlur: {
                email: false,
            },
        };
    },
    validations: {
        email: {
            required,
            email
        }
    },
    methods: {
        getPassword() {
            this.$v.$touch();
            if(this.$v.$invalid) {
                alert('Error form')
                return;
            }
            alert('success') 
        },
        blurField(field) {
            this.isBlur[field] = true
            this.$v.$touch()
        },
    },
}
</script>

<style>

</style>