<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Enter your Email"
    />
    <br />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="Enter your Password"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenicationService from "@/services/AuthenicationService";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const response = await AuthenicationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>

<style scoped></style>
