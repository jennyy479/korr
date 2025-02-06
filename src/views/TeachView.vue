<template>
  <ScrollTop/>
  <BaseHeader />
  <TeachSection />
  <BaseFooter />
  <router-view />
</template>
<script setup>
import ScrollTop from '@/components/ScrollTop.vue';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import TeachSection from '@/components/TeachSection.vue';

</script>
<style scoped>
  @import '@/assets/styles/main.css';
  @import '@/assets/styles/teach.css';
</style>