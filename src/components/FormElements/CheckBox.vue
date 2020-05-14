<template>
  <div>
    <input type="checkbox" :checked="value" @change="handleChange($event.target.checked)" />
  </div>
</template>
<script>
export default {
  name: "CheckBox",
  props: ["value"],

  methods: {
    handleChange(ev) {
      this.$emit("input", ev);
    }
  }
};
</script>
