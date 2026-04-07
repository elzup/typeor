/// <reference types="vitest" />
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["json-summary", "text", "lcov"],
      include: ["src/**/*.ts"],
      exclude: ["src/**/*.test.ts", "src/**/*.spec.ts"],
    },
    include: ["src/**/*.test.ts", "src/**/*.spec.ts"],
  },
})
