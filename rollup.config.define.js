import json from 'rollup-plugin-json';
import { defineConfig } from 'rollup';

// 最简单的配置
/**
 * @type {import('rollup').RollupOptions}
 */
export default defineConfig({
  input: 'src/index.js', // 打包入口文件
  output: {// 输出配置
    file: 'dist/index.js', // 输出目录
    format: 'cjs' // 格式
  },
  plugins: [ json() ], // 将配置转成 json
})
