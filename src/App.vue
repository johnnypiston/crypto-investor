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

  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.btn {
  position: relative;

  display: inline-block;
  padding: 0.5em 1em;

  font: inherit;
  color: #000000;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  white-space: normal;
  word-wrap: normal;

  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #eeeeee;
  cursor: pointer;

  user-select: none;
  touch-action: manipulation;
}

.btn--red {
  color: #fff;
  background-color: #ef5350;
  border-color: #ef5350;
}

.btn--green {
  color: #fff;
  background-color: #4caf50;
  border-color: #4caf50;
}

.btn--orange {
  color: #fff;
  background-color: #ff9800;
  border-color: #ff9800;
}

.btn::after {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  background-color: transparent;

  content: "";
  transition: background-color 0.1s ease-in-out;
}

.btn:hover::after {
  background-color: rgba(255, 255, 255, 0.2);
}

.container {
  margin: 0 auto;
  max-width: 1200px;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-title {
  margin: 20px 0 15px;
  text-align: center;
}
</style>
