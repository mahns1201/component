<template>
  <div class="form">
    <img src="../assets/logo.png" />
    <div class="center">
      <label class="title">주제목</label>
      <label class="title">부제목</label>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.center {
  display: flex;
  flex-direction: column;
}
</style>
