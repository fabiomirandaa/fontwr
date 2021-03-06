'use strict';

var chai = require('chai'),
  Util = require('../lib/Util.js'),
  FontFaceCreator = require('../src/FontFaceCreator.js'),
  assert = chai.assert;

describe('FontFaceCreator rules', () => {
  it('createFontFace(): Should generate only a ttf', () => {
    var fontFaceCreator = new FontFaceCreator();
    return Util.loadFixture('test/fixture/FontFaceCreator/ttf.css')
      .then((fontFace) => {
        fontFaceCreator.createFontFace('Roboto', ['.ttf']);
        assert.equal(fontFaceCreator.output, fontFace);
      }, (error) => {
        console.log(error);
      });
  });

  it('createFontFace(): Should generate woff and ttf', () => {
    var fontFaceCreator = new FontFaceCreator();
    return Util.loadFixture('test/fixture/FontFaceCreator/woffttf.css')
      .then((fontFace) => {
        fontFaceCreator.createFontFace('Roboto', ['.ttf', '.woff']);
        assert.equal(fontFaceCreator.output, fontFace);
      }, (error) => {
        console.log(error);
      });
  });

  it('createFontFace(): Should generate woff2, woff and ttf', () => {
    var fontFaceCreator = new FontFaceCreator();
    return Util.loadFixture('test/fixture/FontFaceCreator/woff2woffttf.css')
      .then((fontFace) => {
        fontFaceCreator.createFontFace('Roboto', ['.ttf', '.woff2', '.woff']);
        assert.equal(fontFaceCreator.output, fontFace);
      }, (error) => {
        console.log(error);
      });
  });

  it('createFontFace(): Should generate eot, woff2, woff, ttf', () => {
    var fontFaceCreator = new FontFaceCreator();
    return Util.loadFixture('test/fixture/FontFaceCreator/eotwoff2woffttf.css')
      .then((fontFace) => {
        fontFaceCreator.createFontFace('Roboto',
          ['.ttf', '.eot', '.woff2', '.woff']);
        assert.equal(fontFaceCreator.output, fontFace);
      }, (error) => {
        console.log(error);
      });
  });

  it('createFontFace(): Should generate eot, ttf', () => {
    var fontFaceCreator = new FontFaceCreator();
    return Util.loadFixture('test/fixture/FontFaceCreator/eotttf.css')
      .then((fontFace) => {
        fontFaceCreator.createFontFace('Roboto', ['.eot', '.ttf']);
        assert.equal(fontFaceCreator.output, fontFace);
      }, (error) => {
        console.log(error);
      });
  });

  it('createFontFace(): Should generate woff2, woff', () => {
    var fontFaceCreator = new FontFaceCreator();
    return Util.loadFixture('test/fixture/FontFaceCreator/woff2woff.css')
      .then((fontFace) => {
        fontFaceCreator.createFontFace('Roboto', ['.woff2', '.woff']);
        assert.equal(fontFaceCreator.output, fontFace);
      }, (error) => {
        console.log(error);
      });
  });

  it('createFontFace(): Should generate woff2, woff, eot', () => {
    var fontFaceCreator = new FontFaceCreator();
    return Util.loadFixture('test/fixture/FontFaceCreator/woff2woffeot.css')
      .then((fontFace) => {
        fontFaceCreator.createFontFace('Roboto', ['.woff2', '.woff', '.eot']);
        assert.equal(fontFaceCreator.output, fontFace);
      }, (error) => {
        console.log(error);
      });
  });
});
