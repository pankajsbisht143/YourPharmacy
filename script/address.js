let address  = document.getElementById("submit");

address.addEventListener("click",function(){
    submitAddress();
})

let address_array = JSON.parse(localStorage.getItem("user_address")) || [];

displayAddress(address_array);
 function submitAddress(){
    event.preventDefault();
    let pincode = document.getElementById("pincode").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let address = document.getElementById("address").value;
    let number = document.getElementById("number").value;
    let locality = document.getElementById("locality").value;

    if(pincode == "" ||
       city == ""  ||
       state == ""  ||
       firstName == ""  ||
       lastName == ""  ||
       address == ""  ||
       number == ""  ||
       locality == ""
       ){
        alert("Please Fill All The Required Fields");
        return;
       }

    let address_Obj = {
        firstName : firstName,
        lastName : lastName,
        number : number,
        pincode : pincode,
        address :address,
        city : city,
        state : state,
        locality : locality    
    }
    console.log(address_Obj)
    address_array.push(address_Obj);

    localStorage.setItem("user_address",JSON.stringify(address_array));

    document.getElementById("pincode").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("number").value = "";
    document.getElementById("locality").value = "";

}

function displayAddress(arr){
document.getElementById("add_here").innerText = "";

arr.map(function(elem,idx){
    var Main_div = document.createElement("div");
    Main_div.setAttribute("id","add_div_here");

    var userName = document.createElement("h3");
    userName.textContent = elem.firstName+" "+elem.lastName;

    var userADD = document.createElement("p");
    userADD.textContent = elem.address+","+elem.city+","+elem.state+","+elem.pincode;

    var num = document.createElement("p");
    num.textContent = "Mobile :"+" "+elem.number;

    var remove = document.createElement("button");
    remove.textContent = "REMOVE";
    remove.addEventListener("click",function(){
        deleteFun(elem,idx);
    });

    var edit = document.createElement("button");
    edit.textContent = "EDIT";

    Main_div.append(userName,userADD,num,remove,edit);
    document.getElementById("add_here").append(Main_div);

    // <-------- display none property ------->

    var magic = document.getElementById("address_mainDIV");

    magic.style.display = "None";
});
    var top = document.getElementById("top");
    top.style.border = "none";

}

function deleteFun(elem,idx){
    address_array.splice(idx,1);
    localStorage.setItem("user_address",JSON.stringify(address_array));
    displayAddress(address_array);
    var magic = document.getElementById("address_mainDIV");
    magic.style.display = "visible";
}