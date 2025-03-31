<template>
  <div class="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
    <h1 class="text-4xl mb-10">Registration</h1>
    <form class="flex flex-col gap-4">
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="border p-2"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="border p-2"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="border p-2"
      />
      <Button
        type="submit"
        class="bg-blue-500 text-white p-2"
        @click.prevent="register"
      >
        Register
      </Button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import userApi from "@/api/user.js";
console.log("userApi", userApi);
let username = ref("eclipssis");
let password = ref("0102030102");
let email = ref("eclipssis@gmail.com");

const register = async () => {
  try {
    const response = await userApi.register({ username, password, email });
    console.log("Login successful:", response);
    // Handle successful login (e.g., redirect to dashboard)
  } catch (error) {
    console.error("Login failed:", error);
    // Handle login error (e.g., show error message)
  }
};
</script>
