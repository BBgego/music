<template>
  <div>
    <ul class="nav_box">
      <router-link to="/recommend" tag="li" class="nav_box__bd">推荐</router-link>
      <router-link to="/toplist" tag="li" class="nav_box__bd">排行榜</router-link>
      <router-link to="/search" tag="li" class="nav_box__bd">搜索</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style lang='scss'>
@import "@/assets/style/base.scss";

.nav_box {
  height: px2rem(80);
  display: flex;
  width: 100%;
  .nav_box__bd {
    flex: 1;
    font-size: px2rem(32);
    text-align: center;
    line-height: px2rem(80);
    &.router-link-active {
      color: #31c27c;
    }
  }
}
</style>
