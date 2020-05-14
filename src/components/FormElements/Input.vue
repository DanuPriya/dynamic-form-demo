<template>
  <div>
    <input
      :type="type || 'text'"
      v-bind:value="value"
      v-bind:placeholder="placeholder"
      @input="handleChange($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  props: ["value", "placeholder", "type"],

  methods: {
    handleChange(ev) {
      this.$emit("input", ev);
    }
  }
};
</script>


