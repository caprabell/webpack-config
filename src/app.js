// import método from 'biblioteca'
// * carrega tudo da lib
// as ==> alias para o método

// import * as R from 'ramda';
import { union as junta, uniq } from 'ramda';

import sum from './utils';

const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10];

const arr3 = junta(arr1, arr2);

const arr4 = uniq(arr2);

console.log(arr3);

console.log(arr4);

console.log(sum(5, 6));
