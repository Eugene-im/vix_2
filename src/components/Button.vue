<template>
  <div class="button__wrapper">
    <a href="/#/settings" style="text-decoration: none" class="call-settings__block">
      <div class="call-settings__icn">
          <img src="../assets/img/rectangle-46.svg" alt>
      </div>
      <div class="call-settings__description">
        <span class="call-settings__description_f-line">Double click to configure</span>
        <span
          class="call-settings__description_s-line"
        >This box will not appear on your live website</span>
      </div>
    </a>
    <div class="button__block">
      <button class="button__block__item button__block__item_front">{{ $t("buttonHead.button") }}</button>
      <div class="button__block__icons">
        <div class="block__icons__item">
          <img src="../assets/img/paypal-light.svg" alt>
        </div>
        <div class="block__icons__item">
          <img src="../assets/img/master-card-dark.svg" alt>
        </div>
        <div class="block__icons__item">
          <img src="../assets/img/visa-dark.svg" alt>
        </div>
        <div class="block__icons__item">
          <img src="../assets/img/discover-dark.svg" alt>
        </div>
        <div class="block__icons__item">
          <img src="../assets/img/american-express-dark.svg" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonVcita",
  methods: {
    getLanguage: async function() {
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
@import "../assets/style/_button.scss";
</style>
