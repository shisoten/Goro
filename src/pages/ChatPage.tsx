import { useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatOutput from "../components/ChatOutput";

//　入力ページコンポーネント
const ChatPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="border-t border-gray-900 bg-gray-900 p-40">
      <h1 className="top-5 text-gray-400 my-10">チャット画面</h1>
      {/* 入力欄は常に表示し、出力欄は送信時のみ表示 */}
      <div>
        <ChatInput isLoading={isLoading} setIsLoading={setIsLoading} />
        {isLoading && <ChatOutput />}
      </div>
    </div>
  );
};

export default ChatPage;
