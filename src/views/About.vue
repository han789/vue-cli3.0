<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="success">测试</Button>
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
      api.getList().then(data => {
        console.info(data)
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>
