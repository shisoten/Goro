import ChatInput from "../components/ChatInput";

//　入力ページコンポーネント
const ChatPage = () => {
  return (
    <div className="border-t border-gray-900 bg-gray-900 p-40">
      <h1 className="top-5 text-gray-400 my-10">チャット画面</h1>
      <ChatInput />
    </div>
  );
};

export default ChatPage;
