<template>
  <div class="bg-bgLayout hide-scrollbar h-screen w-full pt-2 px-5">
    <header>
      <!-- For different header of each page -->
      <slot name="header"></slot>
    </header>
    <Sidebar></Sidebar>
    <slot></slot>
    <BottomNavigation></BottomNavigation>

    <!-- Modal -->
    <AddTaskModal />
    <UpdateTagModal /> 
  </div>
</template>

<script>
import BottomNavigation from '../bottomNav/BottomNavigation.vue';
import Header from '../header/Header.vue';
import AddTaskModalVue from '../modal/AddTaskModal.vue';
import Sidebar from '../sidebar/Sidebar.vue';
import AddTaskModal from '@/components/modal/AddTaskModal.vue';
import UpdateTagModal from '../modal/UpdateTagModal.vue';
export default {
  components: {
    Header,
    BottomNavigation,
    Sidebar,
    AddTaskModal,
    UpdateTagModal,
  },
};
</script>

<style></style>
