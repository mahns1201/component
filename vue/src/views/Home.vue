<template>
  <div>
    <h1>Home</h1>
    <ol>
      <li @click="go('input-tag')"><span class="button">Input Tag</span></li>
      <li @click="go('494')"><span class="button">404 Page</span></li>
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

<style scoped>
h1 {
  text-align: center;
  margin-top: 60px;
}

.button {
  cursor: pointer;
}
</style>
