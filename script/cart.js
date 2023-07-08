import navbar from "../components/navbar.js";
import footer from "../components/footer.js";
document.getElementById("nav").innerHTML = navbar
document.getElementById("footer").innerHTML = footer
document.getElementById("count").innerText = get_items.length;

if(user){
    document.getElementById('login').textContent=user;
  }else{
    document.getElementById('login').textContent="Login";
  }