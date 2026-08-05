import { describe, it, expect } from './test.js';
import {
  getSwipeDirection,
  isNumeric,
  isTraversable,
  isValidPostcode,
  numberOfDays,
  resolvePath,
  safeID,
  snake,
  ucfirst,
  ucwords,
  unsnake,
  zeroPad,
} from './helpers.js';
import { installTestDom } from './test-dom.js';

describe('MathUtils Tests', function () {
  it('should pass', function () {
    expect(1 === 1);
  });
});

describe('The general helper functions', () => {
  installTestDom();

  it('should identify numeric strings only', () => {
    expect(isNumeric('12.5'));
    expect(!isNumeric(''));
    expect(!isNumeric('abc'));
    expect(!isNumeric(12));
  });

  it('should format simple string values', () => {
    expect(zeroPad(7, 3) === '007');
    expect(ucfirst('hello') === 'Hello');
    expect(ucwords('hello world') === 'Hello World');
    expect(unsnake('hello_world') === 'hello world');
    expect(snake('hello world') === 'hello_world');
    expect(safeID('Hello world!') === 'hello_world');
  });

  it('should count inclusive date ranges', () => {
    expect(numberOfDays('01/01/2026', '03/01/2026') === 3);
  });

  it('should resolve nested object paths', () => {
    const data = { user: { name: 'Ada', roles: ['admin'] } };

    expect(resolvePath(data, 'user.name', '') === 'Ada');
    expect(resolvePath(data, 'user.roles[0]', '') === 'admin');
    expect(resolvePath(data, 'account.name', 'fallback') === 'fallback');
  });

  it('should identify traversable values', () => {
    expect(isTraversable([]));
    expect(isTraversable({}));
    expect(!isTraversable(null));
    expect(!isTraversable('value'));
  });

  it('should detect swipe direction', () => {
    expect(getSwipeDirection(100, 100, 20, 100) === 'left');
    expect(getSwipeDirection(100, 100, 180, 100) === 'right');
    expect(getSwipeDirection(100, 100, 100, 20) === 'top');
    expect(getSwipeDirection(100, 100, 100, 180) === 'bottom');
    expect(getSwipeDirection(100, 100, 101, 101) === 'tap');
  });
});

describe('The postcode helper function', () => {
  // #region valid pattern variations
  it('should return true when testing the postcode "ne33hd"', () => {
    expect(isValidPostcode('ne33hd'));
  });
  it('should return true when testing the postcode "ne3 3hd"', () => {
    expect(isValidPostcode('ne3 3hd'));
  });
  it('should return true when testing the postcode "NE3 3HD"', () => {
    expect(isValidPostcode('NE3 3HD'));
  });
  it('should return true when testing the postcode "NE33HD"', () => {
    expect(isValidPostcode('NE33HD'));
  });

  it('should return true when testing the postcode " NE33HD"', () => {
    expect(isValidPostcode(' NE33HD'));
  });

  it('should return true when testing the postcode " NE33HD "', () => {
    expect(isValidPostcode(' NE33HD '));
  });
  // #endregion

  // #region Valid postcodes

  it('should return true when testing the postcode "NE3 5DP"', () => {
    expect(isValidPostcode('NE3 5DP'));
  });

  it('should return true when testing the postcode "CW11 1SX"', () => {
    expect(isValidPostcode('CW11 1SX'));
  });

  it('should return true when testing the postcode "NE21 6RB"', () => {
    expect(isValidPostcode('NE21 6RB'));
  });

  it('should return true when testing the postcode "SW1A 1AA"', () => {
    expect(isValidPostcode('SW1A 1AA'));
  });

  it('should return true when testing the postcode "M1 1AE"', () => {
    expect(isValidPostcode('M1 1AE'));
  });

  // #endregion

  // incorrect pattern
  it('should return false when testing the postcode "NE3"', () => {
    expect(!isValidPostcode('NE3'));
  });

  // #region Invalid postcodes correct pattern

  it('should return true when testing the postcode "Q1A 4BT"', () => {
    expect(isValidPostcode('Q1A 4BT'));
  });

  it('should return true when testing the postcode "AB0 7RE"', () => {
    expect(isValidPostcode('AB0 7RE'));
  });

  it('should return true when testing the postcode "LN0A 4JP"', () => {
    expect(isValidPostcode('LN0A 4JP'));
  });

  it('should return true when testing the postcode "WS0 9ND"', () => {
    expect(isValidPostcode('WS0 9ND'));
  });

  it('should return true when testing the postcode "X8 2HR"', () => {
    expect(isValidPostcode('X8 2HR'));
  });

  // #endregion

  // #region Invalid postcodes incorrect pattern

  it('should return false when testing the postcode "ZZ2 TYD"', () => {
    expect(!isValidPostcode('ZZ2 TYD'));
  });

  it('should return false when testing the postcode "ABC EFG"', () => {
    expect(!isValidPostcode('ABC EFG'));
  });

  it('should return false when testing the postcode "1234 567"', () => {
    expect(!isValidPostcode('1234 567'));
  });

  it('should return false when testing the postcode "23A PP2"', () => {
    expect(!isValidPostcode('23A PP2'));
  });

  it('should return false when testing the postcode "NE3 H23"', () => {
    expect(!isValidPostcode('NE3 H23'));
  });
  // #endregion
});
