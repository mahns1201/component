<template>
  <div class="grid">
    <div class="header">header</div>
    <div class="content">content</div>
    <div class="content">content</div>
    <div class="content">content</div>
    <div class="nav">nav</div>
    <div class="footer">footer</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.grid {
  display: grid;
  height: 50vh;
  padding: 10px;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-template-rows: repeat(4, 100px);
  grid-auto-rows: 100px;
  justify-content: space-evenly;
}

.header {
  background-color: peru;
}

.content {
  background-color: red;
}

.nav {
  background-color: blue;
}

.footer {
  background-color: black;
}
</style>