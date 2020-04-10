<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <router-link to="/" class="navbar-brand">LOGO</router-link>

    <button class="navbar-toggler" type="button" @click="collapse()">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" :class="[isCollapsed ? 'collapse' : 'show']">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/staff" class="nav-link">Staff</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/programs" class="nav-link">Programs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/training" class="nav-link">Training</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admission" class="nav-link">Admission</router-link>
        </li>
      </ul>
      <i class="fab fa-facebook-f text-light mr-3"></i>
      <button class="btn btn-light px-5">Parents</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      isCollapsed: true
    };
  },
  methods: {
    collapse() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

<style lang="scss" >
// TODO: Customize router css
// .router-link-exact-active {
//   color: #42b983;
// }
</style>
