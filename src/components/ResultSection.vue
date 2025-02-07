<template>
   <div class="wrapper result">
    <div class="content__bg">
      <div class="container result__type1 result__type2 result__type3 result__type4">
        <div class="result__board">
          <h1 class="result__title"><img src="@/assets/images/result/result_title.png" alt=""></h1>
          <section class="result__content">
            <div class="result__img"><img class="hidden__phone" src="@/assets/images/result/result_img1-1.jpg" alt=""><img
                class="visible__phone" src="@/assets/images/result/result_img1-1m.jpg" alt=""></div>
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
import { ref } from 'vue';
import questionImg1 from '@/assets/images/recipelist/meat-1.png';
import questionImg2 from '@/assets/images/recipelist/meat-2.png';
import questionImg3 from '@/assets/images/recipelist/meat-3.png';
import questionImg4 from '@/assets/images/recipelist/meat-4.png';
import questionImg5 from '@/assets/images/recipelist/meat-5.png';
import questionImg6 from '@/assets/images/recipelist/meat-6.png';
import questionImg7 from '@/assets/images/recipelist/seafood-1.png';
import questionImg8 from '@/assets/images/recipelist/seafood-2.png';
import questionImg9 from '@/assets/images/recipelist/seafood-3.png';
import questionImg10 from '@/assets/images/recipelist/seafood-4.png';
import questionImg11 from '@/assets/images/recipelist/vegetables-1.png';
import questionImg12 from '@/assets/images/recipelist/vegetables-2.png';
import questionImg13 from '@/assets/images/recipelist/vegetables-3.png';
import questionImg14 from '@/assets/images/recipelist/vegetables-4.png';
import questionImg15 from '@/assets/images/recipelist/vegetables-5.png';
import questionImg16 from '@/assets/images/recipelist/vegetables-6.png';
const recipeList = ref([
  {
    index: 1,
    questionImg: questionImg1
  },
  {
    index: 2,
    questionImg: questionImg2
  },
  {
    index: 3,
    questionImg: questionImg3
  },
  {
    index: 4,
    questionImg: questionImg4
  },
  {
    index: 5,
    questionImg: questionImg5
  },
  {
    index: 6,
    questionImg: questionImg6
  },
   {
    index: 7,
    questionImg: questionImg7
  },
  {
    index: 8,
    questionImg: questionImg8
  },
  {
    index: 9,
    questionImg: questionImg9
  },
  {
    index: 10,
    questionImg: questionImg10
  },
  {
    index: 11,
    questionImg: questionImg11
  },
  {
    index: 12,
    questionImg: questionImg12
  },
  {
    index: 13,
    questionImg: questionImg13
  },
  {
    index: 14,
    questionImg: questionImg14
  },
  {
    index: 15,
    questionImg: questionImg15
  },
  {
    index: 16,
    questionImg: questionImg16
  },
])
</script>