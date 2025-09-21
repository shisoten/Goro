import type { FC, ButtonHTMLAttributes } from "react";

//　カスタムボタンコンポーネント
const CustomButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
