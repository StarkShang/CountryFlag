const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: "./",
    devServer: {
        // can be overwritten by process.env.HOST
        host: "0.0.0.0",
        port: 8080
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("src", resolve("src"))
            .set("common", resolve("src/common"))
            .set("components", resolve("src/components"));
        config.module
            .rule("svg")
            .exclude.add(resolve("node_modules/circle-flags/flags"))
            .end();
        config.module
            .rule("icons")
            .test(/\.svg$/)
            .include.add(resolve("node_modules/circle-flags/flags"))
            .end()
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "circle_[name]"
            });
    },
    configureWebpack: {
        devtool: "source-map"
    }
};
