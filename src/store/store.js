import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  // 组件中通过 this.$store.state.username 调用
  state: {
    username: Cookie.get('username'),
    token: Cookie.get('token'),
    apiList: {
      auth: 'http://api.luffy.com:8000/v1/auth/',
      courses: 'http://api.luffy.com:8000/v1/courses/',
      pricePolicy: 'http://api.luffy.com:8000/v1/price_policy/',
      shopCar: 'http://api.luffy.com:8000/v1/shop_car/',
    }
  },
  getters: {
    // 组件中通过 this.$store.getters.uuuu 调用
    isLogin: function (state) {
      return state.token;
    },
    ooo: function () {
      return 999
    }

  },
  mutations: {
    // 组件中通过 this.$store.commit(参数)  调用
    saveToken: function (state, userToken) {
      state.username = userToken.name;
      Cookie.set("username", userToken.name, "20min")
      Cookie.set("token", userToken.token, "20min")

    },
    clearToken: function (state) {
      state.username = null
      Cookie.remove('username')
      Cookie.remove('token')

    }
  },
  actions: {
    actionFunc1(context, params) {
      // context.commit('isLogin')

    },
    actionFunc2({commit}, params) {
      // context.commit('isLogin')
    }
  },
  modules: {
    a: {
      state: {},
      getters: {}
    },
    b: {
      state: {},
      getters: {}
    }
  }
})
