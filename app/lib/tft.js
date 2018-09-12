/// <reference path="./pitft.d.ts" />

const defPadding = 10;

const devicePath = "/dev/fb1";
const pitft = require("pitft");
const fb = pitft(devicePath, true);

const white = () => fb.color(0, 0, 0);
const black = () => fb.color(1, 1, 1);
const xMax = fb.size().width;
const yMax = fb.size().height;

class Tft {
  printCenter(text, inverse = false, centered = true) {
    fb.clear();

    if (invert) {
      white();
    } else {
      black();
    }
    fb.rect(0, 0, xMax, yMax);

    if (invert) {
      black();
    } else {
      white();
    }

    fb.font("fantasy", 30);

    if (centered) {
      fb.text(xMax / 2, yMax / 2, text, true);
    } else {
      fb.text(0 + defPadding, 0 + defPadding, text);
    }

    fb.blit();
  }
}

module.exports = Tft;