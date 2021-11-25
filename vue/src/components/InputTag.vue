<template>
  <section>
    <div>
      <input
        type="text"
        placeholder="Input Your Hashtag"
        :value="tag"
        @input="updateTag"
        @keypress.enter.prevent="onAddTag"
        @keyup.delete="onDeleteTag(tag_list.length - 1)"
      />
    </div>
    <div>
      <button
        v-for="(item, index) in tag_list"
        :key="index"
        type="button"
        @click="onDeleteTag(index)"
        readonly
      >
        {{ item }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tag: "",
      tag_list: [],
    };
  },

  methods: {
    updateTag: function (e) {
      this.tag = e.target.value;
    },

    onAddTag: function () {
      this.tag = this.tag.replace(/(\s*)/g, "");

      if (this.tag === "") return;
      else {
        this.tag_list.push(this.tag);
        this.tag = "";
      }
    },

    onDeleteTag: function (index) {
      if (index < 0) return;

      this.tag_list.splice(index, 1);
    },

    onHome: function () {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
::placeholder {
  text-align: center;
}
</style>
