<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from "vue";
import { TileOptions, ParentContainerCoord } from "../../types";
import { DefaultTile, DEFAULT_TILES } from "../../constants";
import TileItem from "./TileItem.vue";

type EmitingTileOption<T> = { tileOptions: T; tileIndex: number };

const setTiles = () => {
  const tiles: TileOptions[] | null = JSON.parse(
    localStorage.getItem("tiles") || "null"
  );

  return tiles !== null ? tiles : DEFAULT_TILES;
};

const setDeletedTiles = () => {
  const tiles: TileOptions[] | null = JSON.parse(
    localStorage.getItem("deletedTiles") || "null"
  );

  return tiles !== null ? tiles : [];
};

const DeletedContainer = defineAsyncComponent(
  () => import("./DeletedContainer.vue")
);

const desktopContainer = ref(null);
const tiles = ref<TileOptions[]>(setTiles());
const deletedTiles = ref<TileOptions[]>(setDeletedTiles());

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

const deleteTile = (tileIndex) => {
  deletedTiles.value = deletedTiles.value.concat(
    tiles.value.splice(tileIndex, 1)
  );
  updateTilesInStorage();
  updateDeletedTilesInStorage();
};

const restoreLastDeleted = () => {
  let restoredTile;

  if (deletedTiles.value.length > 0) {
    restoredTile = deletedTiles.value.pop();
    restoredTile.height = DefaultTile.HEIGHT;
    restoredTile.width = DefaultTile.WIDTH;
    restoredTile.left =
      desktopContainer.value?.getBoundingClientRect().width / 2 -
      DefaultTile.WIDTH / 2;
    restoredTile.top =
      desktopContainer.value?.getBoundingClientRect().height / 2 -
      DefaultTile.HEIGHT / 2;
    tiles.value.push(restoredTile);
    updateTilesInStorage();
    updateDeletedTilesInStorage();
  }
};
</script>

<template>
  <h1 class="main-title">Рабочий стол инвестора</h1>
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
  border-top: 5px solid #607d8b;
  position: relative;

  background-color: #263238;
  overflow: hidden;
}
</style>
