import type { Dispatch, SetStateAction } from "react";

export type LoadingSetter = Dispatch<SetStateAction<boolean>>;

//　ChatInput用Props
export interface ChatInputProps {
  isLoading: boolean;
  setIsLoading: LoadingSetter;
  onSubmit: (text: string) => Promise<void>;
}

//　ChatOutPut用Props
export interface ChatOutputProps {
  isLoading: boolean;
  text: string;
  onDelete: () => void;
}

// ChatOutput要素
export interface ChatOutputItem {
  id: string;
  isLoading: boolean;
  text: string;
}
