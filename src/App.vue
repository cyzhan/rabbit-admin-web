<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav> -->
  <router-view></router-view>
</template>

<script>
import DemoOne from './components/DemoOne.vue'
import DemoTwo from './components/DemoTwo.vue'
export default {
  name: 'App',
  components: {
    DemoOne, DemoTwo
  }
}

</script>

<style>
html,
body {
    margin: 0;
    height: 100%;
}
#app{
  height: 100%;
}
</style>
