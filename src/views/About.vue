<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="success" @click="goList">测试</Button>
  </div>
</template>

<script>
import api from 'api'
export default {
  data () {
    return {

    }
  },
  methods: {
    getList () {
      api.getList().then((data) => {
        console.info(data)
      })
    },
    goList () {
      this.$router.push({
        path: '/other'
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>
