const path = require("path");
import json from '@rollup/plugin-json';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { uglify } from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
// 新增 rollup-plugin-postcss 插件
import postcss from 'rollup-plugin-postcss';


const banner = `var process = {
    env: {
      NODE_ENV: 'development'
    }
}`

export default {
    input: "./index.js",
    external: ['lodash'], // 不打包库文件   [path.resolve(__dirname, "./myLibrary")]
    plugins: [
        json(),
        resolve(),
        postcss({
            extensions: ['.css']
        }),
        babel({
            exclude: 'node_modules/**', // 只编译我们的源代码
            extensions: [".js","jsx"],
            babelHelpers: "runtime"
        }),
        commonjs({
            include: "node_modules/**"
        }),
        uglify(),
        serve({
            open: true, // 是否打开浏览器
            contentBase: './', // 入口html的文件位置
            historyApiFallback: true, // Set to true to return index.html instead of 404
            host: 'localhost',
            port: 3006
        })
    ],
    treeshake: true,
    output: {
        file: "bundle.js",
        format: "cjs",
        name: 'min-dirctory',
        banner: banner   // process 环境报错， 也可以使用 replace plugin  replace({'process.env.NODE_ENV': JSON.stringify("production") })
        // sourcemap: true,
        // globals: {
        //     jquery: '$'
        // }
    }
}