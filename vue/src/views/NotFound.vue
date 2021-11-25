<template>
  <section>
    <img src="../assets/sad.png" alt="../assets/logo.png" />
    <h1 class="title">404</h1>
    <h2 class="sub-title">The page you requested was not found</h2>
  </section>
</template>

<script>
export default {
  methods: {
    onHome: function () {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

.title {
  font-size: xx-large;
  font-weight: bolder;
  text-align: center;
  margin-top: 22px;
}

.sub-title {
  font-size: x-large;
  font-weight: lighter;
  text-align: center;
  margin-top: 2px;
}

.btn {
  font-size: large;
  background-color: black;
  color: white;
  border: none;
  width: 15%;
  height: 40px;
  margin-top: 30px;
}
</style>
