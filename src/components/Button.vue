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
        <div class="block__icons__item" >
          <img src="../assets/img/paypal-light.svg" v-if="currentStatus && currentId == 'ae'" alt>
        </div>
        <div class="block__icons__item" >
          <img src="../assets/img/master-card-dark.svg" v-if="currentStatus && currentId == 'dis'" alt>
        </div>
        <div class="block__icons__item">
          <img src="../assets/img/visa-dark.svg" v-if="currentStatus && currentId == 'visa'" alt>
        </div>
        <div class="block__icons__item">
          <img src="../assets/img/discover-dark.svg" v-if="currentStatus && currentId == 'mc'" alt>
        </div>
        <div class="block__icons__item">
          <img src="../assets/img/american-express-dark.svg" v-if="currentStatus && currentId == 'paypal'" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tabDesign from "./tab_Design";
import { EventBus } from "../event-bus.js";
export default {
  name: "ButtonVcita",
  props: ["checkboxes"],
  data() {
    return {
      currentStatus: null,
      currentId: null,
    }
  },
  methods: {
    getLanguage: async function() {
      // axios.get('URL').then(
      //  res => {
      //    k
      //  }
      //);
    }
  },
  mounted() {
    // Listen for the 'clicked-event' and its payload.
    EventBus.$on("clicked-event", res => {
      this.currentStatus = res.checked;
      this.currentId = res.id;
      console.log(this.currentId, this.currentStatus);
    });
  }
};
</script>


<style lang="scss">
@import "../assets/style/_button.scss";
</style>
