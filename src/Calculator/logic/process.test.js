import process from "./process";
import { keyTypes } from "Calculator/logic/constants";
import { initialState } from "Calculator";
const { BASIC } = keyTypes;

it("sums numbers", () => {
  expect(
    process(
      {
        ...initialState,
        operation: "plus",
        currentEntry: 3,
        nextEntry: 2
      },
      {
        type: BASIC,
        value: "perform"
      }
    )
  ).toEqual({
    ...initialState,
    operation: null,
    lastAction: "perform",
    lastCalculation: {
      nextEntry: 2,
      operation: "plus"
    },
    currentEntry: 5
  });
});

it("sums numbers and perform again", () => {
  expect(
    process(
      process(
        {
          ...initialState,
          operation: "plus",
          currentEntry: 1,
          nextEntry: 3
        },
        {
          type: BASIC,
          value: "perform"
        }
      ),
      {
        type: BASIC,
        value: "perform"
      }
    )
  ).toEqual({
    ...initialState,
    operation: null,
    lastAction: "perform",
    lastCalculation: {
      nextEntry: 3,
      operation: "plus"
    },
    currentEntry: 7
  });
});

it("sums float numbers", () => {
  expect(
    process(
      {
        ...initialState,
        operation: "plus",
        currentEntry: 1.5,
        nextEntry: 3.1
      },
      {
        type: BASIC,
        value: "perform"
      }
    )
  ).toEqual({
    ...initialState,
    operation: null,
    lastAction: "perform",
    lastCalculation: {
      nextEntry: 3.1,
      operation: "plus"
    },
    currentEntry: 4.6
  });
});
