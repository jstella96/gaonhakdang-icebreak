import Vue from 'vue'
import VueRouter from 'vue-router'

//router에 연결할 component
import mainPage from '@/page/mainPage.vue'
import talkCardPage from '@/page/talkCardPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
      {
          path: "/", // 경로
          name: "mainPage", // 해당 경로의 이름 
          component: mainPage // 이동할 컴포넌트
      },
      {
        path: "/talkcard", // 경로
        name: "talkCardPage", // 해당 경로의 이름 
        component: talkCardPage // 이동할 컴포넌트
    },
    ]
  })