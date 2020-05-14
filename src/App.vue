<template>
  <div id="app" class="container">
    <div class="row justify-content-center">
      <div class="col-xs-12 col-sm-10 col-md-6">
        <h1 class="text-center">{{title}}</h1>
        <form-builder />
      </div>
    </div>
  </div>
</template>

<script>
import FormBuilder from "./components/FormBuilder.vue";

export default {
  name: "App",
  data() {
    return {
      title: "Vue.js Demo Form"
    };
  },

  components: {
    FormBuilder
  }
};
</script>

<style lang="scss">
h1 {
  margin-bottom: 30px;
}

#app {
  padding: 20px;
}
</style>
