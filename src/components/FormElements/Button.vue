<template>
  <button type="submit" @click="handleClick">{{text}}</button>
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


