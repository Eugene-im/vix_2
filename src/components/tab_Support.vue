<template>
  <div class="tabs__item item_5">
    <div class="tab__content">
      <div class="tab__content__title">
        <p class="tab__content__title_large">Ask Us Anything</p>
      </div>
      <div class="tab__content__active">
        <div class="tab__userblock">
          <a href="#" class="userblock__item">
            <img class="userblock__item__img" src="../assets/img/envelopes.svg" alt>
            <div class="userblock__item__text">Send us a feedback</div>
          </a>
          <a href="#" class="userblock__item">
            <img class="userblock__item__img" src="../assets/img/computer-invite-to-client-portal.svg" alt>
            <div class="userblock__item__text">Read our FAQ</div>
          </a>
        </div>
      </div>
      <div class="tab__content__title">
        <p class="tab__content__title_large">Ask Us Anything</p>
      </div>
      <div class="tab__content__active">
        <!-- active part here -->
        <div class="tab__userblock_reit">
          <span class="rating">
            <input type="radio" class="rating-input" id="rating-input-1-5" name="rating-input-1">
            <label for="rating-input-1-5" class="rating-star"></label>
            <input type="radio" class="rating-input" id="rating-input-1-4" name="rating-input-1">
            <label for="rating-input-1-4" class="rating-star"></label>
            <input type="radio" class="rating-input" id="rating-input-1-3" name="rating-input-1">
            <label for="rating-input-1-3" class="rating-star"></label>
            <input type="radio" class="rating-input" id="rating-input-1-2" name="rating-input-1">
            <label for="rating-input-1-2" class="rating-star"></label>
            <input type="radio" class="rating-input" id="rating-input-1-1" name="rating-input-1">
            <label for="rating-input-1-1" class="rating-star"></label>
          </span>
          <div class="reit__text">
            <div class="text_poor">Poor</div>
            <div class="text__ex">Excelent</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabSupport",
  data: {
    visible: false
  }
};
</script>