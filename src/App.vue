<template>
  <div>
    <SideNavbar/>
    <RouterView/>
  </div>
</template>

<script setup>
  import {RouterView} from 'vue-router';
import SideNavbar from './components/SideNavbar.vue';
</script>

<style lang="scss" scoped>

</style>