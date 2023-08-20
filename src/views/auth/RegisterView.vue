<template>
    <div class="flex bg-bgLayout h-screen pt-12 px-11 flex-col">
        <div class="">
            <h1 class="text-3xl font-serif font-medium mb-4">ITodo</h1>
            <p class="px-6 text-lg text-stone-600 mb-7"> By signing  you are  agreeing  our <span class="text-sky-500">Term and privacy policy</span></p>
            <div class="route_auth_text mb-8">
                <span class="mr-7 mb-7 text-lg" @click="redirectLogin()">Login</span>
                <span class=" text-lg underline text-sky-500 underline-offset-8 decoration-black decoration-solid decoration-1" >Register</span>
            </div>
        </div>
        <form class="mb-9" @submit.prevent="register">     
            <div class="grid grid-cols-1">
                <!-- <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label> -->
                <div class="mb-6">
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svgicon name="icon_name" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                        <input @blur="blurField('name')" name="name" v-model="fullName" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name" >
                    </div>
                    <div v-if="isBlur['name'] && !$v.fullName.required" class="text-red-500 text-left">Full Name is required</div>
                </div>
                <div class="flex gap-1 mb-6">
                    <div class="w-1/2">
                        <!-- <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Gender" required> -->
                        <select @blur="blurField('gender')" v-model="gender" :class="[textColorSelectTag,'bg-gray-50 border border-gray-300 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500']">
                            <option value="" class="" disabled  selected>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="different">Different</option>
                        </select>
                        <div v-if="isBlur['gender'] && !$v.gender.required" class="text-red-500 text-left">Gender is required</div>
                    </div>  
                    <div class="w-1/2">
                        <input @blur="blurField('phone')" type="text" v-model="phoneNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone number">
                        <div v-if="isBlur['phone'] && !$v.phoneNumber.required" class="text-red-500 text-left">Phone number is required</div>
                    </div>
                </div>
                <div class="mb-6">
                    <div  class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svgicon name="icon_email" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                        <input @blur="blurField('email')" type="text" v-model="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email">
                    </div>
                    <div v-if="isBlur['email'] && !$v.email.required" class="text-red-500 text-left">Email field is required</div>
                    <div v-if="isBlur['email']  && !$v.email.email" class="text-red-500 text-left">Please provide valid email</div>
                </div>
                
                <div class="mb-6">
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none" >
                            <svgicon name="icon_password" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                        <div>
                            <input ref="password" @blur="blurField('password')"  v-model="password" :type="passWordType" id="password" class="  pl-10 p-2.5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-0 w-full text-lg border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" >
                            <div role="button"  @mousedown="handleMouseDown('password')" @mouseup="handleMouseUp('password')" class="absolute inset-y-0 right-2 flex items-center pl-3" @click="toggleHidenPassword('password')">
                                <svgicon name="icon_toggle_password" width="24" height="24" color="#A6A6A6" class="" />
                            </div>
                        </div>
                    </div>
                    <div v-if="isBlur['password']  && !$v.password.required" class="text-red-500 text-left">password is required</div>
                    <div v-if="isBlur['password']  &&  $v.password.required && !$v.password.valid" class="text-red-500 text-left">Atleast: 8 characters, 1 uppercase, lowercase, 1 number, 1 special character </div>
                </div>
                <div class="mb-6">
                    <div   class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svgicon name="icon_password" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                        <input ref="rePassword" @blur="blurField('rePassword', $event)"  v-model="rePassword" :type="rePasswordType" id="repassword" class="pl-10 p-2.5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-0 w-full text-lg border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Re password" >
                        <div role="button"  @mousedown="handleMouseDown('rePassword')" @mouseup="handleMouseUp('rePassword')"  class="absolute inset-y-0 right-2 flex items-center pl-3" @click="toggleHidenPassword('rePassword')">
                            <svgicon name="icon_toggle_password" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                    </div>
                    <div v-if="isBlur['rePassword']  && !$v.rePassword.required" class="text-red-500 text-left">Re password is required</div>
                    <div v-if="isBlur['rePassword']  &&  $v.rePassword.required  && !$v.rePassword.sameAsPassword" class="text-red-500 text-left">Re password must same as password</div>
                </div>
            </div>           
            <button  type="submit" class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
            </form>
    </div>
</template>

<script>
import '@/icons/icon_email';
import '@/icons/icon_password';
import '@/icons/icon_toggle_password';
import '@/icons/icon_name';

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
            password: '',
            rePassword: '',
            fullName: '',
            gender: '',
            phoneNumber: '',
            textColorSelectTag: 'text-slate-500',
            passWordType: 'password',
            rePasswordType: 'password',
            isBlur: {
                name: false,
                email: false,
                gender: false,
                phone: false,
                password: false,
                rePassword: false,
            },
            isMouseDown: {
                password: false,
                rePassword: false,
            },
        };
    },
    validations: {
            fullName: {
                required
            },
            email: {
                required,
                email
            },
            gender: {
                required
            },
            phoneNumber: {
                required
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
            rePassword: {
                required,
                sameAsPassword: sameAs('password')
            }, 
    },
    methods: {
        redirectLogin() {
            this.$router.push('/auth/login')
        },
        register() {
            this.$v.$touch();
            if(this.$v.$invalid) {
                alert('Error form')
                return;
            }
            alert('success')
        },
        toggleHidenPassword(field) { 
            if(field == 'password') {
                if(this.passWordType == 'password') {
                    this.passWordType = 'text'
                } else {
                    this.passWordType = 'password'
                }
            }
            else if (field == 'rePassword') {
                if(this.rePasswordType == 'password') {
                    this.rePasswordType = 'text'
                } else {
                    this.rePasswordType = 'password'
                }
            }
            this.$nextTick(() => {
                const inputElement = this.$refs[field];
                inputElement.focus();
                inputElement.selectionStart = inputElement.selectionEnd = inputElement.value.length;
            })
        },
        blurField(field) {
            if(field == 'password' || field == 'rePassword' ) {
                if(this.isMouseDown[field]) {
                    return
                }
            }
            this.isBlur[field] = true
            this.$v.$touch()
        },
        handleMouseDown(field) {
            this.isMouseDown[field] = true
        },
        handleMouseUp(field) {
            this.isMouseDown[field] = false
        },
        // focusField(field) {
        //     this.isBlur[field] = false
        // },
    },
    watch: {
        gender(newVal) {
            if (newVal !== '') {
                this.textColorSelectTag = 'text-gray-900';
            } else {
                this.textColorSelectTag = 'text-slate-500';
            }
        }
    },
    mounted() {
        // console.log(this.isBlur.email)
        // console.log('type',typeof this.isBlur)
    }
}
</script>

<style>

</style>