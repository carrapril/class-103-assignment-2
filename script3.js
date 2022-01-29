let pname = prompt("Enter the product");
let quantity = prompt("Enter quantity");


var x;
x= prompt("Enter the price");
var result = Number(x)*Number(.016) + Number(x);



console.log(pname);
console.log(quantity);
console.log(result);




document.write(`Product name: ${pname}`); 

document.write(` Quantity: ${quantity}`);


document.write(` Total cost: $ ${result}`);


document.write(" Disclaimer: Mexico sale tax is 16%");
