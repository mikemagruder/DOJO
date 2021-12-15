function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);
//////////////////////////////////////////////
function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.crustType     = crust;
    pizza.sauceType     = sauce;
    pizza.cheesesType   = cheese;
    pizza.toppings      = toppings;
    return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);
var p3 = pizzaOven("regular", "marinara", "cheddar", ["mushrooms", "olives", "onions", "sausage"])
console.log(p3);
var p4 = pizzaOven("hand tossed", "pesto", ["mozzarella", "feta"], ["sausage", "spinach", "onions"]);
console.log(p4);