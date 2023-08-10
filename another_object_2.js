//function main() {
    var prodID = Number(prompt("Enter the product Id: "));
    var price = Number(prompt("Enter the product price : "));
    var discount = Number(prompt("Enter the product discount : "));
    
    var prod1= new Product(prodID, price);
    document.write(prod1.prodID + " price: " + prod1.price,"<br>");
    
    prod1.changePrice(discount);
    document.write(prod1.prodID + " new price: " + prod1.price1,"<br>");
//}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;

    this.changePrice = function(discount) 
    {
        this.p = this.price *(discount/100);///here this.price is the real price.
        this.price1 = this.price - this.p;//here this.price1 is the after discount price.
    }
}

