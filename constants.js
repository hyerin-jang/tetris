'use strict';

const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;
const KEY = {
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
}

const ROTATION = {
    LEFT: "left",
    RIGHT: "right"
};

[KEY, ROTATION].forEach(item => Object.freeze(item));