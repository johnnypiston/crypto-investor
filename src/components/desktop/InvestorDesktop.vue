<script setup lang="ts">
import { ref } from "vue";
const isActive = ref(false);
</script>

<template>
  <h1 class="main-title">Рабочий стол инвестора</h1>
  <div class="investor-desktop">
    <div
      class="investor-desktop__item"
      :class="{ 'investor-desktop__item--active': isActive }"
      @click="isActive = true"
    ></div>
  </div>
</template>

<style>
.investor-desktop {
  border-top: 5px solid #eee;
  position: relative;
}

.investor-desktop__item {
  background-color: #efefef;
  border: 1px solid #333;
  top: 0;
  left: 0;
  position: absolute;
  height: 150px;
  width: 150px;
}

.investor-desktop__item--active {
  background-color: #000;
}
</style>
