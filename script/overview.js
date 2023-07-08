import navbar from "../components/navbar.js"
import footer from "../components/footer.js"

let Over_V_nav=document.getElementById("Ovew_v_Navbar");
Over_V_nav.innerHTML=navbar()

let Over_V_Foot=document.getElementById("Ovew_v_Footer");
Over_V_Foot.innerHTML=footer()


let userID = localStorage.getItem("myID");
let myArray = [];

const myFun = async function(){
    try{
     let result = await fetch(`http://localhost:3000/address/${userID}`);
     let mydata = await result.json();
     myArray.push(mydata)
     displayMydata(myArray);
     console.log(mydata);
    }
    catch(error){
        console.log(error);
    }
}



myFun();

let myPay_div = document.getElementById("ADDR_DIV");
function displayMydata(data){
    myPay_div.innerHTML = "";
    data.forEach(function(elem){
        var Main_div1 = document.createElement("div");
        Main_div1.setAttribute("id","add_div_here1");
    
        var userName1 = document.createElement("h3");
        userName1.textContent = elem.firstName+" "+elem.lastName;
    
        var userADD1 = document.createElement("p");
        userADD1.textContent = elem.address+","+elem.city+","+elem.state+","+elem.pincode;
    
        var num1 = document.createElement("p");
        num1.textContent = "Mobile :"+" "+elem.number;

        Main_div1.append(userName1,userADD1,num1);
        myPay_div.append(Main_div1);
    });

}



let myImages = JSON.parse(localStorage.getItem("Cart")) ||[];

console.log(myImages);
let prod_DIV = document.getElementById("PRODUCT_DIV");
displayMyPro(myImages);


function displayMyPro(data){
    prod_DIV.innerHTML = "";
    data.forEach(function(elem){
        let mypro_Div = document.createElement("div");
        mypro_Div.setAttribute("class","given_img");
        let myImage = document.createElement("img");
        myImage.src = elem.img_url;
        let myTitle = document.createElement("p");
        myTitle.innerText = elem.title;

        mypro_Div.append(myImage,myTitle);
        prod_DIV.append(mypro_Div);
    })
}

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

var finalPrice = JSON.parse(localStorage.getItem("prices"));

var last_price =  finalPrice[0].price;
console.log(last_price);

// payment method with Rayjor-Pay here

var options = {
    "key": "rzp_test_xkkA99Z3D9jiWf", // //Enter the Key ID generated from the Dashboard
    "amount": last_price*100, // //Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Your Pharmeasy",
    "description": "Test Payment",
    "image": "https://img.freepik.com/premium-vector/caduceus-symbol-made-using-bird-wings-poisonous-snakes-healthcare-conceptual-vector-illustration_570429-5842.jpg",
    // //"order_id": "order_Ef80WJDPBmAeNt", //Pass the `id` obtained in the previous step
    // // "account_id": "acc_Ef7ArAsdU5t0XL",
    "handler": function (response){
       // // alert(response.razorpay_payment_id);
      //  // alert(response.razorpay_order_id);
       // // alert(response.razorpay_signature);
    }
};
var rzp1 = new Razorpay(options);
document.getElementById('payment_btn').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}



if(user){
    document.getElementById('login').textContent=user;
  }else{
    document.getElementById('login').textContent="Login";
  }
