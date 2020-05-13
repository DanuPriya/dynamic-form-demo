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
    <br />
    <label>Select Language:</label>
    <Select
      :options="languages"
      v-model="selectedLanguage"
      placeholder="Select Language"
      required="true"
      ref="selectedLanguage"
    />
    <br />
    <label>Radio Button:</label>

    <radio-btn
      name="male"
      label="Male"
      :value="selectedValue"
      @change="changeValue"
      ref="male"
      required="true"
    />
    <radio-btn
      name="female"
      label="Female"
      :value="selectedValue"
      @change="changeValue"
      ref="female"
      required="true"
    />
    <br />
    <check-box v-model="isChecked" ref="isChecked" required="true" />Accept
    <br />
    <br />
    <Button @click="submitBtn" text="Submit" />
    <br />
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
      <br />
      SelectedLanguage: {{selectedLanguage}}
      <br />
      Radio button selection: {{selectedValue}}
      <br />
      CheckBox Value: {{isChecked}}
    </p>
  </div>
</template>

<script>
import Button from "../components/FormElements/Button.vue";
import Input from "../components/FormElements/Input.vue";
import Select from "../components/FormElements/Select.vue";
import RadioBtn from "../components/FormElements/RadioBtn.vue";

import CheckBox from "../components/FormElements/CheckBox.vue";

export default {
  name: "FormBuilder",
  data() {
    return {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      formSubmitted: false,
      languages: ["English", "Hindi", "Punjabi"],
      selectedLanguage: "",
      selectedValue: "",
      isChecked: false
    };
  },
  methods: {
    changeValue(newValue) {
      this.selectedValue = newValue;
    },
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

      this.$refs.selectedLanguage.validateForm();
      if (this.$refs.selectedLanguage.errorMessage) {
        return;
      }
      this.$refs.male.validateForm();
      if (this.$refs.male.errorMessage) {
        return;
      }
      this.$refs.female.validateForm();
      if (this.$refs.female.errorMessage) {
        return;
      }
      this.$refs.isChecked.validateForm();
      if (this.$refs.isChecked.errorMessage) {
        return;
      }
      this.formSubmitted = true;
    }
  },
  components: {
    Input,
    Button,
    Select,
    RadioBtn,
    CheckBox
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
