<template>
   <div class="wrapper result">
    <div class="content__bg">
      <div class="container result__type1 result__type2 result__type3 result__type4">
        <div class="result__board">
          <h1 class="result__title"><img src="@/assets/images/result/result_title.png" alt=""></h1>
          <section class="result__content">
            <div class="result__img"><img class="hidden__phone" :src="resultImg" alt=""><img
                class="visible__phone" :src="resultMobileImg" alt=""></div>
            <div class="result__recipebtn"><a href="/recipe1"><img src="@/assets/images/result/result_recipebtn.jpg"
                  alt=""></a></div>
          </section>
        </div>
        <div class="result__btn"><a href="/form"><img src="@/assets/images/result/result_btn.png" alt=""></a></div>
        <section class="borderFrame recommend">
          <div class="borderFrame--outside">
            <div class="borderFrame--inside">
              <div class="borderFrameTitle"><img src="@/assets/images/result/recommend_title1.png" alt=""></div>
              <ul class="recommend__list">
                <li class="recommend__item"><a href="#"><img src="@/assets/images/recipelist/meat-1.png" alt=""></a></li>
                <li class="recommend__item"><a href="#"><img src="@/assets/images/recipelist/meat-2.png" alt=""></a></li>
                <li class="recommend__item"><a href="#"><img src="@/assets/images/recipelist/meat-3.png" alt=""></a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <section class="moreFood">
        <div class="container">
          <div class="moreFood__title"> <img src="@/assets/images/morefood_title.png" alt=""></div>
          <ul class="moreFood__slider" v-for="recipe in recipeList" :key="recipe.index">
            <li class="moreFood__slide"><a href=""><img :src="recipe.questionImg" alt=""></a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const result = JSON.parse(sessionStorage.getItem('resultJSON').replace(/\s+/g, ''));

const question1 = result[0];
const question2 = result[1];
const resultImg = computed(() => {
  return require(`@/assets/images/result/result_img${question1}-${question2}.jpg`);
});
const resultMobileImg = computed(() => {
  return require(`@/assets/images/result/result_img${question1}-${question2}m.jpg`);
});
console.log('result', result)
</script>