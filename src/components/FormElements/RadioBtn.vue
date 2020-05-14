<template>
  <div>
    <input type="radio" :value="label" :name="name" v-model="radioButtonValue" />
    <span>{{ label }}</span>
  </div>
</template>
<script>
export default {
  name: "RadioBtn",
  props: ["label", "name", "value"],

  computed: {
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
  }
};
</script>
