<template>
  <div id="app">
    <el-container class="wrapper">
      <el-header height="60px" style="padding:0">
        <HeaderTop/>
      </el-header>
      <el-container>
        <el-aside :style="{width: 'auto'}">
          <Aside :collapse="collapse" @collaspeChange="handleChange"/>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import Aside from '@/components/Aside'

export default {
  name: 'App',

  data () {
    return {
      collapse: false
    }
  },

  methods: {
    handleChange (val) {
      this.collapse = !val
    }
  },

  components: {
    HeaderTop,
    Aside
  }
}
</script>

<style scoped>
.wrapper {
  height: 100vh;
  overflow: hidden;
}
.main{
  height: 100vh - 60px;
  overflow: auto;
}
</style>
