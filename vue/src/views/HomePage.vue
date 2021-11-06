<template>
  <div>
    <h1>Home</h1>
    <InputTag />
    <!-- <ol style="margin-top: 100px;">
      <li @click="go('input-tag')"><span class="button">Input Tag</span></li>
      <li @click="go('494')"><span class="button">404 Page</span></li>
    </ol> -->
  </div>
</template>

<script>
import InputTag from "../components/InputTag.vue";

export default {
  components: {
    InputTag,
  },

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

li {
  margin: 10px;
}

.button {
  cursor: pointer;
}
</style>
