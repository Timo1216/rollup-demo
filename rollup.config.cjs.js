import json from 'rollup-plugin-json';

// 最简单的配置
export default {
  input: 'src/index.js', // 打包入口文件
  output: {// 输出配置
    file: 'dist/index.js', // 输出目录
    format: 'cjs', // 格式
  },
  plugins: [ json(), terser() ], // 运行 rollup 从 json 文件中读取数据。例如读取 package.json 中的版本字段
}
