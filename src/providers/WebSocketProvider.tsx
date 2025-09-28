import { createContext, useContext } from "react";

// コンテキストとして保存したいプロパティ
interface WebSocketContextType {
  isLoading: boolean;
}

export const WebSocketContext = createContext<WebSocketContextType>({
  isLoading: false,
});

export const useWebSocket = () => {
  useContext(WebSocketContext);
};
