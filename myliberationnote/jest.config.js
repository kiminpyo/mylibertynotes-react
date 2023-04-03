module.exports = {
    setupFilesAfterEnv: ["jest-plugin-context/setup"],
    verbose: true,
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.css$": "jest-transform-css",
    },
};
