<template>
  <section class="video">
    <h1 class="video__title">
      <img src="@/assets/images/index/video_title.png" alt="Video Title" />
    </h1>
    <div class="video__content">
      <div class="video__player video__player--1" data-id="M7lc1UVf-VE">
        <div class="video__playerImg">
          <img src="@/assets/images/index/video_img1.jpg" alt="Video 1" />
        </div>
        <div class="video__playerTitle">
          <img src="@/assets/images/index/video_title1.png" alt="Video 1 Title" />
        </div>
      </div>
      <div class="video__player video__player--2" data-id="db7UNW8Y9bw">
        <div class="video__playerImg">
          <img src="@/assets/images/index/video_img2.jpg" alt="Video 2" />
        </div>
        <div class="video__playerTitle">
          <img src="@/assets/images/index/video_title2.png" alt="Video 2 Title" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VideoSection'
};
</script>

<style scoped>

</style>
