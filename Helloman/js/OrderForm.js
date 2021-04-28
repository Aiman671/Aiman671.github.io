function OrderReceipt()
{
    var Name = document.getElementById("name").value; //get Name
    var address = document.getElementById("address").value; //get Address
    var CType = document.getElementById("CType").value; //get Curry Puff type
    var x = parseInt(document.getElementById("t1").value); //get Curry Puff Amount
    var y = parseInt(document.getElementById("t2").value); //get Price per Curry Puff
    var Delivery = document.getElementById("runner").value; //get delivery type
    var PayMet = document.getElementById("PayMet").value; //get payment method
    var price = x * y; //get price
    var result = x * y + 8; //get total price
    alert("Please check your Final Receipt. Thank you!")
    document.getElementById("result").innerHTML ="<b>Name : </b>" + Name + "<br><b>Address : </b>" + address + "<br><b>Curry Puff Type : </b>" + CType
    + "<br><b>Curry Puff Amount : </b>" + x + "<br><b>Price per Curry Puff : </b>" + y + "<br><b>Delivery By : </b>" + Delivery
    + "<br><b>Payment Method : </b>" + PayMet + "<br><b>Price for </b>" + x + " " + CType +"<b> is : </b>RM" + price + "<br><b>Delivery add RM8</b>"
    + "<br><b>Total Price is : </b>RM" + result;
}
        
function Cancel()
{
    alert("Order cancelled. Okay :(");
}