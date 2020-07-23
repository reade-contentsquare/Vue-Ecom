import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uniqid from 'uniqid'

const USER_ID = uniqid();

import Rollbar from 'rollbar';
Vue.prototype.$rollbar = new Rollbar({
  accessToken: '3c74899a68434b6cba74f76ba2482e66',
  captureUncaught: true,
  captureUnhandledRejections: true
});

import * as FullStory from '@fullstory/browser';
FullStory.init({ orgId: process.env['VUE_APP_FULLSTORY_ORG_ID'] });
Vue.prototype.$FullStory = FullStory;

Vue.config.errorHandler = (err, vm, info) => {
  vm.$rollbar.error(err);
  throw err;
};

Vue.config.productionTip = false
Vue.config.devtools = true

router.beforeEach((to, from, next) => {
	if(window._uxa) window._uxa.push(['trackPageview', to.name]);
  next();
})

new Vue({
  router, store,
  render: h => h(App),
  mounted() {
    window._uxa.push(["trackDynamicVariable", {key: 'user_id', value: USER_ID} ]);
    heap.identify(USER_ID);
    hj('identify', USER_ID)
    FullStory.identify(USER_ID)
  }
}).$mount('#app')
