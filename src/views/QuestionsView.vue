<template>
  <ScrollTop/>
  <BaseHeader />
  <QuestionSection />
  <BaseFooter />
  <router-view />
</template>
<script setup>
import ScrollTop from '@/components/ScrollTop.vue';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import QuestionSection from '@/components/QuestionSection.vue';

</script>
<style scoped>
  @import '@/assets/styles/main.css';
  @import '@/assets/styles/questions.css';
</style>