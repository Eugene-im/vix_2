<template>
  <div class="tabs__item item_3">
    <div class="tab__content">
      <div class="tab__content__title">
        <p class="tab__content__title_large">{{ $t("designTab.callToDesign") }}</p>
      </div>
    </div>
    <!-- <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title">{{ $t("designTab.kindOfButtonText") }}</div>
        <div class="tabs__input_radio_horizontal">
          <div class="tabs__input__variants_button-text">
            <input
              checked
              @click="emitGlobalClickEvent"
              :value="$t('designTab.buttonVariantSelfService')"
              type="radio"
              name="payment__method"
              id="Pay"
            >
            <label
              class="input__variant"
              for="Pay"
            >{{ $t("designTab.buttonVariantLabelSelfService") }}</label>
            <div class="button__block__item button_square">
              <div class="button__block__item__text">{{ $t("designTab.buttonVariantSelfService") }}</div>
            </div>
          </div>
          <div class="tabs__input__variants_button-text">
            <input
              @click="emitGlobalClickEvent"
              :value="$t('designTab.buttonVariantSelfProducts')"
              type="radio"
              name="payment__method"
              id="Buy"
            >
            <label
              class="input__variant"
              for="Buy"
            >{{ $t("designTab.buttonVariantLabelSelfProducts") }}</label>
            <div class="button__block__item button_square">
              <div class="button__block__item__text">{{ $t("designTab.buttonVariantSelfProducts") }}</div>
            </div>
          </div>
          <div class="tabs__input__variants_button-text">
            <input
              @click="emitGlobalClickEvent"
              :value="$t('designTab.buttonVariantDonate')"
              type="radio"
              name="payment__method"
              id="Donate"
            >
            <label
              class="input__variant"
              for="Donate"
            >{{ $t("designTab.buttonVariantLabelDonate") }}</label>
            <div class="button__block__item button_square">
              <div class="button__block__item__text">{{ $t("designTab.buttonVariantDonate") }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title">{{ $t("designTab.chooseLang") }}</div>
        <div class="tabs__input_select">
          <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" selected>{{ lang }}</option>
          </select>
        </div>
      </div>
    </div>-->
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title">
          {{ $t("designTab.freeText") }}
          <!-- <span
            class="tab__active__title_small"
          >({{ $t("designTab.optional") }})</span>-->
        </div>
        <div class="tabs__input_text">

          <input id="text" v-on:keyup="ax" v-model="message" type="text" placeholder="text">
        </div>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title_checkbox">
          <span>
            <input
              @click="ax"
              type="checkbox"
              name="payment__method"
              id="paypal2"
              :checked="paypal2 == 1"
              value="paypal2"
            >
            <label class="input__variant" for="paypal2">{{ $t("designTab.usePP") }}</label>
          </span>
          <img src="../assets/img/paypal.svg" alt>
        </div>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title_checkbox">
          <span>
            <input
              @click="ax"
              value="wixColor"
              type="checkbox"
              name="payment__method"
              id="wixColor"
            >
            <label class="input__variant" for="wixColor">{{ $t("designTab.useWixColorSheme") }}</label>
          </span>
        </div>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title">{{ $t("designTab.creditCardIcons") }}</div>
        <div class="tabs__input_checkbox">
          <p class="tabs__input__variants_ch">
            <span>
              <input
                type="checkbox"
                id="ae"
                ref="americanExpress"
                :checked="ae == 1"
                @click="ax"
              >
              <label class="input__variant" for="ae">American Express</label>
            </span>
            <img src="../assets/img/american-express-dark_x2.svg" alt>
          </p>
          <p class="tabs__input__variants_ch">
            <span>
              <input
                type="checkbox"
                id="dis"
                value="dis"
                ref="discover"
                :checked="dis == 1"
                @click="ax"
              >
              <label class="input__variant" for="dis">Discover</label>
            </span>
            <img src="../assets/img/discover-dark_x2.svg" alt>
          </p>
          <p class="tabs__input__variants_ch">
            <span>
              <input
                type="checkbox"
                id="visa"
                value="visa"
                ref="Visa"
                :checked="visa == 1"
                @click="ax"
              >
              <label class="input__variant" for="visa">Visa</label>
            </span>
            <img src="../assets/img/visa-dark_x2.svg" alt>
          </p>
          <p class="tabs__input__variants_ch">
            <span>
              <input
                type="checkbox"
                id="mc"
                value="mc"
                ref="masterCard"
                :checked="mc == 1"
                @click="ax"
              >
              <label class="input__variant" for="mc">Master Card</label>
            </span>
            <img src="../assets/img/master-card-dark_x2.svg" alt>
          </p>
          <p class="tabs__input__variants_ch">
            <span>
              <input
                type="checkbox"
                id="paypal"
                value="paypal"
                ref="payPal"
                :checked="paypal == 1"
                @click="ax"
              >
              <label class="input__variant" for="paypal">PayPal</label>
            </span>
            <img src="../assets/img/paypal-light_x2.svg" alt>
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="tabs__row">
                        <div class="tab__content">
                            <div class="tabs__input_text_reset">
                                Not happy with your design?
                                <img src="#" alt="arrow">
                            </div>
                        </div>
    </div>-->
    <div class="tabs__row last">
      <div class="tab__content">
        <div class="tabs__input_text_reset">
          {{ $t("designTab.askResetFrase") }}
          <button
            id="reset"
            class="button_reset"
            @click="ax"
            value="reset"
          >{{ $t("designTab.resetButton") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import lang from '../../config'

import axios from "axios";
import { EventBus } from "../event-bus.js";

export default {
  name: "tabDesign",
  data() {
    return {
      visible: false,
      message: "",
      Count: 0,
      langs: ["en", "ru", "uk"],
      ae: "0",
      visa: "0",
      mc: "0",
      paypal: "0",
      dis: "0",
      imgButton: "0",
      paypal2: "0",
      buttonText: "Pay"
    };
  },
  methods: {
    ax(event) {
      var json2 = {
        ae: "0",
        visa: "0",
        mc: "0",
        paypal: "0",
        dis: "0",
        imgButton: "0",
        paypal2: "0",
        buttonText: "Pay"
      };

      if (event.target.checked && event.target.id == "ae") {
        localStorage.ae = 1;
      } else if (event.target.checked && event.target.id == "dis") {
        localStorage.dis = 1;
      } else if (event.target.checked && event.target.id == "paypal") {
        localStorage.paypal = 1;
      } else if (event.target.checked && event.target.id == "visa") {
        localStorage.visa = 1;
      } else if (event.target.checked && event.target.id == "mc") {
        localStorage.mc = 1;
      } else if (event.target.checked == false && event.target.id == "ae") {
        localStorage.ae = 0;
      } else if (event.target.checked == false && event.target.id == "dis") {
        localStorage.dis = 0;
      } else if (event.target.checked == false && event.target.id == "paypal") {
        localStorage.paypal = 0;
      } else if (event.target.checked == false && event.target.id == "visa") {
        localStorage.visa = 0;
      } else if (event.target.checked == false && event.target.id == "mc") {
        localStorage.mc = 0;
      } else if (
        event.target.id == "Pay" ||
        event.target.id == "Buy" ||
        event.target.id == "Donate" ||
        (event.target.id == "text" && event.target.value != "")
      ) {
        console.log('yes', event.target.value);
        localStorage.buttonText = event.target.value;
        // json2.imgButton = null;
      } else if (event.target.id == "text" && event.target.value == "") {
        localStorage.buttonText = "Pay";
        // json2.imgButton = null;
      } else if (event.target.id == "reset") {
        json2.event.targetet();
      } else if (event.target.checked && event.target.id == "paypal2") {
        localStorage.imgButton = 1;
        // json2.buttonText = "";
      } else if (!event.target.checked && event.target.id == "paypal2") {
        localStorage.imgButton = 0;
        // json2.buttonText = "Pay";
      }
      //
      // axios
      //   .post("http://localhost:8000/save", json2)
      //   .then(function(response) {
      //     console.log(response);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    }
    // emitGlobalClickEvent(event) {
    //   // Send the event on a channel (i-got-clicked) with a payload (the click count.)
    //   EventBus.$emit("clicked-event", {
    //     id: event.target.id,
    //     checked: event.target.checked,
    //     value: event.target.value
    //   });
    // }
  },
  mounted() {
    // axios
    //   .get(`http://localhost:8000/read`)
    //   .then(response => {
    //     // JSON responses are automatically parsed.
    //     console.log(response.data);
    //     // this.posts = response.data
    //     (this.ae = response.data.ae),
    //       (this.visa = response.data.visa),
    //       (this.mc = response.data.mc),
    //       (this.paypal = response.data.paypal),
    //       (this.dis = response.data.dis),
    //       (this.imgButton = response.data.imgButton),
    //       (this.paypal2 = response.data.paypal2),
    //       (this.buttonText = response.data.buttonText);
    //     // console.log(this.json2);
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
  }
};
</script>
