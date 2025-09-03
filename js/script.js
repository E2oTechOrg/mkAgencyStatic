(function($) {

  "use strict";

  var initPreloader = function() {
    $(document).ready(function($) {
    var Body = $('body');
        Body.addClass('preloader-site');
    });
    $(window).load(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
  }

  // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}


const products = [
  {
    title: "Almond Powder",
    image: "images/PulsesGrainSeeds/Almond Powder.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 520.00,
    discount: "10% OFF"
  },
  {
    title: "Barley",
    image: "images/PulsesGrainSeeds/Barley.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 54.00,
    newPrice: 60.00,
    discount: "10% OFF"
  },
  {
    title: "Sago",
    image: "images/PulsesGrainSeeds/Sago.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 14.00,
    newPrice: 75.00,
    discount: "10% OFF"
  },
  {
    title: "Basil Seeds",
    image: "images/PulsesGrainSeeds/Basil Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 240.00,
    discount: "10% OFF"
  },
  {
    title: "Black Sesame Seeds",
    image: "images/PulsesGrainSeeds/Black Sesame Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 220.00,
    discount: "10% OFF"
  }
];


const productGrid = document.getElementById("productGrid");

products.forEach(product => {
  productGrid.innerHTML += `
    <div class="col">
      <div class="product-item">
        <figure>
          <a href="index.html" title="${product.title}">
        <img src="${product.image}" alt="${product.title}" class="tab-image" style="width:230px; height:210px; object-fit:cover;" />
          </a>
        </figure>
        <div class="d-flex flex-column text-center">
          <h3 class="fs-6 fw-normal">${product.title}</h3>
          <div>
            <span class="rating">${generateStars(product.rating)}</span>
            <span>(${product.reviews})</span>
          </div>
          <div class="d-flex justify-content-center align-items-center gap-2">
            <del>₹${product.oldPrice.toFixed(2)}</del>
            <span class="text-dark fw-semibold">₹${product.newPrice.toFixed(2)}</span>
            <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">${product.discount}</span>
          </div>
          <div class="button-area p-3 pt-0">
            <div class="row g-1 mt-2">
              <div class="col-4">
                <input type="number" name="quantity" class="form-control border-dark-subtle input-number quantity" value="1"/>
              </div>
              <div class="col-7">
                <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart"  data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart">
                  <svg width="18" height="18"><use xlink:href="#cart"></use></svg>
                  Add to Cart
                </a>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>`;
});






const SpicesMasalas = [
  {
    title: "White Turmeric",
    image: "images/SpicesMasalas/White Turmeric.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 220.00,
    discount: "10% OFF"
  },
  {
    title: "Turmeric Pepper",
    image: "images/SpicesMasalas/Turmeric Pepper.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 340.00,
    discount: "10% OFF"
  },
  {
    title: "Cumin Seeds",
    image: "images/SpicesMasalas/Cumin Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 295.00,
    discount: "10% OFF"
  },
  {
    title: "Fennel Seeds",
    image: "images/SpicesMasalas/Fennel Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 160.00,
    discount: "10% OFF"
  },
  {
    title: "Fenugreek Seeds",
    image: "images/SpicesMasalas/Fenugreek Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 95.00,
    discount: "10% OFF"
  },
  {
    title: "Black Pepper",
    image: "images/SpicesMasalas/Black Pepper.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 95.00,
    discount: "10% OFF"
  },
  {
    title: "White Pepper",
    image: "images/SpicesMasalas/White Pepper.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 120.00,
    discount: "10% OFF"
  }
];


const container = document.getElementById("SpicesMasalas");

SpicesMasalas.forEach(product => {
  container.innerHTML += `
    <div class="product-item swiper-slide">
      <figure>
        <a href="index.html" title="${product.title}">
         <img src="${product.image}" alt="${product.title}" class="tab-image" style="width:233px; height:210px; object-fit:cover;" />
        </a>
      </figure>
      <div class="d-flex flex-column text-center">
        <h3 class="fs-6 fw-normal">${product.title}</h3>
        <div>
          <span class="rating">${generateStars(product.rating)}</span>
          <span>(${product.reviews})</span>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <del>₹${product.oldPrice.toFixed(2)}</del>
          <span class="text-dark fw-semibold">₹${product.newPrice.toFixed(2)}</span>
          <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
            ${product.discount}
          </span>
        </div>
        <div class="button-area p-3 pt-0">
          <div class="row g-1 mt-2">
            <div class="col-4">
              <input type="number" class="form-control border-dark-subtle input-number quantity" value="1" />
            </div>
            <div class="col-7">
              <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart">
                <svg width="18" height="18"><use xlink:href="#cart"></use></svg>
                Add to Cart
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>`;
});


const NutsDryFruits = [
  {
    title: "(Dry Grapes) → Raisins",
    image: "images/NutsDryFruits/(Dry Grapes).jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 310.00,
    discount: "10% OFF"
  },
  {
    title: "Almonds",
    image: "images/NutsDryFruits/Almonds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 800.00,
    discount: "10% OFF"
  },
  {
    title: "Cashew Nuts",
    image: "images/NutsDryFruits/Cashew Nuts.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 800.00,
    discount: "10% OFF"
  },
  {
    title: "Pistachios",
    image: "images/NutsDryFruits/Pistachios.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 1850.00,
    discount: "10% OFF"
  },
  {
    title: "Raisins (Nasik variety)",
    image: "images/NutsDryFruits/Raisins (Nasik variety).jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 310.00,
    discount: "10% OFF"
  },
  {
    title: "Raisins (Stump)",
    image: "images/NutsDryFruits/Raisins (Thompson Seedless variety).jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 470.00,
    discount: "10% OFF"
  },
  {
    title: "Raisins (Local variety)",
    image: "images/NutsDryFruits/Raisins (Local variety).jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 310.00,
    discount: "10% OFF"
  }
];



const nuts = document.getElementById("NutsDryFruits");

NutsDryFruits.forEach(product => {
  nuts.innerHTML += `
    <div class="product-item swiper-slide">
      <figure>
        <a href="index.html" title="${product.title}">
         <img src="${product.image}" alt="${product.title}" class="tab-image" style="width:233px; height:210px; object-fit:cover;" />
        </a>
      </figure>
      <div class="d-flex flex-column text-center">
        <h3 class="fs-6 fw-normal">${product.title}</h3>
        <div>
          <span class="rating">${generateStars(product.rating)}</span>
          <span>(${product.reviews})</span>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <del>₹${product.oldPrice.toFixed(2)}</del>
          <span class="text-dark fw-semibold">₹${product.newPrice.toFixed(2)}</span>
          <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
            ${product.discount}
          </span>
        </div>
        <div class="button-area p-3 pt-0">
          <div class="row g-1 mt-2">
            <div class="col-4">
              <input type="number" class="form-control border-dark-subtle input-number quantity" value="1" />
            </div>
            <div class="col-7">
              <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart">
                <svg width="18" height="18"><use xlink:href="#cart"></use></svg>
                Add to Cart
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>`;
});



const HerbsSeasonings = [
  {
    title: "White Sesame Seeds",
    image: "images/HerbsSeasonings/White Sesame Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 260.00,
    discount: "10% OFF"
  },
  {
    title: "Cinnamon",
    image: "images/HerbsSeasonings/Cinnamon.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 255.00,
    discount: "10% OFF"
  },
  {
    title: "Cassia (Chinese Cinnamon)",
    image: "images/HerbsSeasonings/Cassia (Chinese Cinnamon).jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 1350.00,
    discount: "10% OFF"
  },
  {
    title: "Black Cumin",
    image: "images/HerbsSeasonings/Caraway Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 75.00,
    discount: "10% OFF"
  },
  {
    title: "Nutmeg",
    image: "images/HerbsSeasonings/Nutmeg.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 750.00,
    discount: "10% OFF"
  },
  {
    title: "Cardamom",
    image: "images/HerbsSeasonings/Cardamom.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 3000.00,
    discount: "10% OFF"
  },
  {
    title: "Poppy Seeds",
    image: "images/HerbsSeasonings/Poppy Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 1950.00,
    discount: "10% OFF"
  }
];


const herbs = document.getElementById("HerbsSeasonings");

HerbsSeasonings.forEach(product => {
  herbs.innerHTML += `
    <div class="product-item swiper-slide">
      <figure>
        <a href="index.html" title="${product.title}">
         <img src="${product.image}" alt="${product.title}" class="tab-image" style="width:233px; height:210px; object-fit:cover;" />
        </a>
      </figure>
      <div class="d-flex flex-column text-center">
        <h3 class="fs-6 fw-normal">${product.title}</h3>
        <div>
          <span class="rating">${generateStars(product.rating)}</span>
          <span>(${product.reviews})</span>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <del>₹${product.oldPrice.toFixed(2)}</del>
          <span class="text-dark fw-semibold">₹${product.newPrice.toFixed(2)}</span>
          <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
            ${product.discount}
          </span>
        </div>
        <div class="button-area p-3 pt-0">
          <div class="row g-1 mt-2">
            <div class="col-4">
              <input type="number" class="form-control border-dark-subtle input-number quantity" value="1" />
            </div>
            <div class="col-7">
              <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart">
                <svg width="18" height="18"><use xlink:href="#cart"></use></svg>
                Add to Cart
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>`;
});


const Sweeteners = [
  {
    title: "Spice Mix for Soup",
    image: "images/Sweeteners/Soup Masala.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 1950.00,
    discount: "10% OFF"
  },
  {
    title: "Nutmeg",
    image: "images/Sweeteners/Nutmeg.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 2300.00,
    discount: "10% OFF"
  },
  {
    title: "(Javitri) → Mace",
    image: "images/Sweeteners/Mace.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 70.00,
    discount: "10% OFF"
  },
  {
    title: "Panam Kalkandu",
    image: "images/Sweeteners/Palm Candy.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 500.00,
    discount: "10% OFF"
  },
  {
    title: "Palm Jaggery (Palm Sugar)",
    image: "images/Sweeteners/Palm Jaggery (Palm Sugar).jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 280.00,
    discount: "10% OFF"
  },
  {
    title: "Saffron",
    image: "images/Sweeteners/Saffron.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 320.00,
    discount: "10% OFF"
  }
];


const sweet = document.getElementById("Sweeteners");

Sweeteners.forEach(product => {
  sweet.innerHTML += `
    <div class="product-item swiper-slide">
      <figure>
        <a href="index.html" title="${product.title}">
         <img src="${product.image}" alt="${product.title}" class="tab-image" style="width:233px; height:210px; object-fit:cover;" />
        </a>
      </figure>
      <div class="d-flex flex-column text-center">
        <h3 class="fs-6 fw-normal">${product.title}</h3>
        <div>
          <span class="rating">${generateStars(product.rating)}</span>
          <span>(${product.reviews})</span>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <del>₹${product.oldPrice.toFixed(2)}</del>
          <span class="text-dark fw-semibold">₹${product.newPrice.toFixed(2)}</span>
          <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
            ${product.discount}
          </span>
        </div>
        <div class="button-area p-3 pt-0">
          <div class="row g-1 mt-2">
            <div class="col-4">
              <input type="number" class="form-control border-dark-subtle input-number quantity" value="1" />
            </div>
            <div class="col-7">
              <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart">
                <svg width="18" height="18"><use xlink:href="#cart"></use></svg>
                Add to Cart
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>`;
});


const LeavesSpices = [
  {
    title: "Indian Borage (Karpooravalli)",
    image: "images/LeavesSpices/Indian Borage.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 320.00,
    discount: "10% OFF"
  },
  {
    title: "Carom Seeds (Ajwain)",
    image: "images/LeavesSpices/Carom Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 340.00,
    discount: "10% OFF"
  },
  {
    title: "Star Anise",
    image: "images/LeavesSpices/Star Anise.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 650.00,
    discount: "10% OFF"
  },
  {
    title: "Black Stone Flower (Kalpasi)",
    image: "images/LeavesSpices/Black Stone Flower.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 520.00,
    discount: "10% OFF"
  },
  {
    title: "Dry Red Chilli",
    image: "images/LeavesSpices/Dry Red Chilli (Salangai variety).jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 590.00,
    discount: "10% OFF"
  },
  {
    title: "Bay Leaf",
    image: "images/LeavesSpices/Bay Leaf.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 130.00,
    discount: "10% OFF"
  }
];

const leaves = document.getElementById("LeavesSpices");

LeavesSpices.forEach(product => {
  leaves.innerHTML += `
    <div class="product-item swiper-slide">
      <figure>
        <a href="index.html" title="${product.title}">
         <img src="${product.image}" alt="${product.title}" class="tab-image" style="width:233px; height:210px; object-fit:cover;" />
        </a>
      </figure>
      <div class="d-flex flex-column text-center">
        <h3 class="fs-6 fw-normal">${product.title}</h3>
        <div>
          <span class="rating">${generateStars(product.rating)}</span>
          <span>(${product.reviews})</span>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <del>₹${product.oldPrice.toFixed(2)}</del>
          <span class="text-dark fw-semibold">₹${product.newPrice.toFixed(2)}</span>
          <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
            ${product.discount}
          </span>
        </div>
        <div class="button-area p-3 pt-0">
          <div class="row g-1 mt-2">
            <div class="col-4">
              <input type="number" class="form-control border-dark-subtle input-number quantity" value="1" />
            </div>
            <div class="col-7">
              <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart">
                <svg width="18" height="18"><use xlink:href="#cart"></use></svg>
                Add to Cart
              </a>
            </div>
          
          </div>
        </div>
      </div>
    </div>`;
});

const PackagedItems = [
  {
    title: "Cumin Seeds (Packet 50g, 100g)",
    image: "images/PackagedItems/Cumin Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 275.00,
    discount: "10% OFF"
  },
  {
    title: "Fennel Seeds (Packet 50g, 100g)",
    image: "images/PackagedItems/Fennel Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 150.00,
    discount: "10% OFF"
  },
  {
    title: "Fenugreek Seeds (Packet 50g, 100g)",
    image: "images/PackagedItems/Fenugreek Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 90.00,
    discount: "10% OFF"
  },
  {
    title: "Coriander Seeds (Packet 50g, 100g)",
    image: "images/PackagedItems/Coriander Seeds.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 100.00,
    discount: "10% OFF"
  },
  {
    title: "Black Pepper (Packet 50g, 100g)",
    image: "images/PackagedItems/Black Pepper.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 750.00,
    discount: "10% OFF"
  },
  {
    title: "Turmeric Powder (Packet 100g)",
    image: "images/PackagedItems/Turmeric Powder.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 225.00,
    discount: "10% OFF"
  },
   {
    title: "Salt Powder (Packet 250g)",
    image: "images/PackagedItems/Salt Powder.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 900.00,
    discount: "10% OFF"
  }
];

const pack = document.getElementById("PackagedItems");

PackagedItems.forEach(product => {
  pack.innerHTML += `
    <div class="product-item swiper-slide">
      <figure>
        <a href="index.html" title="${product.title}">
         <img src="${product.image}" alt="${product.title}" class="tab-image" style="width:233px; height:210px; object-fit:cover;" />
        </a>
      </figure>
      <div class="d-flex flex-column text-center">
        <h3 class="fs-6 fw-normal">${product.title}</h3>
        <div>
          <span class="rating">${generateStars(product.rating)}</span>
          <span>(${product.reviews})</span>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <del>₹${product.oldPrice.toFixed(2)}</del>
          <span class="text-dark fw-semibold">₹${product.newPrice.toFixed(2)}</span>
          <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
            ${product.discount}
          </span>
        </div>
        <div class="button-area p-3 pt-0">
          <div class="row g-1 mt-2">
            <div class="col-4">
              <input type="number" class="form-control border-dark-subtle input-number quantity" value="1" />
            </div>
            <div class="col-7">
              <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart">
                <svg width="18" height="18"><use xlink:href="#cart"></use></svg>
                Add to Cart
              </a>
            </div>
           
          </div>
        </div>
      </div>
    </div>`;
});


const GroceryEssentials = [
  {
    title: "Salt Powder (Packet 250g)",
    image: "images/GroceryEssentials/Salt Powder (Packet 250g).jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 1080.00,
    discount: "10% OFF"
  },
  {
    title: "Sweet Flag (Acorus Calamus)",
    image: "images/GroceryEssentials/Sweet Flag.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 200.00,
    discount: "10% OFF"
  },
  {
    title: "Baking Soda",
    image: "images/GroceryEssentials/Baking Soda (Sodium Bicarbonate).jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 50.00,
    discount: "10% OFF"
  },
  {
    title: "Corn Flour",
    image: "images/GroceryEssentials/Corn Flour.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 58.00,
    discount: "10% OFF"
  },
  {
    title: "MSG / Ajinomoto",
    image: "images/GroceryEssentials/Ajinomoto.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 130.00,
    discount: "10% OFF"
  },
  {
    title: "Ponnanganni Rice – 30kg Bag",
    image: "images/GroceryEssentials/Ponnanganni Rice – 30kg Bag.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 2920.00,
    discount: "10% OFF"
  },
   {
    title: "Ponnanganni Rice – 55kg Bag",
    image: "images/GroceryEssentials/Ponnanganni Rice – 55kg Bag.jpg",
    rating: 4.5,
    reviews: "1 KG",
    oldPrice: 24.00,
    newPrice: 5355.00,
    discount: "10% OFF"
  }
];

const grocery = document.getElementById("GroceryEssentials");

GroceryEssentials.forEach(product => {
  grocery.innerHTML += `
    <div class="product-item swiper-slide">
      <figure>
        <a href="index.html" title="${product.title}">
         <img src="${product.image}" alt="${product.title}" class="tab-image" style="width:233px; height:210px; object-fit:cover;" />
        </a>
      </figure>
      <div class="d-flex flex-column text-center">
        <h3 class="fs-6 fw-normal">${product.title}</h3>
        <div>
          <span class="rating">${generateStars(product.rating)}</span>
          <span>(${product.reviews})</span>
        </div>
        <div class="d-flex justify-content-center align-items-center gap-2">
          <del>₹${product.oldPrice.toFixed(2)}</del>
          <span class="text-dark fw-semibold">₹${product.newPrice.toFixed(2)}</span>
          <span class="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">
            ${product.discount}
          </span>
        </div>
        <div class="button-area p-3 pt-0">
          <div class="row g-1 mt-2">
            <div class="col-4">
              <input type="number" class="form-control border-dark-subtle input-number quantity" value="1" />
            </div>
            <div class="col-7">
              <a href="#" class="btn btn-primary rounded-1 p-2 fs-7 btn-cart" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasCart"
            aria-controls="offcanvasCart">
                <svg width="18" height="18"><use xlink:href="#cart"></use></svg>
                Add to Cart
              </a>
            </div>
          
          </div>
        </div>
      </div>
    </div>`;
});

function generateStars(rating) {
  let starsHTML = "";
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;

  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>`;
  }
  if (halfStar) {
    starsHTML += `<svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>`;
  }
  return starsHTML;
}






  var initSwiper = function() {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 8,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 5,
        },
        1500: {
          slidesPerView: 8,
        },
      }
    });

    $(".products-carousel").each(function(){
      var $el_id = $(this).attr('id');

      var products_swiper = new Swiper("#"+$el_id+" .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        speed: 500,
        navigation: {
          nextEl: "#"+$el_id+" .products-carousel-next",
          prevEl: "#"+$el_id+" .products-carousel-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 5,
          },
        }
      });

    });


    // product single page
    var thumb_slider = new Swiper(".product-thumbnail-slider", {
      slidesPerView: 5,
      spaceBetween: 20,
      // autoplay: true,
      direction: "vertical",
      breakpoints: {
        0: {
          direction: "horizontal"
        },
        992: {
          direction: "vertical"
        },
      },
    });

    var large_slider = new Swiper(".product-large-slider", {
      slidesPerView: 1,
      // autoplay: true,
      spaceBetween: 0,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // input spinner
  var initProductQty = function(){

    $('.product-qty').each(function(){
      
      var $el_product = $(this);
      var quantity = 0;
      
      $el_product.find('.quantity-right-plus').click(function(e){
        e.preventDefault();
        quantity = parseInt($el_product.find('#quantity').val());
        $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function(e){
        e.preventDefault();
        quantity = parseInt($el_product.find('#quantity').val());
        if(quantity>0){
          $el_product.find('#quantity').val(quantity - 1);
        }
      });

    });

  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }


function generateStars(rating) {
  let starsHTML = "";
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;

  for (let i = 0; i < fullStars; i++) {
    starsHTML += `<svg width="18" height="18" class="text-warning"><use xlink:href="#star-full"></use></svg>`;
  }
  if (halfStar) {
    starsHTML += `<svg width="18" height="18" class="text-warning"><use xlink:href="#star-half"></use></svg>`;
  }
  return starsHTML;
}



  document.addEventListener("DOMContentLoaded", function () {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});



  document.addEventListener("DOMContentLoaded", function () {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});



  // document ready
  $(document).ready(function() {
    
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();

  }); // End of a document

})(jQuery);