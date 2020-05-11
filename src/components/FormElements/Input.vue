<template>
  <div>
    <input
      :type="type || 'text'"
      v-bind:value="value"
      :class="{'invalid-input':errorMessage}"
      v-bind:placeholder="placeholder"
      @input="handleChange($event.target.value)"
    />
    <br />
    <p class="error-message">{{errorMessage}}</p>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["value", "placeholder", "minLength", "required", "type"],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
