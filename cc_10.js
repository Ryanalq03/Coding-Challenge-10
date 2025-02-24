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

//Task 2 Order Class

//Creates order class with certain properties
class Order { 
    constructor(orderId, product, quantity) { 
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity);
    };

//Method that retrieves the order details 
getOrderDetails(){
    return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
};
}; 

//Test Cases
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());


//Task 3 Inventory Class

//Creates a class with a property
class Inventory { 
    constructor() {
        this.products = []; 
        this.orders = []; 
    };

//Method that adds a new product to inventory
addProduct(product){
    this.products.push(product);
};

//Method that lists products in array
listProduct(){
    return this.products.forEach(product => console.log(product.getDetails()))
};
}

//Test Cases
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();

