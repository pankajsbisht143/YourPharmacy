let user_addressID = localStorage.getItem("addressID");

const userData = async function(){
    try{
       let res = await fetch(`http://localhost:3000/address/${user_addressID}`);
       let data = await res.json();

       let {firstName,lastName,number,pincode,address,city,state,locality} = data;
       document.getElementById("pincode").value = pincode;
       document.getElementById("city").value = city;
       document.getElementById("state").value = state;
       document.getElementById("fName").value = firstName;
       document.getElementById("lName").value = lastName;
       document.getElementById("address").value = address;
       document.getElementById("number").value = number;
       document.getElementById("locality").value = locality;
    }
    catch(error){
        console.log(error);
    }
}

userData();

let changeBtn= document.getElementById("change_btn");

changeBtn.addEventListener("click",async function(){
    try{
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
   
       let new_obj= {
           firstName : firstName,
           lastName : lastName,
           number : number,
           pincode : pincode,
           address :address,
           city : city,
           state : state,
           locality : locality    
       }
   
      await fetch(`http://localhost:3000/address/${user_addressID}`,{
       method:"PATCH",
       body: JSON.stringify(new_obj),
       headers:{
           "Content-Type" : "application/json"
       }
      });
      location.href = "address.html"
       }
       catch(err){
           console.log(err);
       }
})