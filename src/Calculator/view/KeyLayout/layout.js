import { keyTypes } from "Calculator/logic/constants";
const { MAIN, BASIC, MEMORY, MATH } = keyTypes;

export default [
  ["", "", "", `${MATH}.sqrt`, `${MAIN}.off`],
  [
    `${MEMORY}.clear`,
    `${MEMORY}.recall`,
    `${MEMORY}.minus`,
    `${MEMORY}.plus`,
    `${BASIC}.divide`
  ],
  [`${BASIC}.percentage`, 7, 8, 9, `${BASIC}.multiply`],
  [`${MATH}.change_sign`, 4, 5, 6, `${BASIC}.minus`],
  [`${MAIN}.clear`, 1, 2, 3, `${BASIC}.plus`],
  [`${MAIN}.on`, 0, `${MATH}.float`, `${BASIC}.perform`]
];
