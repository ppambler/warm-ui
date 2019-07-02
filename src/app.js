import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  },
  created() {
    // 自定义change事件，3s后触发，至此inputChange就会被执行。
    // 去掉index.html之前的其它input组件测试代码，是为了保证在 #app里边找到唯一的input元素，好让下边的代码执行。
    setTimeout(() => {
      let event = new Event('change');
      let inputElement = this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      console.log('hi')
    }, 3000)
  },
  methods: {
    inputChange(e) {
      console.log(e)
    }
  }
})

