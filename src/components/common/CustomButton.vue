<script setup lang="ts">
import { withDefaults } from "vue";

type Props = {
  color?: "default" | "red" | "green" | "orange";
};
const props = withDefaults(defineProps<Props>(), {
  color: "default",
});

defineEmits(["click"]);
</script>

<template>
  <button
    class="btn transactions-btn"
    :class="`btn--${props.color}`"
    type="button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<style>
.transactions-btn {
  width: 200px;
}
</style>
