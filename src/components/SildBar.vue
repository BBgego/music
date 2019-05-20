<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in slider_list" :key="item.url">
        <a :href="item.url">
          <img :src="item.silder_img_url" :alt="item.silder_img_name">
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
  name: "SildBar",
  data: function() {
    return {
      slider_list: []
    };
  },
  mounted: function() {
    this.loadData();
    this.swiper();
  },
  methods: {
    loadData: function() {
      this.$ajax
        .get("http://127.0.0.1:8000/silder")
        .then(response => {
          if (response.status === 200) {
            this.slider_list = response.data;
            this.$nextTick(() => {
              // 下一个UI帧再初始化swiper
              this.swiper();
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    swiper: function() {
      var swiper = new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true
      });
    }
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
.swiper-slide img {
  width: 100%;
}

.swiper-pagination-bullet {
  height: px2rem(16);
  width: px2rem(16);
  background-color: #fff;
}

.swiper-pagination-bullet-active {
  background-color: #31c27c;
}
</style>
