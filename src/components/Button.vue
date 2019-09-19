<template>
  <div class="button__wrapper">
    <a href="/#/" style="text-decoration: none" class="call-settings__block">
      <!--<a href="/#/settings" style="text-decoration: none" class="call-settings__block">-->
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
      <button class="button__block__item button__block__item_front">
        <img src="../assets/img/paypal.svg" v-if="imgButton == 1" alt>
        <div>{{ buttonText }}</div>
      </button>
      <div class="button__block__icons">
        <div class="block__icons__item" v-if="paypal == 1">
          <img src="../assets/img/paypal-light.svg" alt>
        </div>
        <div class="block__icons__item" v-if="mc == 1">
          <img src="../assets/img/master-card-dark.svg" alt>
        </div>
        <div class="block__icons__item" v-if="visa == 1">
          <img src="../assets/img/visa-dark.svg" alt>
        </div>
        <div class="block__icons__item" v-if="dis == 1">
          <img src="../assets/img/discover-dark.svg" alt>
        </div>
        <div class="block__icons__item" v-if="ae == 1">
          <img src="../assets/img/american-express-dark.svg" alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import tabDesign from "./tab_Design";
import { EventBus } from "../event-bus.js";
export default {
  name: "ButtonVcita",
  props: ["checkboxes"],
  data() {
    return {
      currentStatus: null,
      ae: null,
      visa: null,
      mc: null,
      paypal: null,
      dis: null,
      imgButton: null,
      buttonText: "Pay",
      question: localStorage.ae
    };
  },
  methods: {
    getLanguage: async function() {
      // axios.get('URL').then(
      //  res => {
      //    k
      //  }
      // );
    },
    reset: function() {
      (this.currentStatus = null),
      (this.ae = null),
      (this.visa = null),
      (this.mc = null),
      (this.paypal = null),
      (this.dis = null),
      (this.imgButton = null),
      (this.buttonText = "Pay");
    },
    checkLocal: function () {
      setInterval(() => {
        this.ae = localStorage.ae ;
        this.currentStatus = localStorage.currentStatus ;
        this.visa = localStorage.visa ;
        this.mc = localStorage.mc ;
        this.paypal = localStorage.paypal ;
        this.dis = localStorage.dis ;
        this.imgButton = localStorage.imgButton ;
        this.buttonText =  localStorage.buttonText || 'Pay' ;
      }, 500);
    }
  },
  mounted () {
    // axios
    //   .get(`http://localhost:8000/read`)
    //   .then(response => {
    //     // JSON responses are automatically parsed.
    //     console.log(response.data);
    //     // this.posts = response.data
    //     (this.ae = response.data.ae),
    //     (this.visa = response.data.visa),
    //     (this.mc = response.data.mc),
    //     (this.paypal = response.data.paypal),
    //     (this.dis = response.data.dis),
    //     (this.imgButton = response.data.imgButton),
    //     (this.buttonText = response.data.buttonText || "Pay");
    //   })
    //   .catch(e => {
    //     this.errors.push(e);
    //   });
    this.checkLocal();

    EventBus.$on("clicked-event", res => {
      console.log(res);
      if (res.checked && res.id == "ae") {
        this.ae = 1;
      } else if (res.checked && res.id == "dis") {
        this.dis = 1;
      } else if (res.checked && res.id == "paypal") {
        this.paypal = 1;
      } else if (res.checked && res.id == "visa") {
        this.visa = 1;
      } else if (res.checked && res.id == "mc") {
        this.mc = 1;
      } else if (res.checked == false && res.id == "ae") {
        this.ae = 0;
      } else if (res.checked == false && res.id == "dis") {
        this.dis = 0;
      } else if (res.checked == false && res.id == "paypal") {
        this.paypal = 0;
      } else if (res.checked == false && res.id == "visa") {
        this.visa = 0;
      } else if (res.checked == false && res.id == "mc") {
        this.mc = 0;
      } else if (
        res.id == "Pay" ||
        res.id == "Buy" ||
        res.id == "Donate" ||
        (res.id == "text" && res.value != "")
      ) {
        this.buttonText = res.value;
        // this.imgButton = null;
      } else if (res.id == "text" && res.value == "") {
        this.buttonText = "Pay";
        // this.imgButton = null;
      } else if (res.id == "reset") {
        this.reset();
      } else if (res.checked && res.id == "paypal2") {
        this.imgButton = 1;
        // this.buttonText = "";
      } else if (!res.checked && res.id == "paypal2") {
        this.imgButton = 0;
        // this.buttonText = "Pay";
      }
    });
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      console.log('yex');
    }
  }
};
</script>

<style lang="scss">
@import "../assets/style/_button.scss";
</style>
