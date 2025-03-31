<template>
  <div class="container mx-auto">
    <header class="flex justify-between p-4 text-white">
      <div class="flex-1 text-left">
        <a href="#!" class="inline-block w-40">
          <img alt="Vue logo" src="./assets/images/logo.jpg" />
        </a>
      </div>
      <h1 class="heading flex-1 self-center text-4xl">Aleksey Poker club</h1>
      <nav class="flex-1 text-right p-4">
        <router-link to="/login" class="m-4">Login</router-link>
        <router-link to="/registration" class="m-4">Register</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  background: #08080a;
  min-height: 100vh;
  font-family: "Open Sans", sans-serif;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.heading {
  font-family: "Abril Fatface", serif;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
}
</style>
