<template>
  <div class="footer_box">
    <a class="footer_box__action" href="#">安装QQ音乐 发现更多精彩</a>
  </div>
</template>

<script>
export default {
  name: "footerbar"
};
</script>
<style lang="scss">
@import "@/assets/style/base.scss";

.footer_box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 110;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  padding: px2rem(30) 0;
}

.footer_box__action {
  display: block;
  padding: 0 px2rem(30);
  border-radius: px2rem(198);
  background-color: #30c27c;
  color: #fff;
  height: px2rem(66);
  line-height: px2rem(66);
  font-size: px2rem(28);
  text-decoration: none;
}
</style>

