import navbar from "../components/navbar.js"
import footer from "../components/footer.js"

let Over_V_nav=document.getElementById("Add_v_Navbar");
Over_V_nav.innerHTML=navbar()

let Over_V_Foot=document.getElementById("Add_v_Footer");
Over_V_Foot.innerHTML=footer()

const userData = async function(){
    try{
    let res = await fetch("http://localhost:3000/address");
    let data = await res.json();
    displayUserAddress(data);
    }
    catch(error){
        console.log(error);
    }
}

userData();

let addressContainer = document.getElementById("add_here");
function displayUserAddress(data){
   addressContainer.innerHTML = "";
   data.forEach(function(elem){
    var Main_div = document.createElement("div");
    Main_div.setAttribute("id","add_div_here");

    Main_div.addEventListener("click",function(){
        // myFun();
        this.style.border = "2px solid black";
        localStorage.setItem("myID",elem.id);
    })

    var userName = document.createElement("h3");
    userName.textContent = elem.firstName+" "+elem.lastName;

    var userADD = document.createElement("p");
    userADD.textContent = elem.address+","+elem.city+","+elem.state+","+elem.pincode;

    var num = document.createElement("p");
    num.textContent = "Mobile :"+" "+elem.number;

    var remove = document.createElement("button");
    remove.textContent = "REMOVE";
    remove.setAttribute("id","changeAdd_btn");
    remove.style = "margin-right: 23px;"
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

let addAddress = document.getElementById("add_newAddress");

addAddress.addEventListener("click",function(){
    location.href = "form.html";
})




// payment method with Rayjor-Pay here

// var options = {
//     "key": "rzp_test_xkkA99Z3D9jiWf", // //Enter the Key ID generated from the Dashboard
//     "amount": 100*100, // //Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     "currency": "INR",
//     "name": "Your Pharmeasy",
//     "description": "Test Payment",
//     "image": "https://img.freepik.com/premium-vector/caduceus-symbol-made-using-bird-wings-poisonous-snakes-healthcare-conceptual-vector-illustration_570429-5842.jpg",
//     // //"order_id": "order_Ef80WJDPBmAeNt", //Pass the `id` obtained in the previous step
//     // // "account_id": "acc_Ef7ArAsdU5t0XL",
//     "handler": function (response){
//        // // alert(response.razorpay_payment_id);
//       //  // alert(response.razorpay_order_id);
//        // // alert(response.razorpay_signature);
//     }
// };
// var rzp1 = new Razorpay(options);
// document.getElementById('payment_btn').onclick = function(e){
//     rzp1.open();
//     e.preventDefault();
// }

let cont_btn =  document.getElementById("payment_btn");

cont_btn.addEventListener("click",function(){
    location.href = "./overview.html";
})
    




let myPrice = JSON.parse(localStorage.getItem("prices"));

console.log(myPrice);
displayPrices(myPrice);

function displayPrices(data){
    data.forEach(function(elem){
        let Tprice = document.getElementById("myID1");
        Tprice.innerText = elem.price;

        let TAPrice = document.getElementById("myID3");
        if(0<elem.dis_price){
            TAPrice.innerText = elem.dis_price;
        }else{
            TAPrice.innerText = elem.price;
        }
        
        let DisPrice = document.getElementById("myID2");
        if(0<elem.dis_price){
            DisPrice.innerText = `-${(elem.price - elem.dis_price).toFixed(1)}`;
        }
        else{
            DisPrice.innerText = 0;
        }
    })
}



if(user){
    document.getElementById('login').textContent=user;
  }else{
    document.getElementById('login').textContent="Login";
  }


