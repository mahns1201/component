<template>
  <div>
    <h1>Input Tag</h1>
    <label class="home_button" @click="onHome"
      ><span class="btn">Home</span></label
    >
    <div class="main">
      <div>
        <input
          type="text"
          placeholder="Input Your Hashtag"
          style="width:700px; height:70px; font-size:25px;"
          :value="tag"
          @input="updateTag"
          @keypress.enter.prevent="onAddTag"
          @keyup.delete="onDeleteTag(tag_list.length - 1)"
        />
        <!-- :value="tag" @input=event => v-model의 과정 -->
      </div>

      <div>
        <button
          v-for="(item, index) in tag_list"
          :key="index"
          type="button"
          class="btn"
          @click="onDeleteTag(index)"
          readonly
        >
          {{ item }}
        </button>
      </div>
    </div>
  </div>
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
    updateTag: function(e) {
      this.tag = e.target.value;
    },

    onAddTag: function() {
      this.tag = this.tag.replace(/(\s*)/g, "");

      if (this.tag === "") return;
      else {
        this.tag_list.push(this.tag);
        this.tag = "";
      }
    },

    onDeleteTag: function(index) {
      if (index < 0) return;

      this.tag_list.splice(index, 1);
    },

    onHome: function() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 60px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
}

.home_button {
  display: flex;
  flex-direction: row-reverse;
}

.tag {
  display: flex;
  flex-wrap: wrap;
}

.btn {
  cursor: pointer;
}
</style>
