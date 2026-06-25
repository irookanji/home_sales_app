import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const { publicVars, rawPublicVars } = loadEnv({ prefixes: ["REACT_APP_"] });

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: "./public/index.html",
  },
  output: {
    distPath: {
      root: "build",
    },
  },
  source: {
    entry: {
      index: "./src/index.jsx",
    },
    define: {
      ...publicVars,
      "process.env": JSON.stringify({
        ...rawPublicVars,
        NODE_ENV: process.env.NODE_ENV || "development",
        PUBLIC_URL: "",
      }),
    },
  },
});
