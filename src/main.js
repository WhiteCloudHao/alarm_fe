import '@/assets/style/main.css';
import '@/assets/style/animation.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SvgIcon from 'vue-svgicon';
import Vuelidate from 'vuelidate';
import VueMask from 'v-mask';
Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(SvgIcon, {
  tagName: 'svgicon',
});
import VCalendar from 'v-calendar';
Vue.use(VueMask);
import onClickOutside from './directives/onClickOutside';

Vue.directive('on-click-outside', onClickOutside);
Vue.use(VCalendar, {});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
