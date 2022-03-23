console.log("Hello World");

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Modal
var modal = document.getElementById("myModalForAC");
var btnForAC = document.getElementById("btnforcat");
var Btn = document.getElementById("closeBtnForAC");
// console.log(Btn);
btnForAC.onclick = function () {
  modal.style.display = "block";
}
Btn.onclick = function () {
  modal.style.display = "none";
  // console.log("close button clicked")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // console.log("Outside windows clicked")
  }
}
// Modal 2
let productModal = document.querySelector("#myModalForProduct");
let cont = document.querySelectorAll(".cont1");
let close = document.getElementById("closeBtnForProductDetails");

// console.log(productModal);
// console.log(cont);

for (var i = 0; i < cont.length; i++) {
  // let i = 1;
  cont[i].addEventListener("click", function () {
    // Add function here
    // console.log(document.querySelectorAll(".cont1"));
    // cont.style.display = "none";
    productModal.style.display = "block";
  });
}
close.onclick = () => {
  productModal.style.display = "none";
}

// (img2P,name2P,discount2P,bfP2P,afP2P)
const productModalDetails = (img2P, name2P, afP2P, disc2P, bfP2P) =>{
  let afterImg = document.getElementById(img2P);
  let beforeImg = document.getElementById("modal2Image");
  let afterDico = document.getElementById(disc2P);
  let beforeDico = document.getElementById("modal2Discount");
  let afterName = document.getElementById(name2P);
  let beforeName = document.getElementById("modal2ProductName");
  let afterBfPrice = document.getElementById(bfP2P);
  let beforeBfPrice = document.getElementById("modal2BeforePrice");
  let afterAfPrice = document.getElementById(afP2P);
  let beforeAfPrice = document.getElementById("modal2AfterPrice");
  // let afterAboutProduct = document.getElementById(aboutPrdt);
  // let beforeAboutProduct = document.getElementById("productDetailsAbout");

  // console.log(beforeImg.src);
  // console.log(afterDico.innerText);
  // console.log(beforeDico.innerText);
  // console.log(afterName.innerHTML);



  beforeImg.src = afterImg.src;
  beforeName.innerHTML = afterName.innerHTML;
  beforeAfPrice.innerHTML = afterAfPrice.innerHTML;
  beforeDico.innerHTML = afterDico.innerHTML;
  beforeBfPrice.innerHTML = afterBfPrice.innerHTML;
}