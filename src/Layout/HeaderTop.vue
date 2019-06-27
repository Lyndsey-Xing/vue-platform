<template>
  <div class="header">
    <div class="logo">
      <img src="~@/assets/logo.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
.header{
  display: flex;
  justify-content: space-between;
  background: linear-gradient(90deg, rgba(66, 161, 255, 1) 0, rgba(66, 161, 255, .6) 100%);
  position: relative;
  z-index: 1000;
}
</style>
