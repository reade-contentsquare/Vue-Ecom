import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uniqid from 'uniqid'

const USER_ID = uniqid();
window._uxa = window._uxa || [];

// import Rollbar from 'rollbar';
// Vue.prototype.$rollbar = new Rollbar({
//   accessToken: '3c74899a68434b6cba74f76ba2482e66',
//   captureUncaught: true,
//   captureUnhandledRejections: true
// });

import * as FullStory from '@fullstory/browser';
FullStory.init({ orgId: process.env['VUE_APP_FULLSTORY_ORG_ID'] });
Vue.prototype.$FullStory = FullStory;

import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
Sentry.init({
  dsn: `${process.env['VUE_APP_SENTRY_URL']}`,
  integrations: [new VueIntegration({Vue, attachProps: true, logErrors: true})],
});

import rg4js from 'raygun4js';
console.log(process.env['VUE_APP_RAYGUN_API_KEY'])
rg4js('enableCrashReporting', true);
rg4js('apiKey', process.env['VUE_APP_RAYGUN_API_KEY']);

import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'
Bugsnag.start({
  apiKey: process.env['VUE_APP_BUGSNAG_API_KEY'],
  plugins: [new BugsnagPluginVue()],
  user: { id: USER_ID }
})

Vue.config.errorHandler = (err, vm, info) => {
  // vm.$rollbar.error(err);
  rg4js('send', err);
  Bugsnag.notify(err)
  throw err;
};

router.beforeEach(async (to, from, next) => {
	window._uxa.push(['trackPageview', to.name]);
  rg4js('trackEvent', { type: 'pageView', path: to.name });
  // _getAdvice()
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
    heap.identify(USER_ID);
    hj('identify', USER_ID)
    FullStory.identify(USER_ID)
    rg4js('setUser', { identifier: USER_ID, isAnonymous: false });
  }
}).$mount('#app')
