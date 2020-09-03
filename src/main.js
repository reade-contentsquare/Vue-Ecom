import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uniqid from 'uniqid'

const USER_ID = uniqid();
window._uxa = window._uxa || [];

window.lpTag = window.lpTag || {};
lpTag.sdes = lpTag.sdes||[];


Vue.config.errorHandler = (err, vm, info) => {
  throw err;
};

router.beforeEach(async (to, from, next) => {
	window._uxa.push(['trackPageview', to.name]);
  window._uxa.push(['trackPageEvent', 'kek9xve7']);
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
    window._uxa.push(['trackPageEvent', 'Logged In']);

    lpTag.events.bind('lpUnifiedWindow', 'state', state => {
      console.log("STATE", state)
      console.log("IS RECORDING", _uxa.push(['isRecording']))
      console.log("SESSION DATA", _uxa.push(["getSessionData"]))

      let { projectId, userId, sessionNumber, pageNumber } = _uxa.push(["getSessionData"]);
      let lpSde;
      // if (projectId && userId && sessionNumber && pageNumber) {
      //   lpSde = {
      //       "type": "ctmrinfo",
      //       "info": {
      //         "customerId": userId,
      //         "socialId": `https://app.contentsquare.com/quick-playback/index.html?pid=${projectId}&uu=${userId}&sn=${sessionNumber}&pvid=${pageNumber}&recordingType=cs`,
      //         "userName": "Reade Test"
      //       }
      //   }
      // } else {
        lpSde = {
            "type": "ctmrinfo",
            "info": {
              "customerId": '10440484441693187854',
              "socialId": 'https://app.contentsquare.com/#/session-replay/new/sk-10440484441693187854,1/pageview/1?project=3838',
              "userName": "Reade Test"
            }
        }
      // }

      lpTag.sdes.push(lpSde);
    })

  }
}).$mount('#app')
