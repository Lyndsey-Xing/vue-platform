<template>
  <div id="app">
    <el-container class="wrapper">
      <el-header height="60px">
        <headertop></headertop>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <asidemain></asidemain>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop";
import AsideMain from "@/components/AsideMain";

export default {
  name: "App",
  components: {
    headertop: HeaderTop,
    asidemain: AsideMain
  }
};
</script>
<style>
body {
  margin: 0px;
}
.el-header {
  padding: 0px;
}
.el-menu--horizontal > .el-menu-item {
  float: right;
}
.el-menu--horizontal > .el-submenu {
  float: right;
}
</style>

<!--
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->
