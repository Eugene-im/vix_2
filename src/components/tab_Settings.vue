<template>
  <div class="tabs__item item_2">
    <div class="tab__content">
      <div class="tab__content__title">
        <p class="tab__content__title_large">Online Payments Settings</p>
        <p class="tab__content__title_small">Online Payments Settings</p>
      </div>
      <div class="tab__content__active">
        <a href="#" class="button_blue button_big">Connect Payment Gateway</a>
      </div>
    </div>

    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title">Get payments with</div>
        <div class="tabs__input_radio">
          <p class="tabs__input__variants">
            <input type="radio" name="payment__method" id="PP">
            <label class="input__variant" for="PP">PayPall</label>
          </p>
          <p class="tabs__input__variants">
            <input type="radio" name="payment__method" id="St">
            <label class="input__variant" for="St">Stripe</label>
          </p>
          <p class="tabs__input__variants">
            <input type="radio" name="payment__method" id="Sq">
            <label class="input__variant" for="Sq">Square</label>
          </p>
        </div>
      </div>
    </div>
    <div class="tabs__row">
      <div class="tab__content">
        <div class="tab__active__title">Get payments with</div>
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
          Product name
          <span class="tab__active__title_small">(Optinal)</span>
        </div>
        <div class="tabs__input_text">
          <input type="text" placeholder="text">
        </div>
      </div>
    </div>
    <div class="tabs__row last">
      <div class="tab__content">
        <div class="tab__active__title">
          Product price
          <span class="tab__active__title_small">(Optinal)</span>
        </div>
        <div class="tabs__input_text">
          <input type="text" placeholder="text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabSettings",
  data: {
    visible: false
  }
};
</script>
