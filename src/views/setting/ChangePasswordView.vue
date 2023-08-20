<template>
    <div class="">
      <DefaultLayout> 
          <template v-slot:header>
          <Header :withBackBtn="true"></Header>
        </template>
        <ChangePasswordBody />
      </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Header from '@/components/header/Header.vue';
import ChangePasswordBody from '@/views/setting/components/ChangePasswordBody.vue';
  
export default {
    name: 'ChangePassWordView',
    components: {
        DefaultLayout,
        Header,
        ChangePasswordBody
    }
}
</script>

<style>
  
</style>