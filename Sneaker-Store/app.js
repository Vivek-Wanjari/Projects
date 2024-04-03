const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 9800,
    desc: "Nike Air Force is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's 'Air' technology. The shoe is offered in low-, mid- and high-top styles.",
    colors: [
      {
        code: "black",
        img: "./images/air.png",
      },
      {
        code: "darkblue",
        img: "./images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 12350,
    desc: "When the Air Jordan I debuted in 1985, Nike designers knew they needed a multi-coloured shoe that would stand out from typical all-white basketball sneakers. This latest colourway blends grey suede and black leather on the upper, while 'SP 19 AIR JORDAN 1 HIGH OG' is printed above the white midsole.",
    colors: [
      {
        code: "lightgrey",
        img: "./images/jordan.png",
      },
      {
        code: "green",
        img: "./images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 9050,
    desc: "Although the Nike Blazer was created for basketball, it has become a part of the Nike Skateboarding (SB) sub-brand and is marketed towards the skateboarding community.",
    colors: [
      {
        code: "lightgrey",
        img: "./images/blazer.png",
      },
      {
        code: "green",
        img: "./images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 10700,
    desc: "Nike Crater Impact is part of our sustainability journey to transform trash into shoes that tread a little lighter. Made from at least 25% recycled material by weight, it brings in unique design choices that reduces waste when compared with traditional methods––like an embroidered swoosh, efficient overlays and of course its Crater foam midsole.",
    colors: [
      {
        code: "black",
        img: "./images/crater.png",
      },
      {
        code: "lightgrey",
        img: "./images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 8200,
    desc: "Space Hippie is an exploratory footwear collection inspired by life on Mars—where materials are scarce and there is no resupply mission. Created from scraps, or 'space junk', Space Hippie is the result of sustainable practices meeting radical design.",
    colors: [
      {
        code: "grey",
        img: "./images/hippie.png",
      },
      {
        code: "black",
        img: "./images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change details of current products
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductDesc.textContent = choosenProduct.desc;
    //assining new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size, index) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
