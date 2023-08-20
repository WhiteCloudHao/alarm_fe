import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/calendar/Calendar.vue'),
    meta: {
      title: 'Calendar',
    },
  },
  {
    path: '/stat',
    name: 'statistics',
    component: () => import('../views/statistic/Statistic.vue'),
    meta: {
      title: 'Statistic',
    },
  },
  // setting
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/setting/SettingView.vue'),
    meta: {
      title: 'Setting',
    },
    //   children: [
    //   {
    //     path: '/appearance',
    //     component:() =>
    //       import("../views/setting/AppearanceView.vue"),
    //     meta: {
    //       title: 'Appearance',
    //     },
    //   },
    // ]
  },
  {
    path: '/setting/appearance',
    name: 'appearance',
    component: () => import('../views/setting/AppearanceView.vue'),
    meta: {
      title: 'Apearance',
    },
  },
  {
    path: '/setting/sound-and-notification',
    name: 'soundAndNotification',
    component: () => import('../views/setting/SoundAndNotificationView.vue'),
    meta: {
      title: 'Sound and Notification',
    },
  },
  {
    path: '/setting/date-and-time',
    name: 'dateAndTime',
    component: () => import('../views/setting/DateAndTimeView.vue'),
    meta: {
      title: 'Date & Time',
    },
  },
  {
    path: '/setting/general',
    name: 'General',
    component: () => import('../views/setting/GeneralView.vue'),
    meta: {
      title: 'General',
    },
  },
  {
    path: '/setting/help-and-feedback',
    name: 'helpAndFeedback',
    component: () => import('../views/setting/HelpAndFeedbackView.vue'),
    meta: {
      title: 'Help & Feedback',
    },
  },
  {
    path: '/setting/follow-us',
    name: 'followUs',
    component: () => import('../views/setting/FollowUsView.vue'),
    meta: {
      title: 'Follow Us',
    },
  },
  {
    path: '/setting/about',
    name: 'settingAbout',
    component: () => import('../views/setting/AboutView.vue'),
    meta: {
      title: 'About',
    },
  },
  // {
  //   path: '/setting/change-password',
  //   name: 'about',
  //   component: () => import('../views/setting/ChangePasswordView.vue'),
  //   meta: {
  //     title: 'Change Password',
  //   },
  // },
  // auth
  {
    path: '/setting/change-password',
    name: 'changePassword',
    component: () => import('../views/setting/ChangePasswordView.vue'),
    meta: {
      title: 'Change Password',
    },
  },
  // auth
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('../views/auth/LoginView.vue'),
  },
  {
    path: '/auth/register',
    name: 'register',
    component: () => import('../views/auth/RegisterView.vue'),
  },
  {
    path: '/auth/forget-password',
    name: 'forgetPassword',
    component: () => import('../views/auth/ForgetPassword.vue'),
  },
  {
    path: '/reminder/detail',
    name: 'detailRemiders',
    component: () => import('../views/reminder/ReminderDetail.vue'),
    meta: {
      title: 'Inbox',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
