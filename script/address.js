const userData = async function(){
    try{
    let res = await fetch(" http://localhost:3000/address");
    let data = await res.json();
    displayUserAddress(data);
    }
    catch(error){
        console.log(error);
    }
}

userData();

let addressContainer = document.getElementById("main_addressContainer");
function displayUserAddress(data){
   addressContainer.innerHTML = "";
   data.forEach(function(elem){
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
    remove.addEventListener("click",async function(){
        try{
          await fetch(`http://localhost:3000/address/${elem.id}`,{
            method : "DELETE",
          });
        }
        catch(err){
            console.log(err);
        }
    });

    var edit = document.createElement("button");
    edit.textContent = "EDIT";
    edit.addEventListener("click",function(){
        location.href = "edit.html";
        localStorage.setItem("addressID",elem.id);
    })

    Main_div.append(userName,userADD,num,remove,edit);
    addressContainer.append(Main_div);
   });
}