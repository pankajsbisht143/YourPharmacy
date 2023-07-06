import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

let navbarC = document.getElementById('navbar');
navbarC.innerHTML = navbar();

let footerMain = document.getElementById("footerMain");
footerMain.innerHTML = footer();



document.getElementById("open").addEventListener('click', () => {
  document.querySelector("#menunavbar").style.display = "block";
})

document.getElementById("close").addEventListener('click', () => {
  document.querySelector("#menunavbar").style.display = "none";
})


const btn = document.getElementsByClassName("btn");
const slide = document.getElementById("slide");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

btn[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

btn[3].onclick = function () {
  slide.style.transform = "translateX(-2400px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};



let inputTag = document.getElementById("Search");


let p = document.getElementById('Search')
p.addEventListener('keypress', () => {
  debouncingFunction(fetchFunction, 1000);

})

let id;
function debouncingFunction(fetchFunction, delay) {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(() => {
    fetchFunction()

  }, delay)
}

let fetchFunction=async()=>{
  try{
    let res=await fetch(`http://localhost:3000/Random?q=${inputTag.value}`);
    let data=await res.json();
    console.log(data);
    display(data);
  }catch(err){
    console.log(err);
  }
}


document.getElementById("btn1").addEventListener('click',()=>{
  window.location.href="Product.html"
})