<style lang="less">
    @import "./login.less";
</style>
<template>
  <div class="login">
    <Card>
      <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="用户名:" prop="name">
            <Input v-model="formValidate.name" placeholder="用户名:"></Input>
        </FormItem>
        <FormItem label="密码:" prop="pass">
            <Input v-model="formValidate.pass" placeholder="密码:"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
        </FormItem>
    </Form>
    </Card>
  </div>
</template>

<script>
import { ptn } from '../../utils/validate'
export default {
  name: 'login',
  data () {
    return {
      formValidate: {
        name: '',
        pass: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '请输入正确用户名', trigger: 'blur' }
        ],
        pass: [{ pattern: ptn.cn_en_num_underline(0, 255), message: '请输入正确密码', required: true, trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      let vm = this
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
          console.info(this.formValidate, vm.$store)
          vm.$store.dispatch('Login', vm.formValidate)
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      let vm = this
      this.$refs[name].resetFields()
      vm.$store.dispatch('LogOut')
    }
  }
}
</script>
