<template>
  <div id="app">
    <Spinner />
    <router-view />
  </div>
</template>
<script>
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";

export default {
  components: {
    Spinner,
    Navbar
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
body {
  margin: 0;
  padding: 0;
}

#nav {
  /* padding: 30px; */

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
