const config = {
  testMatch: ["**/*.test.js", "**/*.test.ts", "**/*.test.tsx"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  transformIgnorePatterns: ["/node_modules/"],

  transform: {
    ".+\\.(t|j)s$": [
      "@swc/jest",
      {
        sourceMaps: true,
        module: { type: "commonjs" },
        jsc: {
          parser: { syntax: "typescript", tsx: true },
        },
      },
    ],
  },
}

module.exports = config
