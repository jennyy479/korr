<template>
  <BaseHeader />
  <IndexContent />
  <BaseFooter />
  <ScrollTop/>
  <router-view />
</template>
 <script setup>
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import IndexContent from '@/components/IndexContent.vue';
import ScrollTop from '@/components/ScrollTop.vue';
</script>