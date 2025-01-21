<template>
  <BaseHeader />
  <router-view />
  <BaseFooter />
  <ScrollTop/>
</template>
 <script setup>
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import ScrollTop from '@/components/ScrollTop.vue';
</script>