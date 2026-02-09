import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { analyzer } from "vite-bundle-analyzer";
import { compression } from "vite-plugin-compression2";
// import { bundleStats } from "rollup-plugin-bundle-stats";

export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
    compression({
      algorithms: ["gzip", "brotliCompress"],
    }),
    analyzer({
      analyzerMode: "static",
      openAnalyzer: false,
      reportTitle: "Bundle Analysis",
      fileName: "bundle-report.html",
    }),
    // bundleStats() as any,
  ],
});
