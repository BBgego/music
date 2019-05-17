<template>
  <div class="recommend_silder">
    <sild-bar></sild-bar>
  </div>
</template>

<script>
import SildBar from "@/components/SildBar.vue"
export default {
  components: {
    SildBar
  }
}
</script>

<style lang='scss'>
@import "@/assets/style/base.scss";

.recommend_silder {
  margin-bottom: px2rem(28);
}

</style>
