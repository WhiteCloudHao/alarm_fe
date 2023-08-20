<template>
    <div class="">
      <DefaultLayout> 
          <template v-slot:header>
          <Header :withBackBtn="true"></Header>
        </template>
        <FollowUsBody />
      </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Header from '@/components/header/Header.vue';
import FollowUsBody from '@/views/setting/components/FollowUsBody.vue';
  
export default {
    name: 'FollowUsView',
    components: {
        DefaultLayout,
        Header,
        FollowUsBody
    }
}
</script>

<style>
  
</style>