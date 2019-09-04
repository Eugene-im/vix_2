<template>
  <div class="tabs__item item_3">
    <div class="tab__content">
      <div class="tab__content__title">
        <p class="tab__content__title_large">Design Your Button</p>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title">Button will be used for</div>
        <div class="tabs__input_radio_horizontal">
          <div class="tabs__input__variants_button-text">
            <input type="radio" name="payment__method" id="Pay">
            <label class="input__variant" for="Pay">Pay</label>
            <div class="button__block__item">Pay</div>
          </div>
          <div class="tabs__input__variants_button-text">
            <input type="radio" name="payment__method" id="Buy">
            <label class="input__variant" for="Buy">Buy</label>
            <div class="button__block__item">Buy</div>
          </div>
          <div class="tabs__input__variants_button-text">
            <input type="radio" name="payment__method" id="Donate">
            <label class="input__variant" for="Donate">Donate</label>
            <div class="button__block__item">Donate</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title">Language</div>
        <div class="tabs__input_select">
          <select name id>
            <option selected="selected" value="val1">val1</option>
            <option value="val2">val2</option>
          </select>
        </div>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title">
          Free text
          <span class="tab__active__title_small">(Optinal)</span>
        </div>
        <div class="tabs__input_text">
          <input type="text" placeholder="text">
        </div>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title_checkbox">
          <span>
            <input type="checkbox" name="payment__method" id="paypal2">
            <label class="input__variant" for="paypal2">Use PayPal icon on button</label>
          </span>
          <img src="../assets/img/paypal.svg" alt>
        </div>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title_checkbox">
          <span>
            <input type="checkbox" name="payment__method" id="wixColor">
            <label class="input__variant" for="wixColor">Use your Wix color scheme</label>
          </span>
        </div>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title">Credit card icons</div>
        <div class="tabs__input_checkbox">
          <p class="tabs__input__variants_ch">
            <span>
              <input type="checkbox" id="ae">
              <label class="input__variant" for="ae">American Express</label>
            </span>
            <img src="../assets/img/american-express-dark_x2.svg" alt>
          </p>
          <p class="tabs__input__variants_ch">
            <span>
              <input type="checkbox" id="dis">
              <label class="input__variant" for="dis">Discover</label>
            </span>
            <img src="../assets/img/discover-dark_x2.svg" alt>
          </p>
          <p class="tabs__input__variants_ch">
            <span>
              <input type="checkbox" id="visa">
              <label class="input__variant" for="visa">Visa</label>
            </span>
            <img src="../assets/img/visa-dark_x2.svg" alt>
          </p>
          <p class="tabs__input__variants_ch">
            <span>
              <input type="checkbox" id="mc">
              <label class="input__variant" for="mc">Master Card</label>
            </span>
            <img src="../assets/img/master-card-dark_x2.svg" alt>
          </p>
          <p class="tabs__input__variants_ch">
            <span>
              <input type="checkbox" id="paypal">
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
                                Not happy with your desing?
                                <img src="#" alt="arrow">
                            </div>
                        </div>
    </div>-->
    <div class="tabs__row last">
      <div class="tab__content">
        <div class="tabs__input_text_reset">
          Not happy with your desing?
          <span class="button_reset">Reset button</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabDesign",
  data: {
    visible: false
  }
};
</script>