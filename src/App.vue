<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
    <!-- TODO: FOOTER NAV -->
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    navigation: Navigation
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
