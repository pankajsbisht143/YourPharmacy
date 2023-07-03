import navbar from "../components/navbar.js";

let navbarC=document.getElementById('navbar');
navbarC.innerHTML=navbar();




document.getElementById("open").addEventListener('click',()=>{
    document.querySelector("#menunavbar").style.display="block";
})

document.getElementById("close").addEventListener('click',()=>{
    document.querySelector("#menunavbar").style.display="none";
})


