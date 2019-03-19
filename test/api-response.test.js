/* eslint-env mocha */
/* eslint-disable node/no-deprecated-api */
'use strict';
const { assert } = require('chai');
let psi = require('..');


describe('API', function () {
  this.timeout(50000);

  it('should get data from PageSpeed Insights', () => {
    return psi('addyosmani.com/').then(data => {
      assert.include(data.data.id, 'addyosmani.com');
    });
  });

  it('should support options', () => {
    return psi('addyosmani.com/', {locale: 'no'}).then(data => {
      assert.strictEqual(data.data.lighthouseResult.configSettings.locale, 'no');
    });
  });
});
