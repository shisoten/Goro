import React from "react";

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

// サイドバーコンポーネント
const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  return (
    // transition-allでアニメーション可能な全てのプロパティを対象とし、duration-300で300msをかけて動かすようにする
    <aside
      className={`relative flex h-full flex-shrink-0 flex-col overflow-hidden border-r border-gray-800 bg-gray-900/95 text-gray-200 transition-all duration-300 ease-in-out ${
        isOpen ? "basis-[20%] max-w-[20%] shadow-lg" : "basis-0 max-w-0 border-transparent"
      }`}
    >
      {isOpen && (
        <button
          className={`absolute top-4 z-10 rounded-full bg-purple-600 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow transition-all duration-300 hover:bg-purple-500 ${
            isOpen ? "right-4 translate-x-0" : "right-0 translate-x-1/2"
          }`}
          onClick={onToggle}
        >
          {isOpen ? "<" : ">"}
        </button>
      )}
      <div
        className={`px-6 py-4 transition-opacity duration-150 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-wide text-gray-400">メニュー</p>
      </div>
      <nav
        className={`flex-1 px-4 pb-4 pt-16 transition-opacity duration-150 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <a
          className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-purple-600/80 hover:text-white"
          href="#"
        >
          チャット画面
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
