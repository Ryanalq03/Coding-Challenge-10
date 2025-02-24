//Coding Challenge 10

//Task 1 Product Class

//Creates class with many properties
class Product { 
    constructor(name, id, price, stock) { 
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };

    //Method that returns product details
    getDetails(){
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`
    };

    //Method that updates the current stock
    updateStock(quantity){
        this.stock -= quantity;
    };
}

//Test Case
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 

prod1.updateStock(3);
console.log(prod1.getDetails());