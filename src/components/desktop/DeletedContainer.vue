<script setup lang="ts">
import { PropType } from "vue";
import { TileOptions } from "../../types";

const props = defineProps({
  deletedTiles: { type: Object as PropType<TileOptions[]>, required: true },
});

const emit = defineEmits(["restore"]);
</script>

<template>
  <div class="deleted-container">
    <div>Удаленных элементов: {{ props.deletedTiles.length || 0 }}</div>
    <button
      class="btn deleted-container__btn"
      type="button"
      @click="emit('restore')"
    >
      Восстановить последний удаленный
    </button>
  </div>
</template>

<style>
.deleted-container {
  position: absolute;
  bottom: 30px;
  padding: 15px 25px;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;

  background-color: #fff;
  border: 1px solid #8d8d8d;
}

.deleted-container__btn {
  margin-top: 10px;
  font-size: 12px;
}
</style>
