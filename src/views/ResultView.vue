<template>
  <ScrollTop/>
  <BaseHeader />
  <ResultSection />
  <BaseFooter />
  <router-view />
</template>
<script setup>
import ScrollTop from '@/components/ScrollTop.vue';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import ResultSection from '@/components/ResultSection.vue';

</script>
<style scoped>
  @import '@/assets/styles/main.css';
  @import '@/assets/styles/result.css';
</style>