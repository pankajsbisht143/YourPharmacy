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
        let myImage = document.createElement("img");
        myImage.src = elem.img;
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
        if(elem.price>elem.dis_price){
            DisPrice.innerText = `-${elem.price - elem.dis_price}`;
        }
        else{
            DisPrice.innerText = 0;
        }
    })
}



