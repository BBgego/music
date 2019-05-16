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
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.css"
// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";
export default {
  name: "SildBar",
  mounted: function() {
    var oHead = document.getElementsByTagName("HEAD").item(0);
    var oScript = document.createElement("script");
    oScript.type = "text/javascript";
    oScript.src = "";
    oHead.appendChild(oScript);
  }
};
</script>
<style lang="scss" >
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
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
</style>

