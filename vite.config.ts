import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        exclude: ["zc-icons"], // npm link ile eklenen local paket ismi
    },
    build: {
        cssCodeSplit: true,
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "zc-icons",
            formats: ["es", "cjs"],
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
            components: path.resolve(__dirname, "src/components"),
            svg: path.resolve(__dirname, "src/svg"),
            utils: path.resolve(__dirname, "src/utils"),
            
        },
    },
});
