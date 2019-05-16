<template>
  <div class="home">
    <div class="header">
      <head-bar></head-bar>
    </div>
    <div class="nav">
      <tab-bar></tab-bar>
      <router-view></router-view>
    </div>
    <div class="footer">
      <footer-bar></footer-bar>
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import FooterBar from '@/components/FooterBar.vue'

export default {
  name:'home',
  components:{
    TabBar,
    HeadBar,
    FooterBar
  }
};
</script>
<style lang="scss">
@import '@/assets/style/base.scss';

.home{
  background:#fff;
}

</style>

