<script setup lang="ts">
import HeaderNav from "./components/HeaderNav.vue";
</script>

<template>
  <header>
    <HeaderNav></HeaderNav>
  </header>
  <router-view></router-view>
</template>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-title {
  text-align: center;
}
</style>
