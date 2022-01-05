// src/index.js
import foo from './foo.js';
import { version } from '../package.json'; // tree-shanking 摇走了其他 name devDependency
export default function () {
  console.log(foo);
  console.log('version2341 woshi123 --->',version);
}


const str1 = 'alipays://platformapi/startapp?appId=20000067&url=https%3A%2F%2Frenderdev.alipay.com%2Fp%2Fyuyan%2F180020010001202190-dev-sprint_mybank-scene-cashier_S927890693_20211018%2Findex.html%3FbizScene%3D1688_SUPER_FACTORY%26bgType%3Dcolored%26preTradeNo%3D2021122711120560011646014001220000000001&transparent=YES&transAnimate=YES&canPullDown=false&transparentTitle=always&showOptionMenu=false&startMultApp=YES';
