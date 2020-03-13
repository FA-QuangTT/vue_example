<template>
  <div id="app">
    <h1>App Vue, Vuex, VueRouter!</h1>
    <Home/>
  </div>
</template>

<script>

import Home from './components/Home'
export default {
  name: 'app',
  data () {
    return {
    }
  },

  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
