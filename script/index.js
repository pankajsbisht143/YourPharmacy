import navbar from "../components/navbar.js";
import footer from "../components/footer.js";

let navbarC=document.getElementById('navbar');
navbarC.innerHTML=navbar();

let footerMain=document.getElementById("footerMain");
footerMain.innerHTML=footer();



document.getElementById("open").addEventListener('click',()=>{
    document.querySelector("#menunavbar").style.display="block";
})

document.getElementById("close").addEventListener('click',()=>{
    document.querySelector("#menunavbar").style.display="none";
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
