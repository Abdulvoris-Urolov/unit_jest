const myLib = require('../mylib');

describe('abs', () =>{
    it('should return a positive number if input is positive', () =>{
        const result = myLib(1);
        expect(result).toBe(1); 
    }); 
    
    it('should return a positive number if input is negative', () =>{
        const result = myLib(-1);
        expect(result).toBe(1); 
    }); 
    
    it('should return a 0 number if input is 0', () =>{
        const result = myLib(0);
        expect(result).toBe(0); 
    }); 
});
