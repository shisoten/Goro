import { useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatOutput from "../components/ChatOutput";
import Sidebar from "../components/Sidebar";

//　入力ページコンポーネント
const ChatPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const pushToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-950 text-gray-100">
      <Sidebar isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen((prev) => !prev)} />

      <div
        className={`relative flex h-full min-w-0 flex-1 flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "basis-[70%] max-w-[70%]" : "basis-full max-w-full"
        }`}
      >
        <button
          className={`absolute top-4 rounded-full bg-purple-600 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow transition-all duration-300 hover:bg-purple-500 ${
            isSidebarOpen ? "left-4 translate-x-0" : "left-0 translate-x-1/2"
          }`}
          onClick={pushToggle}
        >
          {isSidebarOpen ? "<" : ">"}
        </button>
        <div className="flex flex-1 flex-col px-10 pb-10">
          <h1 className="my-8 text-2xl font-semibold text-gray-200">チャット画面</h1>
          {/* 入力エリアは常に表示し、出力エリアは送信時のみ表示 */}
          <div className="flex flex-1 items-center justify-center rounded-lg bg-gray-900/70 p-6">
            {isLoading && <ChatOutput />}
          </div>
          <div className="mt-6 rounded-lg bg-gray-900/90 p-4">
            <ChatInput isLoading={isLoading} setIsLoading={setIsLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
