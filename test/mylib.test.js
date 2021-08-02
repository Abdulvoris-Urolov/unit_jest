const myLib = require('../mylib');

describe('absolute', () =>{
    it('should return a positive number if input is positive', () =>{
        const result = myLib.absolute(1);
        expect(result).toBe(1); 
    }); 
    
    it('should return a positive number if input is negative', () =>{
        const result = myLib.absolute(-1);
        expect(result).toBe(1); 
    }); 
    
    it('should return a 0 number if input is 0', () =>{
        const result = myLib.absolute(0);
        expect(result).toBe(0); 
    }); 
});

describe('salom', () =>{
    it('should return the greeting message', () =>{
        const result = myLib.salom('Abdulvoris');
        //expect(result).toContain('Abdulvoris');
        expect(result).toMatch(/Abdulvoris/);
    });
});

describe('getCurrencies',()=>{
    it('should return default currencies', ()=>{
        const result = myLib.getCurrencies();
        expect(result).toContain('UZB');
        expect(result).toContain('ENG');
        expect(result).toContain('RUS');
        expect(result).toEqual(expect.arrayContaining(['ENG', 'UZB', 'RUS']));
    });
});

describe('getProduct', ()=>{
    it('should return product with the given id', ()=>{
        const result = myLib.getProduct(11);
        expect(result).toEqual({ id: 11, title:"banana", price: 2 });
        expect(result).toMatchObject({ id: 11, price: 2 });
        expect(result).toHaveProperty('price', 2);
    });
});