import json from 'rollup-plugin-json';

export default {
  input: 'src/index.js', // 打包入口文件
  // output: {// 输出配置
  //   file: 'dist/index.js', // 输出目录
  //   format: 'cjs' // 格式
  // },
  output: [ // 输出
    { // 打包 esmodule
      file: 'dist/es/index.js',
      format: 'esm'
    },
    { // 打包 cjs 模块
      file: 'dist/lib/index.js',
      format: 'cjs',
    },
    { // 打包 amd 模块
      file: 'dist/amd/index.js',
      format: 'amd',
    },
    { // 打包 iife 模块
      file: 'dist/iife/index.js',
      format: 'iife',
    }
  ],
  plugins: [ json() ], // 将配置转成 json

}
