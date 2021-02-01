const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: "./",
    pages: {
        index: {
            entry: "example/main.ts",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    devServer: {
        // can be overwritten by process.env.HOST
        host: "0.0.0.0",
        port: 8080
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            config.module.rule("ts").uses.delete("cache-loader");
            config.module
                .rule("ts")
                .use("ts-loader")
                .loader("ts-loader")
                .tap((opts) => {
                opts.transpileOnly = false;
                opts.happyPackMode = false;
                return opts;
            });
        }
        config.resolve.alias
            .set("@", resolve("example"))
            .set("example", resolve("example"))
            .set("common", resolve("example/common"))
            .set("components", resolve("example/components"));
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
    },
    parallel: false,
};
