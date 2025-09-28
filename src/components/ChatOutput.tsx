import CustomButton from "./CustomButton";
import type { ChatOutputProps } from "../props/ChatProps";

//　出力欄コンポーネント
const ChatOutput = ({ isLoading, isComplete }: ChatOutputProps) => {
  return (
    <div className="flex justify-center h-full overflow-y-auto">
      {isLoading && (
        <div className="animate-spin h-6 w-6 border-3 border-gray-500 rounded-full border-t-transparent"></div>
      )}
      {isComplete && (
        <div className="flex flex-col">
          <CustomButton className="my-1 text-black bg-gray-200 hover:bg-gray-200/60 cursor-pointer">
            OUTPUT
          </CustomButton>
          <CustomButton className="my-1 text-black bg-gray-200 hover:bg-gray-200/60 cursor-pointer">
            OUTPUT
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default ChatOutput;
