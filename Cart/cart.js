let cart_cont = document.querySelector("#cart-cont");
let emp_cont = document.querySelector("#emp-cont");
let p_text_cont = document.querySelector("#p-text-cont");


let cart_items = JSON.parse(localStorage.getItem("cart"));

if (cart_items.length == 0) {
  emptyCartFunc(cart_items);
}

displayProducts(cart_items);

function displayProducts(data) {
  for (let i = 0; i < data.length; i++) {
    let divEl = document.createElement("div");

    let imageEl = document.createElement("img");
    imageEl.setAttribute("src", data[i].image);

    let nameEl = document.createElement("p");
    nameEl.innerText = data[i].name;

    let priceEl = document.createElement("h2");
    priceEl.innerText = data[i].price;

    let btn = document.createElement("button");
    btn.id = "remove-btn";
    btn.innerText = "Remove";

    divEl.append(imageEl, nameEl, priceEl, btn);
    cart_cont.append(divEl);

    btn.addEventListener("click", function () {
      cart_items = cart_items.filter((el, index) => {
        cart_cont.innerHTML = "";
        return i !== index;
      });
      if (cart_items.length == 0) {
        emptyCartFunc(cart_items);
      }
      localStorage.setItem("cart", JSON.stringify(cart_items));

      displayProducts(cart_items);
    });
  }
}

function emptyCartFunc() {
  let emp_img_div = document.createElement("div");
  emp_img_div.id = "img-div";
  let emp_img = document.createElement("img");
  emp_img.setAttribute("src", "./Screenshot (46).png");
  emp_img_div.append(emp_img);

  let emp_msg_div = document.createElement("div");
  emp_msg_div.id = "msg-div";

  let emp_msg = document.createElement("h1");
  emp_msg.innerText = "Your Amazon Cart is empty";

  let emp_link = document.createElement("a");
  let link = document.createTextNode("Shop today's deals");
  link.id = "link"
  emp_link.append(link);
  emp_link.href = "../Products/products.html";

  let signIn_btn = document.createElement("button");
  signIn_btn.innerText = "Sign in to your account";
  signIn_btn.id = "signIn-btn";
  signIn_btn.className = "sign-btn";

  let signUp_btn = document.createElement("button");
  signUp_btn.innerText = "Sign up now";
  signUp_btn.id = "signUp-btn";
  signUp_btn.className = "sign-btn";

  emp_msg_div.append(emp_msg, emp_link, signIn_btn, signUp_btn)
  emp_cont.append(emp_img_div, emp_msg_div);

  let p_div = document.createElement("div");
  let p_text = document.createElement("p");
  p_text.innerText = `The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
  Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.`
  p_div.append(p_text);
  p_text_cont.append(p_div);
}
