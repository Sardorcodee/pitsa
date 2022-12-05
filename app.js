let section = document.getElementsByClassName("section")[0];
let img = document.getElementsByClassName("non")[0];
let bulak = document.getElementsByClassName("bulak")[0];
let bodring = document.getElementsByClassName("bodring")[0];
let pomidor = document.getElementsByClassName("pomidor")[0];
let ketchup = document.getElementsByClassName("ketchup")[0];
let sir = document.getElementsByClassName("sir")[0];
function pizz() {
  section.setAttribute("class", "none");
  // img.setAttribute("class", "w-50 m-auto");
  // img.setAttribute(
  //   "src",
  //   "https://www.pinclipart.com/picdir/big/535-5355423_pizza-crust-clipart-picture-black-and-white-download.png"
  // );
  bulak.setAttribute("class", "text-center non1");
  narx = 0.9;
  confirm("Siz $0.9ik noni olasizmi!");
  total = 0.9;
  document.getElementById("hisob").innerHTML = `$${total}`;
}
function pizza2() {
  section.setAttribute("class", "none");
  // img.setAttribute("class", "w-50 m-auto");
  // img.setAttribute(
  //   "src",
  //   "https://www.freshntastypizza.com/uploads/ecom/mini/cheese.png"
  // );
  bulak.setAttribute("class", "text-center non2");
  confirm("Siz $1.1 lik noni olasizmi!");
  total = 1.1;
  document.getElementById("hisob").innerHTML = `$${total}`;
}
function bodring1() {
  bodring.setAttribute("class", "text-center");
  confirm("Siz $0.5 ga bodring olasizmi!");
  total = total + 0.5;
  document.getElementById("hisob").innerHTML = `$${total}`;
}
function pomidor1() {
  pomidor.setAttribute("class", "text-center");
  confirm("Siz $0.5 ga pomidor olasizmi!");
  total = total + 0.5;
  document.getElementById("hisob").innerHTML = `$${total}`;
}
function ketchup1() {
  ketchup.setAttribute("class", "text-center");
  confirm("Siz $0.9 ga ketchup olasizmi!");
  total = total + 0.9;
  document.getElementById("hisob").innerHTML = `$${total}`;
}
function sir1() {
  sir.setAttribute("class", "text-center");
  confirm("Siz $0.6 ga pishloq olasizmi!");
  total = total + 0.6;
  document.getElementById("hisob").innerHTML = `$${total}`;
}
function buyurtma() {
  if (1) {
    let rr = Math.floor(Math.random() * 50);
    confirm(`Buyurtma raqamingiz: ${rr}
5minut kuting tayyor buladi!
To'lov narxi - $${total}`);
  } else {
    console.log(6651616);
  }
}
