import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uniqid from 'uniqid'
import VueGtag, { pageview, set, config } from "vue-gtag";

const USER_ID = uniqid();
window._uxa = window._uxa || [];

Vue.use(VueGtag, {
  config: { id: process.env['VUE_APP_GA_ID'] }
});

import * as FullStory from '@fullstory/browser';
FullStory.init({ orgId: process.env['VUE_APP_FULLSTORY_ORG_ID'] });
Vue.prototype.$FullStory = FullStory;


Vue.config.errorHandler = (err, vm, info) => {
  window._uxa.push(['trackPageEvent', err['message']]);
  throw err;
};

router.beforeEach(async (to, from, next) => {
  pageview({
    page_title: to.name,
    page_path: to.path
  })
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
    setupGACSIntegration();
    setupOptimizeCSIntegration();
  }
}).$mount('#app')

function setupGACSIntegration() {
  const callback = () => {
    if (!disableCallback) {
      disableCallback = true;

      if (window.CS_CONF) {
        CS_CONF.integrations = CS_CONF.integrations || [];
        CS_CONF.integrations.push("Google Analytics");
      }
    }
  }

  var disableCallback = false;

  _uxa.push(["afterPageView", callback]);

  var cmk = null;
  var cn1 = "_cs_mk";
  var cn2 = "_cs_id";

  var cookies = "; " + document.cookie;
  if (cookies) {

    var getCookie1 = cookies.split("; " + cn1 + "=");
    var getCookie2 = cookies.split("; " + cn2 + "=");

    if (getCookie1.length > 1 && getCookie2.length > 1) return;

    const init = (cookieValue) => {
      cmk = Math.random() + "_" + Date.now();
      if (cookieValue) {
        cmk = cookieValue;
      }

      var tld = (function () {
        var i = 0,
          domain = document.domain,
          p = domain.split('.'),
          s = '_gd' + (new Date()).getTime();
        while (i < (p.length - 1) && document.cookie.indexOf(s + '=' + s) == -1) {
          domain = p.slice(-1 - (++i)).join('.');
          document.cookie = s + "=" + s + ";domain=" + domain + ";";
        }
        document.cookie = s + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + domain + ";";
        return domain;
      })();

      var now = new Date();
      var time = now.getTime();
      time += 30 * 60 * 1000;
      now.setTime(time);

      document.cookie = cn1 + "=" + cmk + "; expires=" + now.toUTCString() + ";path=/;domain=" + tld;

      _uxa.push(['trackDynamicVariable', {
        key: 'csMatchingKey',
        value: cmk
      }]);
    }

    if (getCookie1.length == 1) {
      init();
    } else {
      var getCookieValue = "";
      if (getCookie1) {
        getCookieValue = getCookie1[1].split(";")[0];
      }
      init(getCookieValue);
    }

  }

  set({
    "custom_map": {
      "dimension1": "csMatchingKey"
    }
  });
  //Google Analytics CS Integration End

  config({ "csMatchingKey": cmk });
}

function setupOptimizeCSIntegration() {

}
