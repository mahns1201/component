<template>
  <header>
    <main-header />
  </header>
  <main>
    <article><slot></slot></article>
  </main>
  <footer>
    <main-footer />
  </footer>
</template>

<script>
import MainHeader from "./MainHeader.vue";
import MainFooter from "./MainFooter.vue";

export default {
  components: {
    MainHeader,
    MainFooter,
  },

  methods: {
    go: function (path) {
      this.$router.push(`/${path}`);
    },
  },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0px;
  width: 100%;
  height: 10vmin;
}

main {
  display: flex;
  justify-content: center;
  width: 100%;
}

article {
  width: 80%;
  min-height: 100vmin;
}

footer {
  width: 100%;
  height: 10vmin;
}
</style>
