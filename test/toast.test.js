const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props', function () {
    it('接受 autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('接受 closeButton', () => {
      const callback = sinon.fake();
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback,
          },
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      closeButton.click()
      expect(callback).to.have.been.called
    })
    it('接受 enableHtml', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: { enableHtml: true }
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('接受 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })

  describe('CSS', function () {
    it('line 的高度', (done) => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'middle',
          closeButton: {
            text: '已充值',
            callback() {
              console.log('他说已经充值智商了！')
            }
          },
          autoClose: false,
        }
      }).$mount()
      document.body.appendChild(vm.$el) 
      setTimeout(()=>{
        console.log(vm.$el.outerHTML)
        expect(vm.$refs.line.style.height).to.eq(`${vm.$refs.toast.getBoundingClientRect().height}px`)
        done()
        vm.$el.remove()
        vm.$destroy()
      })
    })
  })
})