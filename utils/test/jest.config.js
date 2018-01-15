module.exports = {
  "rootDir": "../../",
  "setupTestFrameworkScriptFile": "<rootDir>/utils/test/jestSetup.js",
  // "projects": ["<rootDir>/packages/*"],
  "moduleNameMapper": {
    "\\.(css)$": "<rootDir>/utils/test/styleMock.js"
  },
  "transform": {
    "^.+\\.js$": "babel-jest"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!(garden-react)/)"
  ]
};