<template>
    <div class="bg-bgLayout h-screen"  >
        <div class=" relative pt-2 pl-2" @click="navigateTo('/')">
            <svgicon name="icon_close_add_modal" width="24" height="24" color="#A6A6A6" class="" />
         </div>
        <div id="login" class=" flex  pt-4 px-11 flex-col ">
            <div class="">
                <h1 class="text-3xl font-serif font-medium mb-4">ITodo</h1>
                <p class="px-6 text-lg  text-stone-600 mb-7"> By signing  you are  agreeing  our <span class="text-sky-500">Term and privacy policy</span></p>
                <div class="route_auth_text mb-11">
                    <span class="mr-7 text-lg underline text-sky-500 underline-offset-8 decoration-black decoration-solid decoration-1">Login</span>
                    <span class="mb-7 text-lg" @click="redirectRegister()">Register</span>
                </div>
            </div>
            <div class="grid grid-cols-1">
                <form class="mb-9" @submit.prevent="login">     
                    <div class="mb-9">
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svgicon name="icon_email" width="24" height="24" color="#A6A6A6" class="" />
                            </div>
                            <input @blur="blurField('email')" v-model="email" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" >
                        </div>
                        <div v-if="isBlur['email'] && !$v.email.required" class="text-red-500 text-left">Email field is required</div>
                        <div v-if="isBlur['email']  && !$v.email.email" class="text-red-500 text-left">Please provide valid email</div>
                    <!-- <p class="text-left mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, snapp!</span> Some error message.</p>                    -->
                    </div>
                    <!-- <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label> -->
                    <div class="mb-9">
                        <div class="relative w-full"  >
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svgicon name="icon_password" width="24" height="24" color="#A6A6A6" class="" />
                            </div>
                                <input   ref="password" @blur="blurField('password', $event)"  v-model="password" :type="passWordType" id="password" class="pl-10 p-2.5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-0 w-full text-lg border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" >
                                <div role="button"  @mousedown="handleMouseDown($event)" @mouseup = "handleMouseUp"  @click="toggleHidenPassword"  class="absolute inset-y-0 right-2 flex items-center pl-3">
                                    <svgicon id="icon_toggle_password"  name="icon_toggle_password" width="24" height="24" color="#A6A6A6" class="" />
                                </div>
                        </div>
                        <div v-if="isBlur['password']  && !$v.password.required" class="text-red-500 text-left">password is required</div>
                        <!-- <div v-if="isBlur['password']  && !$v.password.minLength" class="text-red-500 text-left">Please provide valid password</div> -->
                        <div v-if="isBlur['password']  &&  $v.password.required && !$v.password.valid" class="text-red-500 text-left">Atleast: 8 characters, 1 uppercase, lowercase, 1 number, 1 special character </div>
                    </div>
                    <div class="flex justify-between mb-11">
                        <div class="flex items-center">
                            <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="checked-checkbox" class="ml-2 text-sm font-medium dark:text-gray-300 text-stone-500">Remember password</label>
                        </div>
                        <span class="text-sm text-sky-500" @click="redirectForgetPassword()">Forget password</span>
                    </div>
                    <button @click="login" type="submit" class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
import '@/icons/icon_email';
import '@/icons/icon_password';
import '@/icons/icon_toggle_password';
import '@/icons/icon_close_add_modal';
import {
        required,
        email,
    } from "vuelidate/lib/validators";

export default {
    data() {
        return {
            email: '',
            password: '',
            isBlur: {
                email: false,
                password: false,
            },
            passWordType: 'password',
            isHidenPasswordClick: false,
      
        };
    },
    validations: {
        email: {
            required,
            email
        },
        password: {
                required,
                // minLength: minLength(8),
                valid: function (value) {
                    const containsUppercase = /[A-Z]/.test(value)
                    const containsLowercase = /[a-z]/.test(value)
                    const containsNumber = /[0-9]/.test(value)
                    const containsSpecial = /[#?!@$%^&*-]/.test(value)
                    const length = value.length >=8?true: false
                    return length && containsUppercase && containsLowercase && containsNumber && containsSpecial
                }
        },
    },
    methods: {
        redirectRegister() {
            this.$router.push('/auth/register')
        },
        redirectForgetPassword() {
            this.$router.push('/auth/forget-password')
        },
        login() {
            this.$v.$touch();
            if(this.$v.$invalid) {
                alert('Error form')
                return;
            }
            alert('success')

        },
        blurField(field, event) {
            if(field == 'password') {
                if(this.isMouseDown) {
                    return
                }
            }
            console.log('blur')
            this.isBlur[field] = true
            this.$v.$touch()
        },
        toggleHidenPassword(e) {
            if(this.passWordType == 'password') {
                    this.passWordType = 'text'
            } 
            else {
                this.passWordType = 'password'
            }
            this.$nextTick(() => {
                const inputElement = this.$refs.password;
                inputElement.focus();
                inputElement.selectionStart = inputElement.selectionEnd = inputElement.value.length;
            });
        },
        navigateTo(route) {
            this.$router.push(route).catch(() => { });
        },
        handleMouseDown(event) {
            event.stopPropagation();
            this.isMouseDown = true;
        },
        handleMouseUp() {
            console.log('m up')
            this.isMouseDown = false;
        },
        handleStorageChange(event) {
            if (event.key === 'theme') {
                this.isDarkMode = event.newValue === 'true';
            }
        }
    },
    watch: {
    },
    mounted() {
    },
    created() {
    }
}
</script>

<style>

</style>