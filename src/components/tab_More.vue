<template>
  <div class="tabs__item item_4">
    <!-- <div class="tab__content"> -->
    <div class="tab__content__title">
      <p class="tab__content__title_large">Get more from your site with</p>
      <p class="tab__content__title_large">these vCita add-ons</p>
    </div>
    <div class="tab__content__active">
      <div class="tabs__row">
        <div class="tab__content">
          <div class="tab__active__title">
            <img class="addon__img" src="../assets/img/calendar.svg" alt>
            <div class="addon__description">
              <div class="addon__description_title">Scheduling Pro</div>
              <div class="addon__description_text">
                Invite visitors to schedule appointments, register for events / classes and
                more
              </div>
              <div class="addon__description_rate">
                <span class="rate__stars">++++*</span>
                <span class="rate_counter">(205)</span>
              </div>
            </div>
            <a href="#" class="button_blue button_small">+ Add</a>
          </div>
        </div>
      </div>
      <div class="tabs__row">
        <div class="tab__content">
          <div class="tab__active__title">
            <img class="addon__img" src="../assets/img/website.svg" alt>
            <div class="addon__description">
              <div class="addon__description_title">Contact Management + CRM</div>
              <div class="addon__description_text">
                Get everything your business needs to engage and communicate with your
                clients!
              </div>
              <div class="addon__description_rate">
                <span class="rate__stars">++++*</span>
                <span class="rate_counter">(1,428)</span>
              </div>
            </div>
            <a href="#" class="button_blue button_small">+ Add</a>
          </div>
        </div>
      </div>
      <div class="tabs__row last">
        <div class="tab__content">
          <div class="tab__active__title">
            <img class="addon__img" src="../assets/img/crm.svg" alt>
            <div class="addon__description">
              <div class="addon__description_title">Active Contact Form</div>
              <div
                class="addon__description_text"
              >Encourage visitors to take action and get MUCH more leads and customers</div>
              <div class="addon__description_rate">
                <span class="rate__stars">++++*</span>
                <span class="rate_counter">(205)</span>
              </div>
            </div>
            <a href="#" class="button_blue button_small">+ Add</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabMore",
  data: {
    visible: false
  }
};
</script>