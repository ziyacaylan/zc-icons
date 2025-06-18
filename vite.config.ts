import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            tsconfigPath: path.resolve(__dirname, "tsconfig.app.json"),
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                additionalData: `@import "${path.resolve(
                    __dirname,
                    "src/less/index.less"
                )}";`,
            },
        },
    },
    build: {
        cssCodeSplit: true,
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "ZCIcons",
            fileName: (format) => `zc-icons.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
    },
    resolve: {
        alias: {
            icons: path.resolve(__dirname, "src/icons"),
            react: path.resolve(__dirname, "src/react"),
            svg: path.resolve(__dirname, "src/svg"),
            utils: path.resolve(__dirname, "src/utils"),
        },
    },
});
