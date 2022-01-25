import { TileOptions } from "./types";

export const SATOSHI_IN_BTC = 100_000_000;
export const WEBSOCKET_BLOCKCHAIN_API_URL = "wss://ws.blockchain.info/inv";
export const WebSocketEventCodes = Object.freeze({
  NORMAL_CLOSURE: 1000,
  GOING_AWAY: 1001,
  PROTOCOL_ERROR: 1002,
  UNSUPPORTED_DATA: 1003,
  INTERNAL_SERVER_ERROR: 1011,
});
export const DefaultTile = {
  WIDTH: 300,
  HEIGHT: 100,
};
export const DEFAULT_TILES: TileOptions[] = [
  {
    tileName: "Tile 1",
    top: 10,
    left: 10,
    height: DefaultTile.HEIGHT,
    width: DefaultTile.WIDTH,
    isActive: false,
  },
  {
    tileName: "Tile 2",
    top: 10,
    left: 330,
    height: DefaultTile.HEIGHT,
    width: DefaultTile.WIDTH,
    isActive: false,
  },
  {
    tileName: "Tile 3",
    top: 10,
    left: 650,
    height: DefaultTile.HEIGHT,
    width: DefaultTile.WIDTH,
    isActive: false,
  },
  {
    tileName: "Tile 4",
    top: 200,
    left: 10,
    height: DefaultTile.HEIGHT,
    width: DefaultTile.WIDTH,
    isActive: false,
  },
  {
    tileName: "Tile 5",
    top: 200,
    left: 330,
    height: DefaultTile.HEIGHT,
    width: DefaultTile.WIDTH,
    isActive: false,
  },
];
