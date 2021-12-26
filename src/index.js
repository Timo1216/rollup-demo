// src/index.js
import foo from './foo.js';
import { version } from '../package.json'; // tree-shanking 摇走了其他 name devDependency
export default function () {
  console.log(foo);
  console.log('version --->',version);
}
