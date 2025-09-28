import type { Dispatch, SetStateAction } from "react";

export type LoadingSetter = Dispatch<SetStateAction<boolean>>;

//　ChatInput用Props
export interface ChatInputProps {
  isLoading: boolean;
  setIsLoading: LoadingSetter;
  setIsComplete: LoadingSetter;
}

//　ChatOutPut用Props
export interface ChatOutputProps {
  isLoading: boolean;
  isComplete: boolean;
}
