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
  name: 'main',
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
