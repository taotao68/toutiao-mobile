import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式
import './styles/index.scss';

Vue.config.productionTip = false

// 创建vue实例，将router,store配置到跟组件
// 把APP根组件渲染到#app节点上
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
