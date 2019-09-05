<template>
    <div class="form__main">
      <div class="wraper__main">
        <div class="content">
          <div class="main__about">
            <img class="about__logo" src="../assets/img/v.svg" @click="click()">
            <div class="about__description">
              <h2 class="description__title">vCita</h2>
              <div class="description__text">{{ $t("settings.vcitaDescription") }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="tabs__main">
        <tabs>
          <tab class="block__item tab__item_1" title="Main">
            <tabMain/>
          </tab>
          <tab class="block__item tab__item_2" title="Settings">
            <tabSettings/>
          </tab>
          <tab class="block__item tab__item_3" title="Design">
            <tabDesign/>
          </tab>
          <tab class="block__item tab__item_4" title="More">
            <tabMore/>
          </tab>
          <tab class="block__item tab__item_5" title="Support">
            <tabSupport/>
          </tab>
        </tabs>
      </div>
      <div class="tabs__footer">
        <p>You are logged in to vCita payments as:</p>
        <p class="who__email">baruch@dego.com</p>
      </div>
    </div>
</template>

<script>
import { Tabs, Tab } from "vue-slim-tabs";
import tabMain from "@/components/tab_main.vue";
import tabSettings from "@/components/tab_Settings.vue";
import tabDesign from "@/components/tab_Design.vue";
import tabMore from "@/components/tab_More.vue";
import tabSupport from "@/components/tab_Support.vue";


export default {
  name: "Settings",
  components: {
    Tabs,
    Tab,
    tabMain,
    tabSettings,
    tabDesign,
    tabMore,
    tabSupport
  },
  data: {},
  methods: {
    click: function() {}
  }
};
</script>

<style lang="scss">
@import "../assets/style/_global.scss";
@import "../assets/style/_specialTabs.scss";
</style>
