// import Display_Prod from "../components/product_imp.js";

// import navbar from "../components/navbar.js"

// // import footer from "../components/footer.js"

// // let FootC=document.getElementById("footMain");
// //  FootC.innerHTML=footer();

// let Nav_Cont=document.getElementById("Nav");
// Nav_Cont.innerHTML=navbar();


var Arr_PD=JSON.parse(localStorage.getItem("Product_Detail"));

// var Arr=[];
// Arr.push(Arr_PD)
Display_PD(Arr_PD)
// console.log(Arr)

function Display_PD(Arr){
   Arr.map(({img_url, Price, Price_off,MFG,title,title_sh,img1,img2,img3,img4,Prod_Detail,Key_Ingredient,Key_Benifit})=>{


     document.getElementById("target").src=img_url;
     document.getElementById("View").src=img_url

     document.getElementById("img1").src=img1;
     document.getElementById("img2").src=img2;
     document.getElementById("img3").src=img2;
     document.getElementById("img4").src=img3;
     document.getElementById("img5").src=img3;
     document.getElementById("img6").src=img4;

     document.getElementById("MFG_by").textContent=MFG;

     document.getElementById("Pr_Title").textContent=title_sh;

     document.getElementById("Descrp").textContent=Prod_Detail;

     document.getElementById("Use_Prod").textContent=title_sh;

     document.getElementById("Benifit").textContent=Key_Benifit;

     document.getElementById("Ingredient").textContent=Key_Ingredient;

	 var P_Off=document.getElementById("MRP");
     P_Off.textContent=`MRP ₹${Price_off}`
	 P_Off.style.color="#00516b"
	 P_Off.style.fontWeight="550"
	 P_Off.style.textDecoration="line-through"

	

	var Pri= document.getElementById("PD_Price")
	 Pri.textContent=`Price : ₹${Price}`;
	 Pri.style.color="#00516b"
	 Pri.style.fontWeight="550"


	 var Off=Math.round((Price/Price_off)*100);

	 var Disc=document.getElementById("Discount");
	 Disc.textContent=`${100-Off}%OFF`
	 Disc.style.color="#23b28d"
	 Disc.style.fontWeight="600"


	 var ADDTOCART=document.getElementById("ATC_PD");
	 ADDTOCART.addEventListener("click",function(){
		Add_on_cart(img_url, Price, Price_off, title)
	 })
   })
}


let Add_Cart=JSON.parse(localStorage.getItem("Cart"))||[];
document.getElementById("count").textContent=Add_Cart.length;

function Add_on_cart(img_url, Price, Price_off, title){
	 var obj={
		img_url:img_url,
	  Price:Price,
	  Price_off:Price_off,
	  title:title
	 }
	 console.log(obj)
	 Add_Cart.push(obj);
	 localStorage.setItem("Cart",JSON.stringify(Add_Cart));
	 window.location.href="cart.html"
}

// <-------------------------  Zoom Effect For Product Detail Page  ---------------------->
(function () {

	if (typeof $ !== "function")
		throw Error('JQuery is not present.');

	var times = 2, handler;

	var init = function () {

		var t = $(this),
			p = t.parent(),
			v = p.next(),
			cs = v.next(),
			iw = v.children();

		handler = function (e) {

			var [w, h] = ['width', 'height'].map(x => $.fn[x].call(t)),
				nw = w * times, nh = h * times, cw = w / times, ch = h / times;

			var eventMap = {
				mousemove: function (e) {

					e = e.originalEvent;

					var x = e.layerX,
						 y = e.layerY,
						 rx = cw / 2,
						 ry = ch / 2,
						 cx = x - rx,
						 cy = y - ry,
						 canY = cy >= 0 && cy <= h - ch,
						 canX = cx >= 0 && cx <= w - cw

					cs.css({
						top: canY ? cy : cy < 0 ? 0 : h - ch,
						left: canX ? cx : cx < 0 ? 0 : w - cw
					});

					iw.css({
						top: canY ? -cy / (h - ch) * (nh - h) : cy < 0 ? 0 : -(nh - h),
						left: canX ? -cx / (w - cw) * (nw - w) : cx < 0 ? 0 : -(nw - w)
					});
				}
			};

			p.width(w).height(h);
			cs.width(cw).height(ch);
			iw.width(nw).height(nh);

			for (let k in eventMap)
				p.on(k, eventMap[k]);
		};

		t.on('load', handler);
	};

	$.fn.extend({

		zoom: function (t) {
			times = t || times;

			for (let x of this)
				init.call(x);

			return this;
		},
		setZoom: function (t) {

			times = t || times;

			if (handler === void 0)
				throw Error('Zoom not initialized.');

			handler();

		}

	});

}());

document.getElementById("Sub_Pin").addEventListener("click",Submit_pin)

function Submit_pin(){
	var PIN=document.getElementById("Enter_Pin").value;
	
	document.getElementById("PIN").textContent=PIN;
	PIN.style.color="#00525d";
	PIN.style.fontWeight="600"
}


document.getElementById("Show_PC").addEventListener("click",Show_Pin)



function Show_Pin(){
	var SAC=document.getElementById("Pop_up");
	SAC.style.visibility="visible";
	// SAC.style.backgroundColor="red";
// document.getElementById("PD_main_Container").style.filter="blur(1px)"
}

document.getElementById("Close_pop").addEventListener("click",Closed_POP);

function Closed_POP(){
	var SAC=document.getElementById("Pop_up");
	SAC.style.visibility="hidden";
	// document.getElementById("PD_main_Container").style.filter="none"
}

// <---------------------------
if(user){
	document.getElementById('login').textContent=user;
  }else{
	document.getElementById('login').textContent="Login";
  }