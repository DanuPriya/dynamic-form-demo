<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Select One"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
    <br />
    <br />

    <p v-if="validation==true">
      Name: {{name}}
      <br />
      E-mail: {{email}}
      <br />
      Item: {{select}}
      <br />
      CheckBox Value :{{checkbox}}
    </p>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    validation: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Hindi", "English", "Punjabi", "French"],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      this.validation = true;
    }
  }
};
</script>