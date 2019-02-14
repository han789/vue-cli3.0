<style>
.nav-main .ivu-badge-count {
  padding: 0;
  -webkit-transform-origin-x: 0;
  padding: 0;
  -webkit-transform-origin-x: 0;
  -ms-transform: scale(0.7); /* IE 9 */
  -ms-transform-origin: 0 0; /* IE 9 */
  -webkit-transform: scale(0.7); /* Safari 和 Chrome */
  -webkit-transform-origin: 0 0; /* Safari 和 Chrome */
  -moz-transform: scale(0.7); /* Firefox */
  -moz-transform-origin: 0 0; /* Firefox */
  -o-transform: scale(0.7); /* Opera */
  -o-transform-origin: 0 0; /* Opera */
  transform: scale(0.7)!important;
  transform-origin: 0 0;
  line-height: 16px!important;
  top: -5px!important;
  right: -24px!important;
}
.nav-main .ivu-select-dropdown{
  min-width: 96px!important;
}
  .link {
    height: 100%;
  }
  .link .ivu-modal{
    top:0!important;
    height: 100%;
    margin: 0;
  }
  .link .ivu-modal-content{
    height: 100%;
  }
  .link .ivu-modal-body{
    height: 100%;
    padding: 0;
  }
  .link .ivu-modal-footer{
    padding: 0;
  }
</style>

<template>
  <div class="nav-main">
    <Menu mode="horizontal" :active-name="$route.meta.active" @on-select="changeMenu">
         <template v-for="item in menuList">
              <MenuItem v-if="item.children.length === 1" :key="item.name" :name="item.name">
                <template >
                  <span class="layout-text1" :key="item.children.length">{{item.meta.title}}</span>
                </template>
              </MenuItem>
              <Submenu v-if="(item.children.length > 1)" :name="item.name" :key="'submenu' + item.name">
                <template slot="title">
                      <span class="layout-text1">{{ itemTitle(item) }}</span>
                </template>
                <template  v-for="child in item.children">
                      <MenuItem :name="child.name" :key="'submenuitem' + child.name">
                              <span class="layout-text1" :key="'submenutext' + child.name">{{ itemTitle(child) }}</span>
                      </MenuItem>
                </template>
            </Submenu>
         </template>
    </Menu>
  </div>
</template>

<script>
// import util from '@/utils/util'
import api from 'api'
export default {
  name: 'headMenuNav',
  data () {
    return {
      num: '5'
    }
  },
  props: {
    menuList: Array
  },
  methods: {
    hasPermission (code) {
      // return util.hasPermission(code)
    },
    changeMenu (active) {
      this.$router.push({
        name: active
      })
    },
    setWinHeight () {
      var ifm = document.getElementById('iframeId')
      var subWeb = document.frames ? document.frames['iframeId'].document : ifm.contentDocument
      if (ifm != null && subWeb != null) {
        ifm.style.height = 'auto'
        ifm.style.height = subWeb.body.scrollHeight + 'px'
      }
    },
    itemTitle (item) {
      return item.meta.title
    },
    isshow (item) {
      return item.meta.isshow
    },
    myApproveTotal () {
      let params = {
        pageNum: 10,
        pageSize: 1
      }
      api.getAgentGtasksList({ page: params }).then((data) => {
        if (data.success === true) {
          this.num = data.result.total
        }
      })
    },
    getSpecialCount () {
      api.getSpecialCount().then((data) => {
        if (data.success) {
          this.num = data.result
        }
      })
    }
  },
  updated () {
    this.$nextTick(() => {
      if (this.$refs.sideMenu) {
        this.$refs.sideMenu.updateOpened()
      }
    })
  },
  watch: {

  },
  mounted () {
    console.info(this.menuList)
  }
}
</script>
