import json from 'rollup-plugin-json';

export default (cmdArgs) => {
  console.log('cmdArgs --->',cmdArgs);
  console.log('cmdArgs --->',cmdArgs.ABC);

  return {
    input: 'src/index.js', // 打包入口文件
    output: {// 输出配置
      file: 'dist/index.js', // 输出目录
      format: 'cjs' // 格式
    },
  // plugins: [ json() ],
  };
}
 