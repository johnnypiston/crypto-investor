<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from "vue";
import { TileOptions, ParentContainerCoord } from "../../types";
import { DefaultTile, DEFAULT_TILES } from "../../constants";
import TileItem from "./TileItem.vue";

type EmitingTileOption<T> = { tileOptions: T; tileIndex: number };

const clearActiveStatus = (tiles: TileOptions[]) => {
  for (const tile of tiles) {
    tile.isActive = false;
  }
};

const setTiles = () => {
  const tiles: TileOptions[] | null = JSON.parse(
    localStorage.getItem("tiles") || "null"
  );

  if (tiles !== null) {
    clearActiveStatus(tiles);
  }

  return tiles !== null ? tiles : DEFAULT_TILES;
};

const setDeletedTiles = () => {
  const tiles: TileOptions[] | null = JSON.parse(
    localStorage.getItem("deletedTiles") || "null"
  );

  if (tiles !== null) {
    clearActiveStatus(tiles);
  }

  return tiles !== null ? tiles : [];
};

const DeletedContainer = defineAsyncComponent(
  () => import("./DeletedContainer.vue")
);

const desktopContainer = ref<HTMLElement | null>(null);
const tiles = ref<TileOptions[]>(setTiles());
const deletedTiles = ref<TileOptions[]>(setDeletedTiles());
const currentActiveTileIndex = ref<number | null>(null);

const updateTilesInStorage = () => {
  localStorage.setItem("tiles", JSON.stringify(tiles.value));
};

const updateDeletedTilesInStorage = () => {
  localStorage.setItem("deletedTiles", JSON.stringify(deletedTiles.value));
};

const parentContainer = computed(
  (): ParentContainerCoord => ({
    offsetX: desktopContainer.value?.offsetLeft || 0,
    offsetY: desktopContainer.value?.offsetTop || 0,
  })
);

const updateTilePosition = (
  tile: EmitingTileOption<{ top: number; left: number }>
) => {
  tiles.value[tile.tileIndex].top = tile.tileOptions.top;
  tiles.value[tile.tileIndex].left = tile.tileOptions.left;
  updateTilesInStorage();
};

const updateTileDimension = (
  tile: EmitingTileOption<{ width: number; height: number }>
) => {
  tiles.value[tile.tileIndex].width = tile.tileOptions.width;
  tiles.value[tile.tileIndex].height = tile.tileOptions.height;
  updateTilesInStorage();
};

const deleteTile = (tileIndex: number) => {
  tiles.value[tileIndex].isActive = false;
  deletedTiles.value = deletedTiles.value.concat(
    tiles.value.splice(tileIndex, 1)
  );
  if (tileIndex === currentActiveTileIndex.value) {
    currentActiveTileIndex.value = null;
  }
  updateTilesInStorage();
  updateDeletedTilesInStorage();
};

const restoreLastDeleted = () => {
  let restoredTile;

  if (deletedTiles.value.length > 0) {
    restoredTile = deletedTiles.value.pop();
    restoredTile!.height = DefaultTile.HEIGHT;
    restoredTile!.width = DefaultTile.WIDTH;

    if (desktopContainer.value !== null) {
      restoredTile!.left =
        desktopContainer.value.getBoundingClientRect().width / 2 -
        DefaultTile.WIDTH / 2;
      restoredTile!.top =
        desktopContainer.value.getBoundingClientRect().height / 2 -
        DefaultTile.HEIGHT / 2;
    }

    tiles.value.push(restoredTile!);
    updateTilesInStorage();
    updateDeletedTilesInStorage();
  }
};

const setActive = (index: number) => {
  if (index === currentActiveTileIndex.value) {
    return;
  }

  if (
    currentActiveTileIndex.value !== null &&
    index !== currentActiveTileIndex.value
  ) {
    tiles.value[currentActiveTileIndex.value].isActive = false;
  }

  tiles.value[index].isActive = true;
  currentActiveTileIndex.value = index;
};
</script>

<template>
  <h1 class="main-title">Рабочий стол инвестора</h1>
  <p class="resize-hint">
    *Для измения размеров плитки, потяните за её правый нижний угол
  </p>
  <div ref="desktopContainer" class="investor-desktop">
    <TileItem
      v-for="(tile, index) in tiles"
      :key="index"
      :tileOptions="tile"
      :parentContainer="parentContainer"
      :tileIndex="index"
      @moveTile="updateTilePosition"
      @resize="updateTileDimension"
      @deleteTile="deleteTile"
      @setActive="setActive"
    ></TileItem>
    <DeletedContainer
      v-if="deletedTiles.length > 0"
      :deletedTiles="deletedTiles"
      @restore="restoreLastDeleted"
    ></DeletedContainer>
  </div>
</template>

<style>
.investor-desktop {
  flex-grow: 1;
  position: relative;

  background-color: #263238;
  overflow: hidden;
}

.resize-hint {
  font-size: 14px;
  margin: 0 50px 10px;
}
</style>
