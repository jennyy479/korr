<template>
  <div class="wrapper questions">
    <div class="content__bg">
      <div class="container">
        <h1 class="questions__title"><img src="@/assets/images/question/question_title.png" alt=""></h1>
        <section class="questions__content">
          <div class="questions__board">
            <div class="questions__question">A. 如果人生是齣戲，你覺得自己像是哪類戲劇的主角?</div>
            <div class="answer">
              <div  v-for="answer in answerList" :key="answer.index" :class="answer.class" @click="selectAnswer(answer)">
                <img class="hidden__phone" :src="answer.hiddenImg" alt="">
                <img class="visible__phone" :src="answer.visibleImg" alt="">
              </div>
            </div>
          </div>
          <div class="questions__btn">
            <div class="questions__btn--prev"><a href="#"><img src="@/assets/images/question/question_btn_prev.png"
                  alt=""></a></div>
            <div class="questions__btn--next"><a href="#"><img src="@/assets/images/question/question_btn_next.png"
                  alt=""></a></div>
            <div class="questions__btn--result"><a href="/result"><img
                  src="@/assets/images/question/question_btn_result.png" alt=""></a></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import hiddenImg1 from '@/assets/images/question/q1-a1.png';
import hiddenImg2 from '@/assets/images/question/q1-a2.png';
import hiddenImg3 from '@/assets/images/question/q1-a3.png';
import hiddenImg4 from '@/assets/images/question/q1-a4.png';
import visibleImg1 from '@/assets/images/question/q1-a1m.png';
import visibleImg2 from '@/assets/images/question/q1-a2m.png';
import visibleImg3 from '@/assets/images/question/q1-a3m.png';
import visibleImg4 from '@/assets/images/question/q1-a4m.png';

const ans = ref([]);
const answerList = ref([
  {
    index: "1",
    class: "answer1 answer__select",
    hiddenImg: hiddenImg1,
    visibleImg: visibleImg1,
  },
  {
    index: "2",
    class: "answer2",
    hiddenImg: hiddenImg2,
    visibleImg: visibleImg2,
  },
  {
    index: "3",
    class: "answer3",
    hiddenImg: hiddenImg3,
    visibleImg: visibleImg3,
  },
  {
    index: "4",
    class: "answer4",
    hiddenImg: hiddenImg4,
    visibleImg: visibleImg4,
  },
]);

const selectAnswer = (answer) => {
  answerList.value.forEach(element => {
    if (element.index === answer.index) {
      answer.class += ' answer__select';
    } else {
      element.class = `answer${answer.index}` 
    }
  });
  
};

onMounted(() => {
  nextTick(() => {
    ans.value = document.querySelectorAll(".answer div");
  })
})
</script>