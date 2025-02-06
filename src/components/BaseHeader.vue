<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo"><a href="/index"><img src="@/assets/images/logo.png"></a></div>
      <div class="menu">
        <div class="menuContent">
          <div class="hamburger" id="hamburger" @click="toggleMenu"><span class="hamburger__inner"></span></div>
          <ul class="menu__list">
            <li class="menu__item"><a href="/questions">專屬你的彈指天菜</a></li>
            <li class="menu__item"><a href="/index#video">彈指料理搶先看</a></li>
            <li class="menu__item"><a href="/teach">專業的煮給你看</a></li>
            <li class="menu__item"><a href="/recipelist">美味秘笈偷偷看</a></li>
            <li class="menu__item"><a href="/sales">美味販賣部</a></li>
            <li class="menu__item"><a href="/event">活動辦法</a></li>
            <li class="menu__item menu__link">
              <ul class="menu__linkList">
                <li class="menu__linkItem"><a href="#">官網</a></li>
                <li class="menu__linkItem"><a href="#"> 
                  <img src="@/assets/images/fb.png" alt=""></a></li>
                <li class="menu__linkItem"><a href="#"> 
                  <img src="@/assets/images/line.png" alt=""></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="header__link">
        <ul class="header__linkList">
          <li class="header__linkItem"><a href="#">官網</a></li>
          <li class="header__linkItem"><a href="#"> <img src="@/assets/images/fb.png" alt=""></a></li>
          <li class="header__linkItem"><a href="#"> <img src="@/assets/images/line.png" alt=""></a></li>
        </ul>
      </div>
    </div>
  </header>
  <router-view></router-view>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core';
import { onUnmounted } from 'vue';
const { width: windowW, height: windowH } = useWindowSize();
const menuList = ref(); 
const hamburger = ref(); 

const updateMenuHeight = () => {
  const newHeight = windowH - 40;
  if (menuList.value) {
    if (windowW < 900) {
      menuList.value.style.height = '100%';
    } else {
      menuList.value.style.height = `${newHeight}px`; 
    }
  }
}

const toggleMenu = () => {
  if (!menuList.value && !hamburger.value) return;
    if (menuList.value.classList.contains('menu__list--active')) {
      menuList.value.classList.remove('menu__list--active');
      hamburger.value.classList.remove('hamburger--active');
    } else {
      menuList.value.className += ' menu__list--active';
      hamburger.value.className += ' hamburger--active';
  }
};

onMounted(() => {
  menuList.value = document.querySelector('.menu__list');
  hamburger.value = document.querySelector('.hamburger');
  updateMenuHeight();
  window.addEventListener('resize', updateMenuHeight);
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMenuHeight);
})
</script>
<style scoped>
@import '@/assets/styles/main.css';
@import '@/assets/styles/index.css';
</style>