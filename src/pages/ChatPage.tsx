import { useState } from "react";
import ChatInput from "../components/ChatInput";
import ChatOutput from "../components/ChatOutput";
import Sidebar from "../components/Sidebar";
import type { ChatInputProps, ChatOutputItem } from "../props/ChatProps";

//　入力ページコンポーネント
const ChatPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  // 出力コンポーネントをステート配列化
  const [outputs, setOutputs] = useState<ChatOutputItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // APIモック
  const generate = async (text: string): Promise<string> => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    return `結果： ${text}`;
  };

  // 語呂作成処理
  const createGoro = async (text: string) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    // 空の出力（ローディング）を履歴に追加
    setOutputs((prev) => [...prev, { id, isLoading: true, text: "" }]);
    // 生成完了後にアイテムを更新
    const result = await generate(text);
    setOutputs((prev) =>
      prev.map((o) => (o.id === id ? { ...o, isLoading: false, text: result } : o)),
    );
  };

  const pushToggle = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const inputProps: ChatInputProps = {
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    onSubmit: createGoro,
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
          {/* 入力エリアは常に表示し、出力履歴を上から順に表示 */}
          <div className="flex-1 space-y-4 overflow-y-auto rounded-lg bg-gray-300 p-2">
            {/* outputs.mapでoutputsの要素をoに展開し、各プロパティを設定 */}
            {outputs.map((o) => (
              <ChatOutput
                key={o.id}
                isLoading={o.isLoading}
                text={o.text}
                // 押されたdeleteアイコンの語呂が持つidと一致しないものだけを残した配列を新たに作成(一致した語呂を削除)
                onDelete={() => setOutputs((prev) => prev.filter((x) => x.id !== o.id))}
              />
            ))}
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
