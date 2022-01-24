import { WebSocketEventCodes } from "../constants";

export const openWebSocketConnection = (url: string): WebSocket => {
  return new WebSocket(url);
};

export const sendDataToWebSocket = (socket: WebSocket, data: unknown) => {
  const message: string = JSON.stringify(data);

  if (socket.readyState === WebSocket.OPEN) {
    socket.send(message);
  }

  socket.addEventListener(
    "open",
    () => {
      socket.send(message);
    },
    {
      once: true,
    }
  );
};

export const closeWebSocketConnection = (socket: WebSocket) => {
  socket.close(WebSocketEventCodes.NORMAL_CLOSURE);
};
