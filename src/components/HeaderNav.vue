<script setup lang="ts"></script>

<template>
  <nav class="main-nav">
    <div class="main-nav__inner container"></div>
    <ul>
      <li>
        <router-link to="/desktop"><span>Рабочий стол</span></router-link>
      </li>
      <li>
        <router-link to="/transactions"><span>Транзакции</span></router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
.main-nav {
  padding: 0 25px;
  background-color: #2196f3;
}

.main-nav ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

.main-nav a {
  display: block;
  padding: 15px;

  background-color: transparent;
  color: #fff;
  transition: background-color 0.1s ease-in-out;
}

.main-nav a.router-link-active,
.main-nav a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
