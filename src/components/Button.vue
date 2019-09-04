<template>
  <div class="button__wrapper">
    <a href="/#/settings" style="text-decoration: none" class="call-settings__block">
      <div class="call-settings__icon"></div>
      <div class="call-settings__description">
        <span class="call-settings__description_f-line">Double click to configure</span>
        <span
          class="call-settings__description_s-line"
        >This box will not appear on your live website</span>
      </div>
    </a>
    <div class="button__block">
      <button class="button__block__item">{{ $t("buttonHead.button") }}</button>
      <div class="button__block__icons">
        <div class="block__icons__item item_pp"></div>
        <div class="block__icons__item item_mc"></div>
        <div class="block__icons__item item_v"></div>
        <div class="block__icons__item item_dis"></div>
        <div class="block__icons__item item_ae"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonVcita',
  methods: {
    getLanguage: async function(){
     // axios.get('URL').then(
      //  res => {
      //    k
      //  }
      //);
    }
  }
};
</script>


<style lang="scss">
@import '../assets/style/_button.scss';
</style>
