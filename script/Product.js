var Container = document.getElementById("Right_side");

// import Display_Prod from "../components/product_imp.js";
import navbar from "../components/navbar.js"

import footer from "../components/footer.js"

let FootC=document.getElementById("footMain");
FootC.innerHTML=footer();

let Nav_Cont=document.getElementById("Nav");
Nav_Cont.innerHTML=navbar();

var Pre = document.getElementById("Prev");
Pre.addEventListener("click", previous);

var Nex = document.getElementById("Next");
Nex.addEventListener("click", next);

let page = 1;
let total_page;
let Sort_Data;


const Random_Fetch = async () => {
  try {
    if (page == 1) {
      Pre.disabled = true;
    } else {
      Pre.disabled = false;
    }

    if (page == total_page) {
      Nex.disabled = true;
    } else {
      Nex.disabled = false;
    }

    let P_Resp = await fetch(`https://muddy-slacks-tick.cyclic.app/Random?_page=${page}&_limit=15`);
    let P_Data = await P_Resp.json();


    total_page = Math.ceil(P_Resp.headers.get('X-Total-Count') / 15);
    document.getElementById("Page_No").textContent = page;
    console.log(total_page);
    console.log(P_Data);

    Sort_Data=P_Data;
 
    Display_Prod(P_Data,Container);
  } catch (error) {
    console.log(error);
  }
};

Random_Fetch();

function previous() {
  if (page == 1) {
    return;
  }
  page--;
  Random_Fetch();
  // fetch_Supp()
}

function next() {
  if (page == total_page) {
    return;
  }
  page++;
  Random_Fetch();
  // fetch_Supp();
}

// <----------------------Fetch Suppliment data----------------->
document.getElementById("Supplements").addEventListener("click",fetch_Supp);

async function fetch_Supp(){
    try {
        if (page == 1) {
          Pre.disabled = true;
        } else {
          Pre.disabled = false;
        }
    
        if (page == total_page) {
          Nex.disabled = true;
        } else {
          Nex.disabled = false;
        }
    
        let Su_Resp = await fetch(`https://muddy-slacks-tick.cyclic.app/Suppliment?_page=${page}&_limit=15`);
        let Su_Data = await Su_Resp.json();
    
        total_page = Math.ceil(Su_Resp.headers.get('X-Total-Count') / 15);
        document.getElementById("Page_No").textContent = page;
        console.log(total_page);
        console.log(Su_Data);
        Sort_Data=Su_Data;
       
        Display_Prod(Su_Data,Container,"https://onemg.gumlet.io/62032426-f40a-4560-8055-b52786105238_1677659525.png?w=878&format=auto");
      } catch (error) {
        console.log(error);
      }
}
// <------------------- End Suppliment fetching-------------------->


// <------------- Fetch Eye Care Data----------------->
document.getElementById("Eye_Care").addEventListener("click",Eye_C);

async function Eye_C(){
    try {
        if (page == 1) {
          Pre.disabled = true;
        } else {
          Pre.disabled = false;
        }
    
        if (page == total_page) {
          Nex.disabled = true;
        } else {
          Nex.disabled = false;
        }
    
        let EC_Resp = await fetch(`hhttps://muddy-slacks-tick.cyclic.app/Eye Care?_page=${page}&_limit=15`);
        let EC_Data = await EC_Resp.json();
    
        total_page = Math.ceil(EC_Resp.headers.get('X-Total-Count') / 15);
        // document.getElementById("Page_No").textContent = total_page;
        console.log(total_page);
        console.log(EC_Data);
        Display_Prod(EC_Data,Container);
      } catch (error) {
        console.log(error);
      }
}
// <-------------------- Search By Brand Name---------------------------->


document.getElementById("B_Search").addEventListener("keyup", () => {
  Find_Brand(Debouncing);
});

let id;

let Find_Brand = (deb) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(() => {
    deb();
  }, 400);
};

Fetch_Brand()
async function Fetch_Brand() {
    // let city = document.getElementById("typesearch").value;
    //  console.log(city);
    let res = await fetch(`https://muddy-slacks-tick.cyclic.app/Brand`)
    let data = await res.json();
    console.log(data)
    display_Brand(data);
  }
    

async function Debouncing(){
   let city_name=document.getElementById("B_Search").value;
  //  console.log(city);
  // https://muddy-slacks-tick.cyclic.app/Random
  let res=await fetch(`https://muddy-slacks-tick.cyclic.app/Brand?q=${city_name}`)
  let data=await res.json();
  
  console.log(data);
  display_Brand(data);

 }
   
function display_Brand(Arr){
var Show_city=document.querySelector("#citynames");
Show_city.innerHTML=""

Arr.map(({Brand_name})=>{
  var p=document.createElement("p");
  p.setAttribute("class","city_name");
  
  p.style.cursor="pointer";
  p.textContent=Brand_name;
 p.addEventListener("click",function(){
    Search_Brand(p.textContent);
})
  var line=document.createElement("hr");
Show_city.append(p,line);
})
}
   
   
async function Search_Brand(query){
  try {
    if (page == 1) {
      Pre.disabled = true;
    } else {
      Pre.disabled = false;
    }

    if (page == total_page) {
      Nex.disabled = true;
    } else {
      Nex.disabled = false;
    }

    let P_Resp = await fetch(`https://muddy-slacks-tick.cyclic.app/Random?_page=${page}&_limit=15&q=${query}`);
    let P_Data = await P_Resp.json();

    total_page = Math.ceil(P_Resp.headers.get('X-Total-Count') / 15);
    // document.getElementById("Page_No").textContent = total_page;
    console.log(total_page);
    console.log(P_Data);
    Display_Prod(P_Data,Container,"https://img6.hkrtcdn.com/28109/bnr_2810825_o.jpg");


  } catch (error) {
    console.log(error);
  }
};

// <----------------- Filter For LTH & HTL------------------------------>

console.log(Sort_Data)

document.getElementById("P_Filter").addEventListener("change",function(){
  Sort_bt_Price(Sort_Data)
});

function Sort_bt_Price(data){
  var Filt_Value=document.getElementById("P_Filter").value;
    if(Filt_Value=="LTH"){
    var Filt= data.sort((a,b)=>{
      return a.Price-b.Price
     })
     Display_Prod(Filt,Container);
   }
  else if(Filt_Value=="HTL"){
    var Filt= data.sort((a,b)=>{
      return b.Price-a.Price
     })
     Display_Prod(Filt,Container);
   }

   else if(Filt_Value==""){
         Display_Prod(data,Container);
   }
  
}


// <------------------------------------------------------ Add to Cart Functionality------------------------>


const Display_Prod = (P_data,Container,url) => {
  if(url!==undefined){
   var Img_Adv=document.getElementById("Advertice");
   Img_Adv.src=url;
  }
    
   Container.innerHTML = ""; // Clear the container before displaying new products
 
   P_data.map((el,i) => {
     var S_Div = document.createElement("div");
     S_Div.setAttribute("id","Sub_Div")
     var Pro_div = document.createElement("div");
     Pro_div.setAttribute("class", "Product");
 
     var Img = document.createElement("img");
     Img.setAttribute("id", "Img");
     Img.src = el.img_url;
 
     var Title = document.createElement("h4");
     Title.setAttribute("class", "Title");
     Title.style.color="#155a5f"
     Title.textContent = el.title;
 
     var P_Div = document.createElement("div");
     P_Div.setAttribute("id", "Pri");
 
     var Price1 = document.createElement("p");
     Price1.innerText = `₹${el.Price_off}`;
     Price1.style.textDecoration = "line-through";
 
     var Price2 = document.createElement("p");
     Price2.innerText = `₹${el.Price}`;
 
     P_Div.append(Price1, Price2);

     // var MyElement=document.createElement("div");
    

     var iconElement = document.createElement('i');
      iconElement.setAttribute("id","rounded-heart")
     iconElement.className = 'fas fa-heart';
 

     // MyElement.append(iconElement)
 
     var ATC = document.createElement("button");
     ATC.setAttribute("class", "ATC");
     ATC.textContent = "Add to Cart";
     ATC.addEventListener("click",function(){
       Add_to_Cart(el,i);
     })
 
     Pro_div.append(Img, Title, P_Div,iconElement);
     Pro_div.addEventListener("click",function(){
       Product_Detail(el);
     })
 
     S_Div.append(Pro_div, ATC);
 
     Container.append(S_Div);
   });
 };

 // <--------------------------- Add to Cart ---------------------------->
 let Add_Cart=JSON.parse(localStorage.getItem("Cart"))||[];
 Product_Count(Add_Cart);

 function Add_to_Cart(item,i){
  let Itexist = Add_Cart.filter((el) => el.id === item.id);
  if (Itexist.length > 0) {
    var POPUP=document.getElementById("Pop_up");
    POPUP.style.visibility="visible"
  }
  else {
    Add_Cart.push(item);
  }
           
      localStorage.setItem("Cart",JSON.stringify(Add_Cart));
     document.getElementById("count").innerText=Add_Cart.length;
     Product_Count(data)
 }

 function Product_Count(data){
   document.getElementById("count").textContent=data.length;
 }



 var Arr_obj=JSON.parse(localStorage.getItem("Product_Detail"))||[];

  function Product_Detail(el){
      Arr_obj.push(el)
     localStorage.setItem("Product_Detail",JSON.stringify(Arr_obj));
     // console.log(Arr_obj)
     window.location.href="Product_Details.html"
  }



// <---------------------Add to cart POP Closed ----------------------->

document.getElementById("Close_pop").addEventListener("click",Closed_p_up);

function Closed_p_up(){
  var POPUP_Cl=document.getElementById("Pop_up");
  POPUP_Cl.style.visibility="hidden"
}

// <-----------------------------------
if(user){
  document.getElementById('login').textContent=user;
}else{
  document.getElementById('login').textContent="Login";
}