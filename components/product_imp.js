
const Display_Prod = (P_data,Container,url) => {
   if(url!==undefined){
    var Img_Adv=document.getElementById("Advertice");
    Img_Adv.src=url;
   }
    
   
    Container.innerHTML = ""; // Clear the container before displaying new products
  
    P_data.map(({ img_url, Price, Price_off,MFG,title,title_sh,img1,img2,img3,img4,Prod_Detail,Key_Ingredient,Key_Benifit}) => {
      var S_Div = document.createElement("div");
      S_Div.setAttribute("id","Sub_Div")
      var Pro_div = document.createElement("div");
      Pro_div.setAttribute("class", "Product");
  
      var Img = document.createElement("img");
      Img.setAttribute("id", "Img");
      Img.src = img_url;
  
      var Title = document.createElement("h4");
      Title.setAttribute("class", "Title");
      Title.style.color="#155a5f"
      Title.textContent = title;
  
      var P_Div = document.createElement("div");
      P_Div.setAttribute("id", "Pri");
  
      var Price1 = document.createElement("p");
      Price1.innerText = `₹${Price_off}`;
      Price1.style.textDecoration = "line-through";
  
      var Price2 = document.createElement("p");
      Price2.innerText = `₹${Price}`;
  
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
        Add_to_Cart(img_url, Price, Price_off, title );
      })
  
      Pro_div.append(Img, Title, P_Div,iconElement);
      Pro_div.addEventListener("click",function(){
        Product_Detail(img_url, Price, Price_off,MFG,title,title_sh,img1,img2,img3,img4,Prod_Detail,Key_Ingredient,Key_Benifit);
      })
  
      S_Div.append(Pro_div, ATC);
  
      Container.append(S_Div);
    });
  };
  


  // <--------------------------- Add to Cart ---------------------------->
  let Add_Cart=JSON.parse(localStorage.getItem("Cart"))||[];

  // document.getElementById("count").textContent=Add_Cart.length;
  // // console.log(Count)
  // var count=document.getElementById("count")
  // count.textContent=Add_Cart.length;
  function Add_to_Cart(img_url, Price, Price_off, title){
       var obj={
        img:img_url,
        Price:Price,
        Price_off:Price_off,
        title:title
       }
       console.log(obj)
       Add_Cart.push(obj);
       
       localStorage.setItem("Cart",JSON.stringify(Add_Cart));
       count.innerText=Add_Cart.length;
       console.log(count)
  }

  // var Arr_obj=JSON.parse(localStorage.getItem("Product_Detail"))||[];

   function Product_Detail(img_url, Price,Price_off,MFG,title,title_sh,img1,img2,img3,img4,Prod_Detail,Key_Ingredient,Key_Benifit){
      var PD_obj={
        img_url:img_url, 
        Price:Price, 
        Price_off:Price_off,
         title:title,
         title_sh:title_sh,
         img1:img1,
         img2:img2,
         img3:img3,
         img4:img4,
         MFG:MFG,
         Prod_Detail:Prod_Detail,
         Key_Ingredient:Key_Ingredient,
         Key_Benifit:Key_Benifit
      }
      // Arr_obj.push(PD_obj)
      localStorage.setItem("Product_Detail",JSON.stringify(PD_obj));
      // console.log(Arr_obj)
      window.location.href="Product_Details.html"
   }



  export default Display_Prod;



// <--------------------- Search By brand name----------------------->
