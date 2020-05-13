<template>
  <div>
    <select @change="handleChange">
      <option>--{{placeholder}}--</option>
      <option :value="option" v-for="(option,i) in options" :key="i">{{option}}</option>
    </select>
    <br />
    <p class="error-message">{{errorMessage}}</p>
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
    },
    required: {
      default: false
    }
  },
  data() {
    return {
      validate: false
    };
  },

  methods: {
    handleChange(e) {
      this.$emit("input", e.target.value);
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
      return "";
    }
  }
};
</script>\
<style scoped>
p.error-message {
  color: red;
  margin: 0;
  padding: 0;
}
</style>