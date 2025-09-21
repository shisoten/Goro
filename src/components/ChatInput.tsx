import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import CustomButton from "./CustomButton";

// 入力欄コンポーネント
const ChatInput = () => {
  // 入力した文字列
  const [input, setInput] = useState("");
  // 送信ボタンの活性/非活性
  const isDisabled = !input;

  return (
    <div className="border-t border-gray-900 bg-gray-950 p-40">
      <TextareaAutosize
        className="
            w-full resize-none bg-gray-800 text-gray-200 rounded-lg 
            px-4 py-3 pr-16 
            focus:outline-none focus:ring-1 focus:ring-purple-500
            placeholder-gray-400
            "
        placeholder="生成したい語呂を入力"
        value={input}
        // 制御コンポーネントのため、onChangeがないと入力しても再レンダリングされない
        onChange={(e) => setInput(e.target.value)}
      />
      <CustomButton
        className={`absolute ml-3 p-1.5 rounded-lg !transition-colors ${
          //　入力値が空の場合
          !input
            ? "bg-gray-700 text-gray-500 !cursor-not-allowed !hover:bg-sky-300"
            : "bg-purple-600 hover:bg-purple-500 text-white cursor-pointer"
        }`}
        disabled={isDisabled}
      >
        送信
      </CustomButton>
    </div>
  );
};

export default ChatInput;
