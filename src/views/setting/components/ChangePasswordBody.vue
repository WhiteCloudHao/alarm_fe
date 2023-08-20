<template>
    <div class="">
        <div class="grid grid-cols-1 mt-28">
            <form class="mb-9" @submit.prevent="submit">     
                <!-- <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label> -->
                <div class="mb-4">
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svgicon name="icon_password" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                        <input ref="oldPassword" @blur="blurField('oldPassword')" v-model="oldPassword" :type="oldPasswordType" class="  pl-10 p-2.5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-0 w-full text-lg border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Old password">
                        <div role="button"  @mousedown="handleMouseDown('oldPassword')" @mouseup="handleMouseUp('oldPassword')" class="absolute inset-y-0 right-2 flex items-center pl-3" @click="toggleHidenPassword('oldPassword')" >
                            <svgicon name="icon_toggle_password" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                    </div>
                    <div v-if="isBlur['oldPassword']  && !$v.oldPassword.required" class="text-red-500 text-left">password is required</div>
                    <div v-if="isBlur['oldPassword']  &&  $v.oldPassword.required && !$v.oldPassword.valid" class="text-red-500 text-left">Atleast: 8 characters, 1 uppercase, lowercase, 1 number, 1 special character </div>
                </div>
                <div class="mb-4">
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svgicon name="icon_password" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                        <input ref="newPassword" @blur="blurField('newPassword')" v-model="newPassword" class="pl-10 p-2.5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-0 w-full text-lg border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="New password" :type="newPasswordType">
                        <div role="button"  @mousedown="handleMouseDown('newPassword')" @mouseup="handleMouseUp('newPassword')" class="absolute inset-y-0 right-2 flex items-center pl-3" @click="toggleHidenPassword('newPassword')">
                            <svgicon name="icon_toggle_password" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                    </div>
                    <div v-if="isBlur['newPassword']  && !$v.newPassword.required" class="text-red-500 text-left">password is required</div>
                    <div v-if="isBlur['newPassword']  &&  $v.newPassword.required && !$v.newPassword.valid" class="text-red-500 text-left">Atleast: 8 characters, 1 uppercase, lowercase, 1 number, 1 special character </div>
                </div>
                <div class="mb-5">
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svgicon name="icon_password" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                        <input ref="confirmPassword"  @blur="blurField('confirmPassword')" v-model="confirmPassword" :type="confirmPasswordType"  class="pl-10 p-2.5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block  min-w-0 w-full text-lg border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirm password">
                        <div role="button"  @mousedown="handleMouseDown('confirmPassword')" @mouseup="handleMouseUp('confirmPassword')" class="absolute inset-y-0 right-2 flex items-center pl-3" @click="toggleHidenPassword('confirmPassword')">
                            <svgicon name="icon_toggle_password" width="24" height="24" color="#A6A6A6" class="" />
                        </div>
                    </div>
                    <div v-if="isBlur['confirmPassword']  && !$v.confirmPassword.required" class="text-red-500 text-left">password is required</div>
                    <div v-if="isBlur['confirmPassword']  &&  $v.confirmPassword.required && !$v.confirmPassword.sameAsNewPassword" class="text-red-500 text-left">confirm password must same new password</div>
                </div>
                <button  type="submit" class="w-full text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Change password</button>
            </form>
        </div>
    </div>
 </template>
 
 <script>
import '@/icons/icon_password';
import '@/icons/icon_toggle_password';
import {
        required,
        email,
        minLength,
        sameAs
    } from "vuelidate/lib/validators";
 export default {
    name: 'AboutBody',
    data() {
       return {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        isBlur: {
            oldPassword: false,
            newPassword: false,
            confirmPassword: false,
        },
        oldPasswordType: 'password',
        newPasswordType: 'password',
        confirmPasswordType: 'password',
        isMouseDown: {
            oldPassword: false,
            newPassword: false,
            confirmPassword: false,
        },
       }
    },
    validations: {
        oldPassword: {
            required,
             // minLength: minLength(8),
             valid: function (value) {
                 const containsUppercase = /[A-Z]/.test(value)
                 const containsLowercase = /[a-z]/.test(value)
                 const containsNumber = /[0-9]/.test(value)
                 const containsSpecial = /[#?!@$%^&*-]/.test(value)
                 const length = value.length >= 8 ? true : false
                 return length && containsUppercase && containsLowercase && containsNumber && containsSpecial
             }
        },
        newPassword: {
            required,
             // minLength: minLength(8),
             valid: function (value) {
                 const containsUppercase = /[A-Z]/.test(value)
                 const containsLowercase = /[a-z]/.test(value)
                 const containsNumber = /[0-9]/.test(value)
                 const containsSpecial = /[#?!@$%^&*-]/.test(value)
                 const length = value.length >= 8 ? true : false
                 return length && containsUppercase && containsLowercase && containsNumber && containsSpecial
             }
            
        },
        confirmPassword: {
            required,
             // minLength: minLength(8),
             sameAsNewPassword: sameAs('newPassword')
        }
    },
    methods: {
        submit() {
            this.$v.$touch();
            if(this.$v.$invalid) {
                alert('Error form')
                return;
            }
            alert('success')
        },
        blurField(field) {
            if(field == 'oldPassword' || field == 'newPassword' || field == 'confirmPassword' ) {
                if(this.isMouseDown[field]) {
                    return
                }
            }
            this.isBlur[field] = true
            this.$v.$touch()
        },
        toggleHidenPassword(field) { 
            if(field == 'oldPassword') {
                if(this.oldPasswordType == 'password') {
                    this.oldPasswordType = 'text'
                } else {
                    this.oldPasswordType = 'password'
                }
            }
            else if (field == 'newPassword') {
                if(this.newPasswordType == 'password') {
                    this.newPasswordType = 'text'
                } else {
                    this.newPasswordType = 'password'
                }
            }
            else if (field == 'confirmPassword') {
                if(this.confirmPasswordType == 'password') {
                    this.confirmPasswordType = 'text'
                } else {
                    this.confirmPasswordType = 'password'
                }
            }
            this.$nextTick(() => {
                const inputElement = this.$refs[field];
                inputElement.focus();
                inputElement.selectionStart = inputElement.selectionEnd = inputElement.value.length;
            })
        },
        handleMouseDown(field) {
            this.isMouseDown[field] = true
        },
        handleMouseUp(field) {
            this.isMouseDown[field] = false
        },
    }
 }
 </script>
 
 <style>
 
 </style>