<template>
  <div class="wrapper questions">
    <div class="content__bg">
      <div class="container">
        <h1 class="questions__title"><img src="@/assets/images/question/question_title.png" alt=""></h1>
        <section class="questions__content">
          <div class="questions__board">
            <div class="questions__question">{{ topic[currentQuestion] }}</div>
            <div class="answer">
              <div v-for="(answer, answerIndex) in questionList" :key="answerIndex" :class="answer.class" @click="selectAnswer(answer)">
                <img class="hidden__phone" :src="answer.image" alt="">
                <img class="visible__phone" :src="answer.phoneImage" alt="">
              </div>
            </div>
          </div>
          <div class="questions__btn">
            <div v-if="currentQuestion" class="questions__btn--prev" @click="prevQuestion"><a href="#"><img src="@/assets/images/question/question_btn_prev.png"
                  alt=""></a></div>
            <div v-if="!currentQuestion" class="questions__btn--next" @click="nextQuestion"><a href="#"><img src="@/assets/images/question/question_btn_next.png"
                  alt=""></a></div>
            <div v-if="currentQuestion" class="questions__btn--result"  @click="redirectResult"><a href="/result"><img
                  src="@/assets/images/question/question_btn_result.png" alt=""></a></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from 'vue';

const currentQuestion = ref(0);
const questionList = ref([]);

const topic = ref({
  0: "A. 如果人生是齣戲，你覺得自己像是哪類戲劇的主角?",
  1: "B. 你平日的活動或興趣是？"
});

const ans = ref([]);
const userAnswers = ref([ '1', '1']);

const question = ref({
  0: {
    1: {
      class: "answer1 answer__select",
      image: require("@/assets/images/question/q1-a1.png"),
      phoneImage: require("@/assets/images/question/q1-a1m.png"),
    },
    2: {
      class: "answer2",
      image: require("@/assets/images/question/q1-a2.png"),
      phoneImage: require("@/assets/images/question/q1-a2m.png"),
    },
    3: {
      class: "answer3",
      image: require("@/assets/images/question/q1-a3.png"),
      phoneImage: require("@/assets/images/question/q1-a3m.png"),
    },
    4: {
      class: "answer4",
      image: require("@/assets/images/question/q1-a4.png"),
      phoneImage: require("@/assets/images/question/q1-a4m.png"),
    },
  },
  1: {
    1: {
      class: "answer1 answer__select",
      image: require("@/assets/images/question/q2-a1-1.png"),
      phoneImage: require("@/assets/images/question/q2-a1-1m.png"),
    },
    2: {
      class: "answer2",
      image: require("@/assets/images/question/q2-a1-2.png"),
      phoneImage: require("@/assets/images/question/q2-a1-2m.png"),
    },
    3: {
      class: "answer3",
      image: require("@/assets/images/question/q2-a1-3.png"),
      phoneImage: require("@/assets/images/question/q2-a1-3m.png"),
    },
    4: {
      class: "answer4",
      image: require("@/assets/images/question/q2-a1-4.png"),
      phoneImage: require("@/assets/images/question/q2-a1-4m.png"),
    },
  }
});

const prevQuestion = () => {
  currentQuestion.value = 0;
  questionList.value = question.value[currentQuestion.value];
}

const nextQuestion = () => {
  currentQuestion.value = 1;
  questionList.value = question.value[currentQuestion.value];
}

const redirectResult = () => {
  sessionStorage.setItem('resultJSON', JSON.stringify(userAnswers.value));
}

const selectAnswer = (answer) => {
  const selectAnswerIndex = answer.class.match(/\d+/)?.[0];

  Object.entries(question.value[currentQuestion.value]).forEach(element => {
    const questionIndex = element[0];

    if (questionIndex === selectAnswerIndex) {
      answer.class += ' answer__select';
    } else {
      question.value[currentQuestion.value][questionIndex].class = `answer${questionIndex}`;
    }
  });
  
  const answerIndex = answer.class.split('answer')[1];
  userAnswers.value[currentQuestion.value] = answerIndex;
};


onMounted(() => {
  questionList.value = question.value[currentQuestion.value];
  nextTick(() => {
    ans.value = document.querySelectorAll(".answer div");
  });
})
</script>