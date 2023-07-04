var Container = document.getElementById("Right_side");

import Display_Prod from "../components/product_imp.js";
var Pre = document.getElementById("Prev");
Pre.addEventListener("click", previous);

var Nex = document.getElementById("Next");
Nex.addEventListener("click", next);

let page = 1;
let total_page;

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
    // document.getElementById("Page_No").textContent = total_page;
    console.log(total_page);
    console.log(P_Data);
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
  fetch_Supp()
}

function next() {
  if (page == total_page) {
    return;
  }
  page++;
  Random_Fetch();
  fetch_Supp()
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
        // document.getElementById("Page_No").textContent = total_page;
        console.log(total_page);
        console.log(Su_Data);
        Display_Prod(Su_Data,Container);
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
// <-------------------- End Eye Care Data---------------------------->

