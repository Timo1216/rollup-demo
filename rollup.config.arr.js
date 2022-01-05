import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js', // 打包入口文件
  output: [ // 输出
    { // 打包 esmodule
      file: 'dist/es/index.js',
      format: 'es'
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
      name: 'MyBundle'
      // name: 'version',
      // plugins: [terser()] // 压缩
    }
  ],
  watch: {
    include: ['src']
  }
}
 