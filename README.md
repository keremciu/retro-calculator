## Install

## Getting Started

## To start

1. `yarn` or `npm install`
2. `yarn start` or `npm start`

## Running Tests

`yarn test`

## Explanation

First of all, how I started this project? I did some research about Casio Calculators. I couldn't find the manual of the SL-300SV Calculator but I learned how it works from the manuals of other Casio calculators.

I found an old Casio calculator in the offfice of my current company. I got interaction(look & feel) ideas from it.

![demo][demo-image]

[demo-image]: https://images-na.ssl-images-amazon.com/images/I/71kcP55HoEL._SX522_.jpg

## Implementation

[![demo interface](/screenshot.jpg "how it looks")](https://keremciu.github.io/retro-calculator/)

## Features

`Auto Power Off Feature`

http://docs-europe.electrocomponents.com/webdocs/1398/0900766b81398fe8.pdf

Calculator power turns off automatically if you do not perform any operation within 10 minutes.

`Memory Functions`

I wasn't sure about storing memory data to localStorage. It would be more problematic to replicate a real hardware.

`Code Splitting`

This calculator has some advanced functions that's why I spent most time on code-splitting.

I splitted keys by types like `main, basic, memory, math, number`.

I wrote `keys.js` then put key combinations on `layout.js`, every arrays in `layout.js` are rows.

I built processors for every key types. They looks like Redux -> Reducers.

## Future Ideas

`Key Codes` (would be better)

You don't need to click the key. If you press the key on your keyboard, we're triggering that functionality with animation.
