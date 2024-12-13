let allItems = [
  {
    category: "electronics",
    image: "../electronics/laptop.png",
    name: "HP victus gaming laptop",
    price: "Rs. 66,000",
  },
  {
    category: "decor",
    image: "../decor/Screenshot (32). - Copy.png",
    name: "Sitting Buddha Idol Statue",
    price: "Rs. 899",
  },
  {
    category: "makeup",
    image: "../makeup/Screenshot (25.).png",
    name: "Triangle Cosmetics Powder Puffs",
    price: "Rs. 199",
  },
  {
    category: "electronics",
    image: "../electronics/camera.png",
    name: "Nikon Z50 camera",
    price: "Rs. 23,299",
  },
  {
    category: "dining",
    image: "../dining/Screenshot (21.).png",
    name: "Wooden Insulating Pot Stand",
    price: "Rs. 2,099",
  },
  {
    category: "electronics",
    image: "../electronics/earphone.png",
    name: "Boat airdops i2",
    price: "Rs. 1,299",
  },
  {
    category: "fashion",
    image: "../fashion/kurta.png",
    name: "Men's Cotton Soid Long Kurta",
    price: "Rs. 2,999",
  },
  {
    category: "dining",
    image: "../dining/Screenshot (22).png",
    name: "Pvc Magnolia Dining Table",
    price: "Rs. 2,545",
  },
  {
    category: "makeup",
    image: "../makeup/Screenshot (45).png",
    name: "Onestroke Super Balck Kajal",
    price: "Rs. 270",
  },
  {
    category: "fashion",
    image: "../fashion/saree.png",
    name: "Women's Silk Cotton Saree",
    price: "Rs. 3,199",
  },
  {
    category: "beauty",
    image: "../beauty/Screenshot (16).png",
    name: "Vitamin C face serum",
    price: "Rs. 442",
  },
  {
    category: "fashion",
    image: "../fashion/sweatshirt.png",
    name: "Men's Casual Hooded Sweatshirt",
    price: "Rs. 1,999",
  },
  {
    category: "electronics",
    image: "../electronics/tablet.png",
    name: "Samasung tab A9+",
    price: "Rs. 34,000",
  },
  {
    category: "beauty",
    image: "../beauty/Screenshot (18).png",
    name: "Olay Day Cream with SPF 15",
    price: "Rs. 699",
  },
  {
    category: "electronics",
    image: "../electronics/watch.png",
    name: "Noise pulse 2",
    price: "Rs. 2,499",
  },
  {
    category: "beauty",
    image: "../beauty/Screenshot. (17).png",
    name: "Lakme Vitamin C+ Day Cream",
    price: "Rs. 245",
  },

  {
    category: "dining",
    image: "../dining/Screenshot (21).png",
    name: "Round Serving Trays Set of 3",
    price: "Rs. 999",
  },

  {
    category: "beauty",
    image: "../beauty/Screenshot (19).png",
    name: "Fruit Brightening Face Pack",
    price: "Rs. 168",
  },
  {
    category: "decor",
    image: "../decor/Screenshot (29)....png",
    name: "Ganesh Wall Hanging Sculpture",
    price: "Rs. 549",
  },
  {
    category: "dining",
    image: "../dining/Screenshot (220).png",
    name: "Spoon Stand for Kitchen",
    price: "Rs. 1,499",
  },
  {
    category: "kitchen",
    image: "../kitchen/Screenshot (37).png",
    name: "Metal Foldable Rolling Cart",
    price: "Rs. 2649",
  },
  {
    category: "makeup",
    image: "../makeup/Screenshot (23).png",
    name: "Makeup Sponge Set, 4 Pieces",
    price: "Rs. 299",
  },

  {
    category: "fashion",
    image: "../fashion/suit.png",
    name: "Women's Cotton Salwar Suit Set",
    price: "Rs. 1,799",
  },
  {
    category: "makeup",
    image: "../makeup/Screenshot (26.).png",
    name: "Foundation Blush Brush",
    price: "Rs. 549",
  },
  {
    category: "fashion",
    image: "../fashion/kid.png",
    name: "Kid's Flannel Jumpsuit",
    price: "Rs. 1,299",
  },

  {
    category: "decor",
    image: "../decor/Screenshot (30)..png",
    name: "Wooden Wall Decorative Item Set",
    price: "Rs. 499",
  },

  {
    category: "decor",
    image: "../decor/Screenshot (30)...png",
    name: "Small Ceramic Table Lamp",
    price: "Rs. 599",
  },
  {
    category: "kitchen",
    image: "../kitchen/Screenshot (33).png",
    name: "Auto Clean Wall Mounted Chimney",
    price: "Rs. 13,999",
  },
  {
    category: "decor",
    image: "../decor/Screenshot (31). - Copy.png",
    name: "Quote Decorative Wall Hanger",
    price: "Rs. 429",
  },
  {
    category: "toys",
    image: "../toys/Screenshot (39).png",
    name: "Plastic Activity and Learning Ball",
    price: "Rs. 369",
  },
  {
    category: "kitchen",
    image: "../kitchen/Screenshot (34).png",
    name: "6 in 1 Fridge Storage Box",
    price: "Rs. 275",
  },
  {
    category: "toys",
    image: "../toys/Screenshot (40).png",
    name: "talking Tom Cat Toy",
    price: "Rs. 555",
  },

  {
    category: "kitchen",
    image: "../kitchen/Screenshot (35).png",
    name: "Stainless Steel Chopping Board",
    price: "Rs. 379",
  },
  {
    category: "toys",
    image: "../toys/Screenshot (43).png",
    name: "Kids Digital HD Camera",
    price: "Rs. 899",
  },
  {
    category: "kitchen",
    image: "../kitchen/Screenshot (36).png",
    name: "Wooden Cooking Spoon Set",
    price: "Rs. 499",
  },
  {
    category: "dining",
    image: "../dining/Screenshot (44).png",
    name: "6 Pc Silicon Baby Tableware Set",
    price: "Rs. 1,199",
  },
  {
    category: "toys",
    image: "../toys/Screenshot (41).png",
    name: "2 Pcs Octopus Soft Toys",
    price: "Rs. 239",
  },
  {
    category: "beauty",
    image: "../beauty/Screenshot (17).png",
    name: "Bio Organic Sandalwood Face Pack",
    price: "Rs. 199",
  },
  {
    category: "makeup",
    image: "../makeup/Screenshot (24.).png",
    name: "Mini Finger Powder Puff, 4 Pieces",
    price: "Rs. 239",
  },
  {
    category: "toys",
    image: "../toys/Screenshot (42).png",
    name: "Kids Bike Toy with Battery",
    price: "Rs. 13,999",
  },
];

let selected_prod = document.getElementById("category");
let hero_sec = document.querySelector(".hero-sec");

let lsData = JSON.parse(localStorage.getItem("cart"));
if (lsData === null) {
  lsData = [];
}

displayProducts(allItems);

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
    btn.innerText = "Add to cart";

    divEl.append(imageEl, nameEl, priceEl, btn);
    hero_sec.append(divEl);

    btn.addEventListener("click", function () {
      lsData.push(data[i]);
      localStorage.setItem("cart", JSON.stringify(lsData));
      alert("Item addded to cart");
    });
  }
}

// filtering selected products
selected_prod.addEventListener("change", function () {
  let filtered_data = allItems.filter((el) => {
    hero_sec.innerHTML = "";
    if (selected_prod.value === "all") {
      displayProducts(allItems);
    } else {
      return selected_prod.value === el.category;
    }
  });
  displayProducts(filtered_data);
});
