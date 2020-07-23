import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';

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
	// eslint-disable-next-line
	console.log("HERE", err, info, vm.$rollbar)
  vm.$rollbar.error(err);
  throw err; // rethrow
};

Vue.config.productionTip = false
Vue.config.devtools = true

router.beforeEach((to, from, next) => {
	if(window._uxa) window._uxa.push(['trackPageview', to.name]);
  next();
})

new Vue({
  router, store,
  render: h => h(App)
}).$mount('#app')
