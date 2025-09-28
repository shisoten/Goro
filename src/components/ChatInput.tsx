import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import CustomButton from "./CustomButton";
import type { ChatInputProps } from "../props/ChatProps";

// 入力欄コンポーネント
const ChatInput = ({ isLoading, setIsLoading, isComplete, setIsComplete }: ChatInputProps) => {
  // 入力した文字列
  const [input, setInput] = useState("");
  // 送信ボタンの活性/非活性
  const isDisabled = !input;

  // 待機メソッド(テスト)
  const sleep = (time: number): Promise<boolean> => {
    return new Promise((resolve) => setTimeout(() => resolve(true), time));
  };

  // 送信ボタン押下時の処理
  const handleSubmit = async () => {
    setIsLoading((e) => (e = true));
    setIsComplete((e) => (e = false));
    let result = await sleep(3000);
    if (result) {
      setIsLoading((e) => (e = false));
      setIsComplete((e) => (e = true));
    }
  };

  // キャンセルボタン押下時の処理
  const handleCancel = () => {
    setIsLoading(false);
  };

  return (
    <>
      <TextareaAutosize
        className="
            w-full resize-none bg-gray-600 text-gray-200 rounded-lg 
            px-4 py-3 pr-16 
            focus:outline-none focus:ring-1 focus:ring-purple-500
            placeholder-gray-400
            "
        placeholder="生成したい語呂を入力"
        value={input}
        // 制御コンポーネントのため、onChangeがないと入力しても再レンダリングされない
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        {/* 送信ボタン */}
        <CustomButton
          className={`ml-3 p-1.5 rounded-lg !transition-colors ${
            //　入力値が空の場合
            !input
              ? "bg-gray-700 text-gray-500 !cursor-not-allowed !hover:bg-sky-300"
              : "bg-purple-600 hover:bg-purple-500 text-white cursor-pointer"
          }`}
          disabled={isDisabled}
          onClick={handleSubmit}
        >
          送信
        </CustomButton>

        {/* キャンセルボタン */}
        <CustomButton
          className={`ml-3 p-1.5 rounded-lg !transition-colors ${
            //　入力値が空の場合
            !isLoading
              ? "bg-gray-700 text-gray-500 !cursor-not-allowed !hover:bg-sky-300"
              : "bg-purple-600 hover:bg-purple-500 text-white cursor-pointer"
          }`}
          disabled={!isLoading}
          onClick={handleCancel}
        >
          キャンセル
        </CustomButton>
      </div>
    </>
  );
};

export default ChatInput;
