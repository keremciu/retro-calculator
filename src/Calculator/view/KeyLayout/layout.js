import { keyTypes } from "Calculator/logic/constants";
const { MAIN, BASIC, MEMORY, MATH } = keyTypes;

const EMPTY = ""
const MAIN_ON = `${MAIN}.on`;
const MAIN_OFF = `${MAIN}.off`
const MAIN_CLEAR = `${MAIN}.clear`;
const MEMORY_CLEAR = `${MEMORY}.clear`
const MEMORY_RECALL = `${MEMORY}.recall`;
const MEMORY_MINUS = `${MEMORY}.minus`;
const MEMORY_PLUS = `${MEMORY}.plus`;
const BASIC_DIVIDE = `${BASIC}.divide`;
const BASIC_PERCENTAGE = `${BASIC}.percentage`;
const BASIC_MULTIPLY = `${BASIC}.multiply`;
const BASIC_MINUS = `${BASIC}.minus`;
const BASIC_PLUS = `${BASIC}.plus`;
const BASIC_PERFORM = `${BASIC}.perform`;
const MATH_FLOAT = `${MATH}.float`;
const MATH_SQRT = `${MATH}.sqrt`
const MATH_CHANGESIGN = `${MATH}.change_sign`;


/* Layout
   * .----------------------------------.
   * |      |      |      |   √  |  OFF |
   * |------+------+------+------+------|
   * |  MC  |  MR  |  M-  |  M+  |   ÷  |
   * |------+------+------+------+------|
   * |  %   |   7  |   8  |   9  |   ×  |
   * |------+------+------+------+------|
   * |  ±   |   4  |   5  |   6  |   -  |
   * |------+------+------+------+------|
   * |  C   |   1  |   2  |   3  |      |
   * |------+------+------+------|   +  |
   * |  AC  |   0  |   .  |   =  |      |
   * '----------------------------------'
   */
export default [
  [EMPTY, EMPTY, EMPTY, MATH_SQRT, MAIN_OFF],
  [MEMORY_CLEAR, MEMORY_RECALL, MEMORY_MINUS, MEMORY_PLUS, BASIC_DIVIDE],
  [BASIC_PERCENTAGE, 7, 8, 9, BASIC_MULTIPLY],
  [MATH_CHANGESIGN, 4, 5, 6, BASIC_MINUS],
  [MAIN_CLEAR, 1, 2, 3, BASIC_PLUS],
  [MAIN_ON, 0, MATH_FLOAT, BASIC_PERFORM]
];
