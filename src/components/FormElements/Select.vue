<template>
  <div>
    <select @change="handleChange">
      <option>--{{placeholder}}--</option>
      <option :value="option" v-for="(option,i) in options" :key="i">{{option}}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Select",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      default: ""
    },
    placeholder: {
      type: String,
      default: "Select One"
    }
  },

  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
