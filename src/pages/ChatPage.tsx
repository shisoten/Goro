import { useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatOutput from "../components/ChatOutput";
import Sidebar from "../components/Sidebar";
import type { ChatInputProps, ChatOutputProps } from "../props/ChatProps";

//　入力ページコンポーネント
const ChatPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const pushToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const inputProps: ChatInputProps = {
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    setIsComplete: setIsComplete,
  };

  const outputProps: ChatOutputProps = {
    isLoading: isLoading,
    isComplete: isComplete,
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white text-gray-100">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen((prev) => !prev)} />

      <div
        className={`relative flex h-full min-w-0 flex-1 flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "basis-[80%] max-w-[80%]" : "basis-full max-w-full"
        }`}
      >
        {!isSidebarOpen && (
          <button
            className={`absolute top-4 rounded-full bg-purple-600 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow transition-all duration-300 hover:bg-purple-500 ${
              isSidebarOpen ? "left-4 translate-x-0" : "left-0 translate-x-1/2"
            }`}
            onClick={pushToggle}
          >
            {isSidebarOpen ? "<" : ">"}
          </button>
        )}
        <div className="flex flex-1 flex-col px-10 pb-10">
          <h1 className="my-8 text-2xl font-semibold text-black">チャット画面</h1>
          {/* 入力エリアは常に表示し、出力エリアは送信時のみ表示 */}
          <div className="flex flex-1 items-center justify-center rounded-lg bg-gray-300 p-6">
            {<ChatOutput {...outputProps} />}
          </div>
          <div className="mt-6 rounded-lg bg-gray-300 p-4">
            {/* スプレッド構文でinputPropsを展開して渡す */}
            <ChatInput {...inputProps} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
