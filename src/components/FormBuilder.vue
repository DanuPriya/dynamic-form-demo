<template>
  <div id="form">
    <div class="form-group" :class="{ 'form-group--error': $v.firstname.$error }">
      <label>
        First Name:
        <Input
          class="form-control"
          v-model.trim="$v.firstname.$model"
          placeholder="Enter First Name"
        />
        <br />
      </label>
    </div>
    <div class="error" v-if="!$v.firstname.required">First Name is required</div>
    <div
      class="error"
      v-if="!$v.firstname.minLength"
    >First Name must have at least {{$v.firstname.$params.minLength.min}} letters.</div>

    <div class="form-group" :class="{ 'form-group--error': $v.lastname.$error }">
      <label>
        Last Name:
        <Input
          class="form-control"
          v-model.trim="$v.lastname.$model"
          placeholder="Enter Last Name"
        />
        <br />
      </label>
    </div>
    <div class="error" v-if="!$v.lastname.required">Last Name is required</div>
    <div
      class="error"
      v-if="!$v.lastname.minLength"
    >Last Name must have at least {{$v.lastname.$params.minLength.min}} letters.</div>

    <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
      <label>
        Email:
        <Input
          class="form-control"
          type="email"
          v-model.trim="$v.email.$model"
          placeholder="Email"
        />
        <br />
      </label>
    </div>
    <div class="error" v-if="!$v.email.required">Email is required.</div>
    <div class="error" v-if="!$v.email.email">Email is invalid</div>

    <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
      <label>
        Password:
        <Input type="password" class="form-control" v-model.trim="$v.password.$model" />
        <br />
      </label>
    </div>
    <div class="error" v-if="!$v.password.required">Password is required</div>
    <div
      class="error"
      v-if="!$v.password.minLength"
    >Password must have at least {{$v.password.$params.minLength.min}} letters.</div>

    <div class="form-group" :class="{ 'form-group--error': $v.selectedLanguage.$error }">
      <label>Select Language:</label>
      <Select
        :options="languages"
        class="form-control form-control-sm"
        v-model="selectedLanguage"
        placeholder="Select Language"
      />
    </div>
    <div class="error" v-if="!$v.selectedLanguage.required">Item is required</div>

    <div class="form-group" :class="{ 'form-group--error': $v.isChecked.$error }">
      <label>Do You Agree ?</label>
      <check-box class="form-control" v-model="isChecked" />
    </div>
    <div class="error" v-if="!$v.isChecked.required">You must Agree to continue</div>

    <div class="form-group" :class="{ 'form-group--error': $v.selectedValue.$error }">
      <label>Radio Button:</label>

      <radio-btn
        class="form-control"
        name="male"
        label="Male"
        :value="selectedValue"
        @change="changeValue"
      />
      <radio-btn
        class="form-control"
        name="female"
        label="Female"
        :value="selectedValue"
        @change="changeValue"
      />
    </div>
    <div class="error" v-if="!$v.selectedValue.required">Please pick the one.</div>

    <br />
    <br />
    <Button class="btn btn-primary" @click="submit" text="Submit" />

    <p class="typo__p" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
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
      email: "",
      password: "",
      selectedLanguage: "",
      languages: ["Hindi", "English", "Punjabi"],
      submitStatus: null,
      isChecked: "",
      selectedValue: ""
    };
  },

  components: {
    Input,
    Select,
    Button,
    CheckBox,
    RadioBtn
  },
  validations: {
    firstname: {
      required,
      minLength: minLength(4)
    },
    lastname: {
      required,
      minLength: minLength(4)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    selectedLanguage: { required },
    isChecked: { required },
    selectedValue: { required },
    email: { required, email }
  },
  methods: {
    changeValue(newValue) {
      this.selectedValue = newValue;
    },
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>
<style lang="scss">
#form {
  background: #efefef;
  padding: 2rem 2rem 1rem;
}
</style>

