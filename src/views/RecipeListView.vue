<template>
  <ScrollTop/>
  <BaseHeader />
  <RecipeListSection />
  <BaseFooter />
  <router-view />
</template>
<script setup>
import ScrollTop from '@/components/ScrollTop.vue';
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import RecipeListSection from '@/components/RecipeListSection.vue';

</script>
<style scoped>
  @import '@/assets/styles/main.css';
  @import '@/assets/styles/recipelist.css';
</style>