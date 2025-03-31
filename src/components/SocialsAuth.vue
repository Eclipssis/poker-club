<template>
  <p class="mt-5 text-gray-400">login with socials</p>
  <div class="flex justify-center items-center gap-3">
    <div @click="googleLogin">
      <i class="google-icon"></i>
    </div>
    <div @click="facebookLogin">
      <i class="facebook-icon"></i>
    </div>
  </div>
</template>

<script setup>
import userApi from "@/api/user";

const googleLogin = async () => {
  try {
    const response = await userApi.loginWithGoogle();
    console.log("response", response);
  } catch (error) {
    console.error("Google login failed:", error);
  }
};

const facebookLogin = async () => {
  try {
    const response = await userApi.loginWithFacebook();
    console.log("response", response);
  } catch (error) {
    console.error("Google login failed:", error);
  }
};
</script>
<style scoped>
.google-icon {
  display: inline-block;
  width: 28px;
  height: 28px;
  background-image: url("@/assets/images/icons/google.png");
  background-size: cover;
  cursor: pointer;
}

.facebook-icon {
  display: inline-block;
  width: 36px;
  height: 36px;
  background-image: url("@/assets/images/icons/facebook.png");
  background-size: cover;
  cursor: pointer;
}
</style>
