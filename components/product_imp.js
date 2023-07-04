
const Display_Prod = (P_data,Container) => {
    Container.innerHTML = ""; // Clear the container before displaying new products
  
    P_data.map(({ img_url, Price, Price_off, title }) => {
      var S_Div = document.createElement("div");
      var P_div = document.createElement("div");
      P_div.setAttribute("class", "Product");
  
      var Img = document.createElement("img");
      Img.setAttribute("id", "Img");
      Img.src = img_url;
  
      var Title = document.createElement("h4");
      Title.setAttribute("class", "Title");
      Title.textContent = title;
  
      var P_Div = document.createElement("div");
      P_Div.setAttribute("id", "Pri");
  
      var Price1 = document.createElement("p");
      Price1.innerText = `${Price_off}`;
      Price1.style.textDecoration = "line-through";
  
      var Price2 = document.createElement("p");
      Price2.innerText = `${Price}`;
  
      P_Div.append(Price1, Price2);
  
      var ATC = document.createElement("button");
      ATC.setAttribute("class", "ATC");
      ATC.textContent = "Add to Cart";
  
      P_div.append(Img, Title, P_Div);
  
      S_Div.append(P_div, ATC);
  
      Container.append(S_Div);
    });
  };



export default Display_Prod;