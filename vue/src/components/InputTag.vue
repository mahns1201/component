<template>
  <div class="layout">
    <h1>Input Tag</h1>
    <label class="home_button" @click="onGoHome">Home</label>
  </div>
</template>

<script>
export default {
  methods: {
    onGoHome: function() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.layout {
  margin: 0px 100px;
}

h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.home_button {
  display: flex;
  flex-direction: row-reverse;
}
</style>
