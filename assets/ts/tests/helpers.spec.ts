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

  // false results
  test('should return false when testing the postcode "NE3"', () => {
    
    expect(isValidPostcode("NE3")).toBe(false);
  });
});
