<template>
  <button @click="handleClick">{{text}}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["text"],
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
