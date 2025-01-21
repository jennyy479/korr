<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo"><a href="index.html"><img src="../assets/images/logo.png"></a></div>
      <div class="menu">
        <div class="menuContent">
          <div class="hamburger" id="hamburger"><span class="hamburger__inner"></span></div>
          <ul class="menu__list">
            <li class="menu__item"><a href="questions.html">專屬你的彈指天菜</a></li>
            <li class="menu__item"><a href="index.html#video">彈指料理搶先看</a></li>
            <li class="menu__item"><a href="teach.html">專業的煮給你看</a></li>
            <li class="menu__item"><a href="recipelist.html">美味秘笈偷偷看</a></li>
            <li class="menu__item"><a href="sales.html">美味販賣部</a></li>
            <li class="menu__item"><a href="event.html">活動辦法</a></li>
            <li class="menu__item menu__link">
              <ul class="menu__linkList">
                <li class="menu__linkItem"><a href="#">官網</a></li>
                <li class="menu__linkItem"><a href="#"> <img src="assets/images/fb.png" alt=""></a></li>
                <li class="menu__linkItem"><a href="#"> <img src="assets/images/line.png" alt=""></a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="header__link">
        <ul class="header__linkList">
          <li class="header__linkItem"><a href="#">官網</a></li>
          <li class="header__linkItem"><a href="#"> <img src="assets/images/fb.png" alt=""></a></li>
          <li class="header__linkItem"><a href="#"> <img src="assets/images/line.png" alt=""></a></li>
        </ul>
      </div>
    </div>
  </header>
  <div class="wrapper index">
    <section class="kv">
      <div class="kv__btn"><a href="questions.html"> </a></div>
    </section>
    <div class="content__bg" id="video">
      <section class="video">
        <h1 class="video__title"><img src="assets/images/index/video_title.png" alt=""></h1>
        <div class="video__content">
          <div class="video__player video__player--1" data-id="M7lc1UVf-VE">
            <div class="video__playerImg"><img src="assets/images/index/video_img1.jpg" alt=""></div>
            <div class="video__playerTitle"><img src="assets/images/index/video_title1.png"></div>
          </div>
          <div class="video__player video__player--2" data-id="db7UNW8Y9bw">
            <div class="video__playerImg"><img src="assets/images/index/video_img2.jpg" alt=""></div>
            <div class="video__playerTitle"><img src="assets/images/index/video_title2.png"></div>
          </div>
        </div>
      </section>
    </div>
    <div class="lightBox">
      <div class="lightBox__close"><img src="assets/images/close.png" alt=""></div>
      <div class="lightBox__container"></div>
    </div>
    </div>
    <router-view></router-view>
</template>
<style scoped>
@import '../assets/styles/main.css';

</style>