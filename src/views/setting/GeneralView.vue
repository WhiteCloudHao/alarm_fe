<template>
    <div class="">
      <DefaultLayout> 
          <template v-slot:header>
          <Header :withBackBtn="true"></Header>
        </template>
        <GeneralBody />
      </DefaultLayout>
    </div>
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Header from '@/components/header/Header.vue';
import GeneralBody from '@/views/setting/components/GeneralBody.vue';
  
export default {
    name: 'GeneralView',
    components: {
        DefaultLayout,
        Header,
        GeneralBody
    }
}
</script>,
<style>
  
</style>