<template>
  <div class="header" @click="onHome()">Header</div>
</template>

<script>
export default {
  methods: {
    onHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: black;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>