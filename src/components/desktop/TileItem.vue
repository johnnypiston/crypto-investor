<script setup lang="ts">
import { ref, withDefaults, onBeforeUnmount, onMounted } from "vue";
import { TileOptions, ParentContainerCoord } from "../../types";

type Props = {
  tileOptions: TileOptions;
  parentContainer: ParentContainerCoord;
  tileIndex: number;
};

const tileElement = ref<HTMLElement | null>(null);
const leftResizer = ref<HTMLElement | null>(null);
const offsetX = ref(0);
const offsetY = ref(0);

const props = withDefaults(defineProps<Props>(), {
  tileOptions: () => ({
    tileName: "Tile",
    top: 0,
    left: 0,
    height: 150,
    width: 150,
    isActive: false,
  }),
});

const emit = defineEmits(["moveTile", "resize", "deleteTile", "setActive"]);

const mousedownHandler = (evt: MouseEvent) => {
  evt.preventDefault();

  emit("setActive", props.tileIndex);

  if (tileElement.value !== null) {
    offsetY.value = evt.clientY - tileElement.value.getBoundingClientRect().top;
    offsetX.value =
      evt.clientX - tileElement.value.getBoundingClientRect().left;
    move(evt.pageX, evt.pageY);
    document.addEventListener("mousemove", mousemoveHandler);
    document.addEventListener("mouseup", mouseupHandler);
  }
};

const move = (x: number, y: number) => {
  if (tileElement.value !== null) {
    emit("moveTile", {
      tileOptions: {
        top: y - props.parentContainer.offsetY - offsetY.value,
        left: x - props.parentContainer.offsetX - offsetX.value,
      },
      tileIndex: props.tileIndex,
    });
  }
};

const resize = (event: MouseEvent) => {
  if (tileElement.value !== null) {
    emit("resize", {
      tileOptions: {
        width: event.pageX - tileElement.value?.getBoundingClientRect().left,
        height: event.pageY - tileElement.value?.getBoundingClientRect().top,
      },
      tileIndex: props.tileIndex,
    });
  }
};

const mousemoveHandler = (evt: MouseEvent) => {
  move(evt.pageX, evt.pageY);
};

const mouseupHandler = () => {
  document.removeEventListener("mousemove", mousemoveHandler);
};

onBeforeUnmount(() => {
  document.removeEventListener("mouseup", mouseupHandler);
});

const stopResize = () => {
  document.removeEventListener("mousemove", resize);
};

const resizeLeft = (evt: MouseEvent) => {
  evt.preventDefault();
  evt.stopPropagation();
  document.addEventListener("mousemove", resize);
  document.addEventListener("mouseup", stopResize);
};
</script>

<template>
  <div
    ref="tileElement"
    class="tile"
    :class="{ 'tile--active': props.tileOptions.isActive }"
    :style="{
      width: tileOptions.width + 'px',
      height: tileOptions.height + 'px',
      top: tileOptions.top + 'px',
      left: tileOptions.left + 'px',
    }"
    @mousedown="mousedownHandler"
  >
    <div class="tile__header">
      <h2>{{ props.tileOptions.tileName }}</h2>
      <button
        class="btn tile__header-btn"
        type="button"
        title="Удалить"
        @click.stop="emit('deleteTile', props.tileIndex)"
      >
        &#10006;
      </button>
    </div>
    <div class="tile__resizer" ref="leftResizer" @mousedown="resizeLeft">
      <!-- <div
        ref="leftResizer"
        class="tile-resizer__element tile-resizer__element--left"
        @mousedown="resizeLeft"
      ></div>
      <div class="tile-resizer__element tile-resizer__element--right"></div>
      <div class="tile-resizer__element tile-resizer__element--top"></div>
      <div class="tile-resizer__element tile-resizer__element--bottom"></div> -->
    </div>
  </div>
</template>

<style>
.tile {
  background-color: #efefef;
  border: 1px solid #333;
  position: absolute;
  z-index: 1;
}

.tile--active {
  background-color: #000;
  z-index: 2;
}

.tile__header {
  width: 100%;
  display: flex;

  background-color: #efefef;
  border-bottom: 1px solid #333;
}

.tile__header h2 {
  flex-grow: 1;
  padding: 5px 10px;
  margin: 0;

  font-size: 12px;
  text-align: center;
}

.tile__header-btn {
  padding: 2px 6px;

  font-size: 10px;
  color: #333;
  line-height: 1;

  border: none;
  border-radius: 0;
  border-left: 1px solid #c4c4c4;
}

/* .tile-resizer {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
} */

.tile__resizer {
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 8px;
  height: 8px;
  z-index: 2;

  box-sizing: border-box;

  background-color: transparent;
  border: 1px solid transparent;
  cursor: nwse-resize;
}

.tile--active .tile__resizer {
  background-color: #eee;
  border-color: #333;
}

/* .tile-resizer::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  font-size: 8px;
  color: #000;
  content: "\2921";
} */

/* .tile-resizer__element {
  position: absolute;

  background-color: transparent;
} */

/* .tile-resizer__element--left {
  top: 0;
  bottom: 0;
  right: -1px;
  width: 5px;

  cursor: e-resize;
}

.tile-resizer__element--right {
  top: 0;
  bottom: 0;
  left: -1px;
  width: 5px;

  cursor: w-resize;
}

.tile-resizer__element--top {
  top: -1px;
  right: 0;
  left: 0;
  height: 5px;

  cursor: n-resize;
}

.tile-resizer__element--bottom {
  bottom: -1px;
  right: 0;
  left: 0;
  height: 5px;

  cursor: s-resize;
} */
</style>
