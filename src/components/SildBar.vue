<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1262887.jpg">
      </div>
      <div class="swiper-slide">
        <img src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1262887.jpg">
      </div>
      <div class="swiper-slide">
        <img src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1262887.jpg">
      </div>
      <div class="swiper-slide">
        <img src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1262887.jpg">
      </div>
      <div class="swiper-slide">
        <img src="http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1262887.jpg">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
    <!-- Add Arrows -->
    <!-- <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div> -->
  </div>
</template>

<script>
export default {
  name: "SildBar",
  // mounted: function() {
  //   var oHead = document.getElementsByTagName("HEAD").item(0);
  //   var oScript = document.createElement("script");
  //   oScript.type = "text/javascript";
  //   oScript.src = "";
  //   oHead.appendChild(oScript);
  // }
  mounted: function() {
    var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      // nextButton: ".swiper-button-next",
      // prevButton: ".swiper-button-prev",
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false,
      loop: true
    });
  }
};
</script>
<style lang="scss" >
@import "@/assets/style/base.scss";

.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  width: 100%;
  text-align: center;
  font-size: px2rem(18);
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img{
  width: 100%;
}

.swiper-pagination-bullet {
  height: px2rem(16);
  width: px2rem(16);
  background-color:#fff;
}

.swiper-pagination-bullet-active{
  background-color: #31c27c;
}
</style>

