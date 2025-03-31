<template>
  <div class="max-w-md mx-auto mt-10 p-5 border rounded shadow-lg">
    <h1 class="text-4xl mb-10">Login</h1>
    <form class="flex flex-col gap-4">
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
        @click.prevent="login"
      >
        Login
      </Button>
    </form>

    <SocialsAuth></SocialsAuth>
  </div>
</template>

<script setup>
import { ref } from "vue";
import userApi from "@/api/user";
import SocialsAuth from "@/components/SocialsAuth.vue";

let email = ref("eclipssis@gmail.com");
let password = ref("0102030102");

const login = async () => {
  try {
    const response = await userApi.login({ email, password });
    console.log("Login successful:", response);
    // Handle successful login (e.g., redirect to dashboard)
  } catch (error) {
    console.error("Login failed:", error);
    // Handle login error (e.g., show error message)
  }
};
</script>

<style lang="scss" scoped></style>
