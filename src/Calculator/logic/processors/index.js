import mainProcessor from './main';
import basicProcessor from './basic';
import memoryProcessor from './memory';
import mathProcessor from './math';
import numberProcessor from './number';

import { keyTypes } from "Calculator/logic/constants";
const { MAIN, BASIC, MEMORY, MATH, NUMBER } = keyTypes;

export default {
  [MAIN]: mainProcessor,
  [BASIC]: basicProcessor,
  [MEMORY]: memoryProcessor,
  [MATH]: mathProcessor,
  [NUMBER]: numberProcessor,
};