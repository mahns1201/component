<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  /* layout */
  position: absolute;
  left: 10%;
  height: 100vh;
  width: 80%;
}

* {
  /* padding, margin default */
  padding: 0;
  margin: 0;

  /* font */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
