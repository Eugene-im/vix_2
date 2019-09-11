<template>
  <div class="tabs__item item_1">
    <div class="tab__content">
      <div class="tab__content__title">
        <p class="tab__content__title_large">{{ $t("mainTab.connectTo") }}</p>
        <p class="tab__content__title_small">{{ $t("mainTab.callToDesign") }}</p>
      </div>
      <div class="tab__content__active">
        <a href="#" class="button_blue button_big">{{ $t("mainTab.buttonConnectPayment") }}</a>
        <a href="#" class="button_white button_big">{{ $t("mainTab.buttonDesign") }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabMain'
}
</script>
<style lang="scss">
@import '../assets/style/_tab_main.scss';
</style>
