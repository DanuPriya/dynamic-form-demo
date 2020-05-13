<template>
  <div>
    <input type="checkbox" :checked="value" @change="handleChange($event.target.checked)" />
    <br />
    <p class="error-message">{{errorMessage}}</p>
  </div>
</template>
<script>
export default {
  name: "CheckBox",
  props: ["value", "required"],
  data() {
    return {
      validate: false
    };
  },
  methods: {
    handleChange(ev) {
      this.$emit("input", ev);
      this.validate = true;
    },
    validateForm() {
      this.validate = true;
    }
  },
  computed: {
    errorMessage() {
      if (!this.validate) {
        return "";
      }
      if (this.required && !this.value) {
        return "This field is required";
      }
      if (this.minLength && this.value.length < this.minLength) {
        return "Please Enter the value";
      }
      return "";
    }
  }
};
</script>
<style scoped>
.invalid-input {
  border: 1px solid red !important;
}
p.error-message {
  color: red;
  margin: 0;
  padding: 0;
}
</style>