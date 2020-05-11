<template>
  <div id="form">
    <label>
      First Name:
      <Input
        v-model="firstname"
        placeholder="Enter First Name"
        min-length="3"
        ref="firstname"
        required="true"
      />
      <br />
    </label>
    <label>
      Last Name:
      <Input
        v-model="lastname"
        placeholder="Enter Last Name"
        min-length="3"
        ref="lastname"
        required="true"
      />
      <br />
    </label>
    <label>
      Email:
      <Input
        type="email"
        v-model="email"
        placeholder="Enter Email"
        min-length="8"
        ref="email"
        required="true"
      />
      <br />
    </label>
    <label>
      Password:
      <Input
        type="password"
        v-model="password"
        placeholder="Password"
        min-length="8"
        ref="password"
        required="true"
      />
      <br />
    </label>

    <Button @click="submitBtn" text="Submit" />
    <br />
    <br />

    <p v-if="formSubmitted">
      First Name:{{firstname}}
      <br />
      Last Name: {{lastname}}
      <br />
      E-mail: {{email}}
      <br />
      Password: {{password}}
    </p>
    <br />
    <br />
  </div>
</template>

<script>
import Button from "../components/FormElements/Button.vue";
import Input from "../components/FormElements/Input.vue";

export default {
  name: "FormBuilder",
  data() {
    return {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      formSubmitted: false
    };
  },
  methods: {
    submitBtn() {
      this.formSubmitted = false;
      this.$refs.firstname.validateForm();
      if (this.$refs.firstname.errorMessage) {
        return;
      }

      this.$refs.lastname.validateForm();
      if (this.$refs.lastname.errorMessage) {
        return;
      }

      this.$refs.email.validateForm();
      if (this.$refs.email.errorMessage) {
        return;
      }

      this.$refs.password.validateForm();
      if (this.$refs.password.errorMessage) {
        return;
      }
      this.formSubmitted = true;
    }
  },
  components: {
    Input,
    Button
  }
};
</script>

<style>
#form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  padding: 9px 16px;
  background: #0060cc;
  color: #fff;
  border: 1px solid #0d0dff;
}
</style>
