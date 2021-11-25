<template>
  <div>
    <ul>
      <li @click="onView('input-tag')">InputTag</li>
      <div v-if="mode === 'input-tag'" class="content">
        <input-tag />
      </div>
    </ul>
  </div>
</template>

<script>
import InputTag from "../components/InputTag.vue";

export default {
  data() {
    return {
      mode: "",
    };
  },

  components: {
    InputTag,
  },

  methods: {
    onView: function (path) {
      if (this.mode === path) {
        this.mode = "";
      } else {
        this.mode = path;
      }
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>
