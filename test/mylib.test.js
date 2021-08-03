const myLib = require('../mylib');
const db = require('../db')
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

describe('registeruser', ()=>{
    it('should throw error if userName is falsy', () => {
        const falsyItems = [null, undefined, "", 0, false];
        falsyItems.forEach(fi =>{
            expect(() => { mylib.registeruser(fi) }).toThrow();
        });
    });

    it('should return a user object if valid username is passed', ()=>{
        const user = myLib.registeruser('admin');
        expect(user).toMatchObject({ userName: 'admin'});
        expect(user.id).toBeGreaterThan(0);
    });
});

describe('applyDiscount', ()=>{
    it('should apply 10% discount if customer has more than 100 points', () => {
        db.getCustomer = function (customerId){
            console.log('Mijozni olishda mock qildik');
            return { id: customerId, points: 101 }
        }

        const order = { customerId: 7, price: 100, totalPrice:100 };
        myLib.applyDiscount(order);
        expect(order.totalPrice).toBe(90);
    });

    it('should not apply any discount if customer has less than 100 points', () => {
        db.getCustomer = function (customerId){
            console.log('Mijozni olishda mock qildik');
            return { id: customerId, points: 55 }
        }

        const order = { customerId: 7, price: 100, totalPrice:100 };
        myLib.applyDiscount(order);
        expect(order.totalPrice).toBe(100);
    });
});