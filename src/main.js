import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uniqid from 'uniqid'

const USER_ID = uniqid();
window._uxa = window._uxa || [];

import * as FullStory from '@fullstory/browser';
FullStory.init({ orgId: process.env['VUE_APP_FULLSTORY_ORG_ID'] });
Vue.prototype.$FullStory = FullStory;

Vue.config.errorHandler = (err, vm, info) => {
  window._uxa.push(['trackPageEvent', err['message']]);
  throw err;
};

router.beforeEach(async (to, from, next) => {
  gtag('event', 'page_view', {
    page_title: to.name,
    page_location: location.href,
    page_path: to.path
  });
  window._uxa.push(['trackPageview', to.name]);
  next();
})

async function _getAdvice() {
  let response = await fetch(`http://api.icndb.com/jokes/random`);
}

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router, store,
  render: h => h(App),
  mounted() {
    window._uxa.push(["trackDynamicVariable", {key: 'user_id', value: USER_ID} ]);
    window._uxa.push(['trackPageEvent', `Logged In ID:${USER_ID}`]);
    FullStory.identify(USER_ID)
  }
}).$mount('#app')