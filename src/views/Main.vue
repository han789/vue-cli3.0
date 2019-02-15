<style lang="less">
  .home{
    display: flex;
  }
</style>

<template>
  <div class="home">
    <headMenuNav :menuList=menuList />
    <router-view/>
  </div>
</template>

<script>

import headMenuNav from '@/components/menu.vue'
import { otherRouters } from '@/router/router'

export default {
  name: 'Main',
  components: {
    headMenuNav
  },
  data () {
    return {
      msg: ''
    }
  },
  computed: {
    menuList () {
      return otherRouters
    }
  },
  created () {

  }
}
</script>
