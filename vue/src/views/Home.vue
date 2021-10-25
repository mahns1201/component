<template>
  <div>
    <h1>Home</h1>
    <ol>
      <li @click="go('input-tag')">Input Tag</li>
    </ol>
  </div>
</template>

<script>
export default {
  methods: {
    go: function(path) {
      this.$router.push(`/${path}`);
    },
  },
};
</script>

<style>
h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
