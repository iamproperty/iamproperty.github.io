// @ts-nocheck
import { isValidPostcode } from '../modules/helpers';

describe('The postcode helper function', () => {
  
  test('should return true when testing the postcode "ne33hd"', () => {
    
    expect(isValidPostcode("ne33hd")).toBe(true);
  });
  test('should return true when testing the postcode "ne3 3hd"', () => {
    
    expect(isValidPostcode("ne3 3hd")).toBe(true);
  });
  test('should return true when testing the postcode "NE3 3HD"', () => {
    
    expect(isValidPostcode("NE3 3HD")).toBe(true);
  });
  test('should return true when testing the postcode "NE33HD"', () => {
    
    expect(isValidPostcode("NE33HD")).toBe(true);
  });
  
  test('should return true when testing the postcode " NE33HD"', () => {
    
    expect(isValidPostcode(" NE33HD")).toBe(true);
  });
  
  test('should return true when testing the postcode " NE33HD "', () => {
    
    expect(isValidPostcode(" NE33HD ")).toBe(true);
  });


  
  test('should return true when testing the postcode "NE3 5DP"', () => {
    
    expect(isValidPostcode("NE3 5DP")).toBe(true);
  });

  // #region Valid postcodes
  
  test('should return true when testing the postcode "CW11 1SX"', () => {
    
    expect(isValidPostcode("CW11 1SX")).toBe(true);
  });

  
  test('should return true when testing the postcode "NE21 6RB"', () => {
    
    expect(isValidPostcode("NE21 6RB")).toBe(true);
  });

  
  test('should return true when testing the postcode "SW1A 1AA"', () => {
    
    expect(isValidPostcode("SW1A 1AA")).toBe(true);
  });

  
  test('should return true when testing the postcode "M1 1AE"', () => {
    
    expect(isValidPostcode("M1 1AE")).toBe(true);
  });

  // #endregion

  // incorrect pattern
  test('should return false when testing the postcode "NE3"', () => {
    
    expect(isValidPostcode("NE3")).toBe(false);
  });

  // #region Invalid postcodes correct pattern

  test('should return false when testing the postcode "Q1A 4BT"', () => {
    
    expect(isValidPostcode("Q1A 4BT")).toBe(false);
  });

  test('should return false when testing the postcode "AB0 7RE"', () => {
    
    expect(isValidPostcode("AB0 7RE")).toBe(false);
  });

  test('should return false when testing the postcode "LN0A 4JP"', () => {
    
    expect(isValidPostcode("LN0A 4JP")).toBe(false);
  });

  test('should return false when testing the postcode "WS0 9ND"', () => {
    
    expect(isValidPostcode("WS0 9ND")).toBe(false);
  });

  test('should return false when testing the postcode "X8 2HR"', () => {
    
    expect(isValidPostcode("X8 2HR")).toBe(false);
  });

  // #endregion



  // #region Invalid postcodes incorrect pattern

  test('should return false when testing the postcode "ZZ2 TYD"', () => {
    
    expect(isValidPostcode("ZZ2 TYD")).toBe(false);
  });


  test('should return false when testing the postcode "ABC EFG"', () => {
    
    expect(isValidPostcode("ABC EFG")).toBe(false);
  });


  test('should return false when testing the postcode "1234 567"', () => {
    
    expect(isValidPostcode("1234 567")).toBe(false);
  });


  test('should return false when testing the postcode "23A PP2"', () => {
    
    expect(isValidPostcode("23A PP2")).toBe(false);
  });


  test('should return false when testing the postcode "NE3 H23"', () => {
    
    expect(isValidPostcode("NE3 H23")).toBe(false);
  });


  // #endregion


});
