'use strict';
import _0x3fb20f from 'axios';
class bard {
  constructor() {}
  async ["question"]({
    ask: _0x3b21f7
  }) {
    if (!_0x3b21f7) {
      throw new Error("Please specify a question!");
    }
    try {
      const _0x5678a9 = await _0x3fb20f.post("https://bard.rizzy.eu.org/api/onstage", {
        'ask': _0x3b21f7
      }, {
        'headers': {
          'Content-Type': "application/json"
        }
      });
      return _0x5678a9.data;
    } catch (_0x585290) {
      throw new Error("Error: " + _0x585290.message);
    }
  }
  async ["questionWithImage"]({
    ask: _0x2857e3,
    image: _0x47f648
  }) {
    if (!_0x2857e3) {
      throw new Error("Please specify a question!");
    }
    if (!_0x47f648) {
      throw new Error("Please specify a URL for the image!");
    }
    try {
      const _0x394ba6 = await _0x3fb20f.post("https://bard.rizzy.eu.org/api/onstage/image", {
        'ask': _0x2857e3,
        'image': _0x47f648
      }, {
        'headers': {
          'Content-Type': "application/json"
        }
      });
      return _0x394ba6.data;
    } catch (_0xe85cc6) {
      throw new Error("Error: " + _0xe85cc6.message);
    }
  }
}
export default bard;
