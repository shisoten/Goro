//　Tailwind設定ファイル
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [
    iconsPlugin({
      // 利用したい icon collection を利用する
      // https://icones.js.org/
      collections: getIconCollections(["proicons"]),
    }),
  ],
};
