<template>
  <div class="header_box">
    <div class="header_box__bd">
      <img
        class="logo"
        src="https://y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000"
        alt="QQ音乐"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "headbar"
};
</script>

<style lang="scss">
@import "@/assets/style/base.scss";
.header_box {
  padding-top: px2rem(160);
}
.header_box__bd {
  height: px2rem(160);
  padding: 0 px2rem(20);
  position: fixed;
  background: #fff;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
}
.logo {
  height: px2rem(70);
}
</style>
