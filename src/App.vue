<template>
  <div class="container mx-auto">
    <header class="flex justify-between items-center p-4 text-white">
      <div class="flex-1 text-left">
        <a href="#!" class="inline-block w-20">
          <img alt="Vue logo" src="./assets/logo.png" />
        </a>
      </div>
      <h1 class="flex-1">Aleksey Poker club</h1>
      <nav class="flex-1 text-right">
        <router-link to="/login" class="m-4">Login</router-link>
        <router-link to="/registration" class="m-4">Register</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
