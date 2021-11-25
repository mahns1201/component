<template>
  <div>
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "../src/layouts/MainLayout.vue";

export default {
  name: "App",

  components: {
    MainLayout,
  },
};
</script>

<style>
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
