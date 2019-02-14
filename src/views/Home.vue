<style lang="less">
  .home{
    width: 90%;
    min-width: 1000px;
    margin: 0 auto;
  }
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
  created () {
    console.info(this.$store.state)
  }
}
</script>
