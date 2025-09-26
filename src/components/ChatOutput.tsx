import React from "react";

//　出力欄コンポーネント
const ChatOutput = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-spin h-6 w-6 border-3 border-gray-500 rounded-full border-t-transparent"></div>
      OUTPUT
    </div>
  );
};

export default ChatOutput;
