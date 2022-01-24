<script setup lang="ts">
  defineEmits(["click"]);
</script>

<template>
  <button type="button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>