import {describe, it, expect} from './test.ts';
import { isValidPostcode } from './helpers.ts';

describe("MathUtils Tests", function () {
  it('should pass', function() {
    expect(1 === 1);
  });

});


describe('The postcode helper function', () => {
  
  // #region valid pattern variations
  it('should return true when testing the postcode "ne33hd"', () => {
    
    expect(isValidPostcode("ne33hd"));
  });
  it('should return true when testing the postcode "ne3 3hd"', () => {
    
    expect(isValidPostcode("ne3 3hd"));
  });
  it('should return true when testing the postcode "NE3 3HD"', () => {
    
    expect(isValidPostcode("NE3 3HD"));
  });
  it('should return true when testing the postcode "NE33HD"', () => {
    
    expect(isValidPostcode("NE33HD"));
  });
  
  it('should return true when testing the postcode " NE33HD"', () => {
    
    expect(isValidPostcode(" NE33HD"));
  });
  
  it('should return true when testing the postcode " NE33HD "', () => {
    
    expect(isValidPostcode(" NE33HD "));
  });
  // #endregion
  
  // #region Valid postcodes
  
  it('should return true when testing the postcode "NE3 5DP"', () => {
    
    expect(isValidPostcode("NE3 5DP"));
  });

  it('should return true when testing the postcode "CW11 1SX"', () => {
    
    expect(isValidPostcode("CW11 1SX"));
  });

  
  it('should return true when testing the postcode "NE21 6RB"', () => {
    
    expect(isValidPostcode("NE21 6RB"));
  });

  
  it('should return true when testing the postcode "SW1A 1AA"', () => {
    
    expect(isValidPostcode("SW1A 1AA"));
  });

  
  it('should return true when testing the postcode "M1 1AE"', () => {
    
    expect(isValidPostcode("M1 1AE"));
  });

  // #endregion

  // incorrect pattern
  it('should return false when testing the postcode "NE3"', () => {
    
    expect(!isValidPostcode("NE3"));
  });

  // #region Invalid postcodes correct pattern

  it('should return true when testing the postcode "Q1A 4BT"', () => {
    
    expect(isValidPostcode("Q1A 4BT"));
  });

  it('should return true when testing the postcode "AB0 7RE"', () => {
    
    expect(isValidPostcode("AB0 7RE"));
  });

  it('should return true when testing the postcode "LN0A 4JP"', () => {
    
    expect(isValidPostcode("LN0A 4JP"));
  });

  it('should return true when testing the postcode "WS0 9ND"', () => {
    
    expect(isValidPostcode("WS0 9ND"));
  });

  it('should return true when testing the postcode "X8 2HR"', () => {
    
    expect(isValidPostcode("X8 2HR"));
  });

  // #endregion

  // #region Invalid postcodes incorrect pattern

  it('should return false when testing the postcode "ZZ2 TYD"', () => {
    
    expect(!isValidPostcode("ZZ2 TYD"));
  });


  it('should return false when testing the postcode "ABC EFG"', () => {
    
    expect(!isValidPostcode("ABC EFG"));
  });


  it('should return false when testing the postcode "1234 567"', () => {
    
    expect(!isValidPostcode("1234 567"));
  });


  it('should return false when testing the postcode "23A PP2"', () => {
    
    expect(!isValidPostcode("23A PP2"));
  });


  it('should return false when testing the postcode "NE3 H23"', () => {
    
    expect(!isValidPostcode("NE3 H23"));
  });
  // #endregion


});
