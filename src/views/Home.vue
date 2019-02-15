<style lang="less">
  // .home{
  //   width: 90%;
  //   min-width: 1000px;
  //   margin: 0 auto;
  // }
</style>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg=msg />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App1(父组件传过来的值)'
    }
  },
  methods: {
    async goText () {
      return 'async 内部信息'
    },
    goTo (time) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve()
        }, time)
      })
    },
    async tt () {
      console.info('start') // 先执行
      await this.goTo(3000)
      console.info('end') // 等待3s再执行
    }
  },
  created () {
    this.tt()
    console.info(this.goText()) // 返回一个promose 对象
    this.goText().then(res => {
      console.info(res)
    }).catch(res => {
      console.info(res)
    })
    console.info(this.$store.state)
  }
}
</script>
