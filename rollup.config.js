// rollup.config.js

import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "react-advanced-rating",
  },
  external: ["react", "react-dom","framer-motion"],
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
    }),
    postcss({
      plugins: [],
      config: "./postcss.config.cjs",
      extract: true,
      minimize: true,
      sourceMap: true,
      extensions: [".css"],
    }),
  ],
});

