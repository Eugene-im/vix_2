<template>
  <!-- <div class="form__main">
    <div class="wraper__main">
      <div class="content">
        <div class="main__about">
          <div class="about__logo"></div>
          <div class="about__description">
            <h2 class="description__title">vCita</h2>
            <div class="description__text">
              vCita is the #1 business management and client engagement app,
              designed to help small businesses grow.
            </div>
          </div>
        </div>
      </div>
    </div>

        <div >
          <div >Main</div>
          <div >Settings</div>
          <div class="block__item tab__item_3">Design</div>
          <div class="block__item tab__item_4">More</div>
          <div class="block__item tab__item_5">Support</div>
      </div>
      <div class="items__block">
        <div class="content">
          
        </div>
      </div>
    </div>
  </div>-->
  <!-- ******* -->

  <!-- <template> -->
  <div class="form__main">
    <div class="wraper__main">
            <div class="content">
                <div class="main__about">
                    <img class="about__logo" src="../assets/img/v.svg" />
                    <div class="about__description">
                        <h2 class="description__title">vCita</h2>
                        <div class="description__text">{{ $t("settings.vcitaDescription") }}</div>
                    </div>
                </div>
            </div>
        </div>

    <div class="tabs__main">
      <div class="content">
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
  data: {
    item1: {
      visible: true
    },
    item2: {
      visible: false
    },
    item3: {
      visible: false
    },
    item4: {
      visible: false
    },
    item5: {
      visible: false
    }
  },
  methods: {
    click: function() {
      console.log(this);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/style/_global.scss";
@import "../assets/style/_specialTabs.scss";
</style>
