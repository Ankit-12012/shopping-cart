var ecart = 0;
var totale = 5;
var remaine = 0;
var showcart = [];
var cart = document.getElementById("showcart");
var no;
function displayIteme() {
  document.getElementById("eitem").innerHTML = `Remain Item = ${totale} <br>
                      choose Item = ${remaine}`;
  console.log("remain item");
}
function addCart(no) {
  totale--;
  remaine++;
  document.getElementById("btn" + no).innerHTML = "added to cart";
  document.getElementById("btn" + no).style.backgroundColor = "aqua";
  addToEcart(no);
  displayIteme();
}
function addToEcart(no) {
  switch (no) {
    case 1:
      ecart += 200000;
      showcart.push("Laptop = 2,00,000 <br>");
      break;
    case 2:
      ecart += 150000;
      showcart.push("Mobile = 1,50,000 <br>");
      break;
    case 3:
      ecart += 100000;
      showcart.push("Tablet = 1,00,000 <br>");
      break;
    case 4:
      ecart += 60000;
      showcart.push("Headphone = 60,000 <br>");
      break;
    case 5:
      ecart += 25000;
      showcart.push("Earbud = 25,000 <br>");
      break;
  }
}

function showCart() {
  const showcart2 = document.getElementById("showcart");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const len = showcart.length;
  showcart2.innerHTML = "<h2 style='color:blue;'> CART </h2>";
  for (var i = 0; i < len; i++) {
    let ip = document.createElement("p");
    ip.innerHTML = ` ${showcart[i]} `;
    showcart2.appendChild(ip);
  }
  const p3 = document.createElement("p");
  p3.innerHTML = ` -------------------------------<br>
  <b> Total :${ecart} </b><br>  `;
  showcart2.appendChild(p3);

  if (ecart > 180000) {
    p.innerHTML = `Extra discount : 5% <br>
                 -------------------------------<br>
                <b> Total : ${ecart - ecart * 0.05} </b>`;
    ecart -= ecart * 0.05;
    showcart2.appendChild(p);
  }
  p2.innerHTML = ` G.S.T : 18%<br>
                  -------------------------------<br>
                  <b> Total : ${ecart + ecart * 0.18} </b>`;
  showcart2.appendChild(p);
}
