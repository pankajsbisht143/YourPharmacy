var Container = document.getElementById("Right_side");

import Display_Prod from "../components/product_imp.js";
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

    let P_Resp = await fetch(`http://localhost:3000/Random?_page=${page}&_limit=15`);
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
    
        let Su_Resp = await fetch(`http://localhost:3000/Suppliment?_page=${page}&_limit=15`);
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
    
        let EC_Resp = await fetch(`http://localhost:3000/Eye Care?_page=${page}&_limit=15`);
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
    let res = await fetch(`http://localhost:3000/Brand`)
    let data = await res.json();
    console.log(data)
    display_Brand(data);
  }
    

async function Debouncing(){
   let city_name=document.getElementById("B_Search").value;
  //  console.log(city);
  let res=await fetch(`http://localhost:3000/Brand?q=${city_name}`)
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

    let P_Resp = await fetch(`http://localhost:3000/Random?_page=${page}&_limit=15&q=${query}`);
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