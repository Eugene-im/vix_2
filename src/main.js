import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import ruLocale from './locales/ru'
import enLocale from './locales/en'
import ukLocale from './locales/uk'
import lang from './config'
Vue.config.productionTip = false
Vue.use(VueI18n);

// var language = null;

const messages = {
  ru: ruLocale,
  uk: ukLocale,
  en: enLocale
}

const i18n = new VueI18n({
  locale: lang.locale, // set locale
  messages// set locale messages
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
