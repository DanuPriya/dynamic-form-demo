<template>
  <div>
    <input type="radio" :value="label" :name="name" v-model="radioButtonValue" />
    <span>{{ label }}</span>
    <br />
    <p class="error-message">{{errorMessage}}</p>
  </div>
</template>
<script>
export default {
  name: "RadioBtn",
  props: ["label", "name", "value", "required"],
  data() {
    return {
      validate: false
    };
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
    },
    radioButtonValue: {
      get: function() {
        return this.value;
      },
      set: function() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit("change", this.label);
        this.validate = true;
      }
    }
  },
  methods: {
    validateForm() {
      this.validate = true;
    }
  }
};
</script>
<style scoped>
p.error-message {
  color: red;
  margin: 0;
  padding: 0;
}
</style>