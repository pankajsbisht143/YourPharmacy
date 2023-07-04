let address  = document.getElementById("address_form");

address.addEventListener("submit",function(){
    displayAddress();
})

let address_array = JSON.parse(localStorage.getItem("user_address")) || [];
 function displayAddress(){
    event.preventDefault();
    let pincode = document.getElementById("pincode").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let address = document.getElementById("address").value;
    let number = document.getElementById("number").value;
    
    address_array.push(pincode,city,state,firstName,lastName,address,number);

    localStorage.setItem("user_address",JSON.stringify(address_array));

    let container_address = document.createElement("div");
    container_address.append(address_array);

    document.querySelector("body").append(container_address);
    
}