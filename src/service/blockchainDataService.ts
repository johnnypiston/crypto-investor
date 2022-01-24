import { TransactionData, ApiInput } from "../types";
import {
  openWebSocketConnection,
  sendDataToWebSocket,
  closeWebSocketConnection,
} from "./WebSocketConnectionService";
import { WEBSOCKET_BLOCKCHAIN_API_URL, SATOSHI_IN_BTC } from "../constants";

let handler: ((x: TransactionData) => void) | null = null;

const blockchainApiWS: WebSocket = openWebSocketConnection(
  WEBSOCKET_BLOCKCHAIN_API_URL
);

blockchainApiWS.addEventListener("message", (evt) => {
  const parsedData = JSON.parse(evt.data);

  if (handler !== null) {
    handler(getTransactionData(parsedData));
  }
});

const getTransactionData = (apiInput: ApiInput): TransactionData => {
  return {
    from: apiInput.x.inputs[0].prev_out.addr,
    to: apiInput.x.out[0].addr,
    sum: apiInput.x.out[0].value / SATOSHI_IN_BTC,
  };
};

export const subscribeToTransactions = (
  cb: (transaction: TransactionData) => void
) => {
  sendDataToWebSocket(blockchainApiWS, {
    op: "unconfirmed_sub",
  });

  handler = cb;
};

export const unsubscribeFromTransactions = () => {
  sendDataToWebSocket(blockchainApiWS, {
    op: "unconfirmed_unsub",
  });

  handler = null;
};

export const closeConnection = () => {
  closeWebSocketConnection(blockchainApiWS);
};
