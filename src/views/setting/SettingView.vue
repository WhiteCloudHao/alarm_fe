<template>
  <div class="setting">
    <DefaultLayout>
        <template v-slot:header>
        <Header></Header>
      </template>
      <SettingBody/>
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Header from '@/components/header/Header.vue';
import SettingBody from '@/views/setting/components/SettingBody.vue';

export default {
    name: 'SettingView',
    components: {
        DefaultLayout,
        Header,
        SettingBody
    }
}
</script>
<style>

</style>