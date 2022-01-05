import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', // 打包入口文件
  output: [ // 输出
    { // 打包 esmodule
      file: 'dist/es/index.js',
      format: 'esm'
    },
    { // 打包 cjs 模块
      file: 'dist/lib/index.js',
      format: 'cjs',
    },
  ],
  external: ['lodash'],
  watch: {
    // include: 'src/**'
  }
}
 