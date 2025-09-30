import CustomButton from "./CustomButton";
import type { ChatOutputProps } from "../props/ChatProps";

//　出力欄コンポーネント
const ChatOutput = ({ isLoading, text, onDelete }: ChatOutputProps) => {
  return (
    <div className="flex justify-center overflow-y-auto">
      {isLoading && (
        <div className="animate-spin h-6 w-6 border-3 border-gray-500 rounded-full border-t-transparent"></div>
      )}
      <div className="flex flex-col">
        <div className="my-1 py-1 px-1 text-black bg-gray-200 items-center rounded-md">
          {text || (isLoading ? "生成中..." : "ERROR")}
          <CustomButton
            name="delete"
            className="ml-2 px-1 pt-1 text-black bg-gray-300 hover:bg-gray-200/60 cursor-pointer"
            onClick={onDelete}
          >
            <span className="i-proicons-delete text-black inline-block size-5 cursor-pointer"></span>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ChatOutput;
