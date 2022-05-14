function renderheader(ms_info, menus) {
  document.title = ms_info.name;
  document.getElementById("entity_phone").innerHTML = ms_info.entity_phone;
  document.getElementById("entity_email").innerHTML = ms_info.entity_email;
  document.getElementById("entity_address").innerHTML = ms_info.location;
  document.querySelector(".logo img").src =
    "https://icircles.app/uploads/micrositeslogo/" + ms_info.entity_logo;
  let nav = ``;
  menus.map((menu) => {
    if (menu.status == 1 && menu.menui_item == 1) {
      nav += `<li><a href="./menu.html/?menu_id=${menu.id}">Business Cards</a></li>`;
    }
  });
  document.getElementById("nav-menu").innerHTML = nav;
  document.getElementById("nav-menu-mobile").innerHTML = nav;
}
function renderbanner(ms_id, sliders) {
  let indicator = ``;
  let sliderhs = ``;
  sliders.map((slider, index) => {
    indicator += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${index}" class="${
      index === 0 ? "active" : ""
    }" aria-current="true" aria-label="Slide 1"></button>`;

    sliderhs += `<div class="carousel-item ${index === 0 ? "active" : ""}">
    <div class="banner">
        <div class="container">
            <div class="banner_wrapper">
                <div class="row d-flex align-items-center">
                    <div class="col-md-6 col-lg-6">
                        <div class="banner_item">
                            <h2>${slider.title}</h2>
                            ${slider.description}
                            <div class="banner_btn">
                                <a href="#">Shop Now</a>
                                <a href="#" style="background-color: #333333;"> Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <div class="banner_content">
                            <img src="https://icircles.app/uploads/slider/${ms_id}/${
      slider.image
    }" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  });
  document.getElementById("banner-carousel-indicators").innerHTML = indicator;
  document.getElementById("banner-carousel-inner").innerHTML = sliderhs;
}

function rendercategory(categories) {
  let categoryhs = ``;
  categories.map((category) => {
    categoryhs += `<div class="col-sm-6 col-md-4 col-lg-3">
    <div class="populer_wrap">
        <div class="popular_img">
            <img src="images/popular1.png" alt="">
        </div>
        <div class="wrap_title">
            <a href="./category.html?microsite_id=${category.microsite_id}&category=${category.id}">${category.name}<span><i class="fa-solid fa-right-long"></i></span></a>
        </div>
    </div>
</div>`;
  });
  document.getElementById("popular-section-category").innerHTML = categoryhs;
}

function renderproducts(products1, products2, products3) {
  fp = ``;
  products1.map((product) => {
    let price = product.price;
    let sell_price = 0;
    let pricehs = `<span class="sell-price">$${price}</span>`;
    if (product.discount_type == 1) {
      sell_price = price - product.discount;
      pricehs = `<span class="line-through">$${price}</span><span class="sell-price">$${sell_price}</span>`;
    }
    if (product.discount_type == 2) {
      sell_price = price - (price * product.discount) / 100;
      pricehs = `<span class="line-through">$${price}</span><span class="sell-price">$${sell_price}</span>`;
    }
    let images = product.images.split(";");
    imghs = ``;
    images.map((image) => {
      imghs += `<img src="https://icircles.app/uploads/rfq/${product.microsite_id}/${image}" alt="">`;
    });
    fp += `<div class="col-lg-4">
    <div class="card_item">
        <div class="content_img">
            ${imghs}
        </div>
        <div class="content_profile">
            <img src="https://icircles.app/uploads/rfq/${product.microsite_id}/${images[0]}" alt="">
        </div>
        <div class="content_text">
            <div class="content_head">
                <a href="./product.html?ms_id=${product.microsite_id}&product_id=${product.id}">${product.name}<span><i
                            class="fa-solid fa-circle-check"></i></span></a>
                <a href="#"><i class="fa-solid fa-heart"></i></a>
            </div>
            <div class="content_footer">
                ${pricehs}
            </div>
        </div>
    </div>
</div>`;
  });
  products2.map((product) => {
    let price = product.price;
    let sell_price = 0;
    let pricehs = `<span class="sell-price">$${price}</span>`;
    if (product.discount_type == 1) {
      sell_price = price - product.discount;
      pricehs = `<span class="line-through">$${price}</span><span class="sell-price">$${sell_price}</span>`;
    }
    if (product.discount_type == 2) {
      sell_price = price - (price * product.discount) / 100;
      pricehs = `<span class="line-through">$${price}</span><span class="sell-price">$${sell_price}</span>`;
    }
    let images = product.images.split(";");
    imghs = ``;
    images.map((image) => {
      imghs += `<img src="https://icircles.app/uploads/rfq/${product.microsite_id}/${image}" alt="">`;
    });
    fp += `<div class="col-lg-4">
    <div class="card_item">
        <div class="content_img">
            ${imghs}
        </div>
        <div class="content_profile">
            <img src="https://icircles.app/uploads/rfq/${product.microsite_id}/${images[0]}" alt="">
        </div>
        <div class="content_text">
            <div class="content_head">
                <a href="#">${product.name}<span><i
                            class="fa-solid fa-circle-check"></i></span></a>
                <a href="#"><i class="fa-solid fa-heart"></i></a>
            </div>
            <div class="content_footer">
                ${pricehs}
            </div>
        </div>
    </div>
</div>`;
  });
  products3.map((product) => {
    let price = product.price;
    let sell_price = 0;
    let pricehs = `<span class="sell-price">$${price}</span>`;
    if (product.discount_type == 1) {
      sell_price = price - product.discount;
      pricehs = `<span class="line-through">$${price}</span><span class="sell-price">$${sell_price}</span>`;
    }
    if (product.discount_type == 2) {
      sell_price = price - (price * product.discount) / 100;
      pricehs = `<span class="line-through">$${price}</span><span class="sell-price">$${sell_price}</span>`;
    }
    let images = product.images.split(";");
    imghs = ``;
    images.map((image) => {
      imghs += `<img src="https://icircles.app/uploads/rfq/${product.microsite_id}/${image}" alt="">`;
    });
    fp += `<div class="col-lg-4">
    <div class="card_item">
        <div class="content_img">
            ${imghs}
        </div>
        <div class="content_profile">
            <img src="https://icircles.app/uploads/rfq/${product.microsite_id}/${images[0]}" alt="">
        </div>
        <div class="content_text">
            <div class="content_head">
                <a href="#">${product.name}<span><i
                            class="fa-solid fa-circle-check"></i></span></a>
                <a href="#"><i class="fa-solid fa-heart"></i></a>
            </div>
            <div class="content_footer">
                ${pricehs}
            </div>
        </div>
    </div>
</div>`;
  });
  let hs = `<div class="row card_slider">
  ${fp}
  </div>`;

  document.getElementById("featured-products").innerHTML = hs;
}
function renderfooter(ms_info, categories) {
  let socails = ``;
  if (ms_info.fb_url) {
    socails += `<li><a href="${ms_info.fb_url}"><i class="fa-brands fa-facebook-f"></i></a></li>`;
  }
  if (ms_info.twiter_url) {
    socails += `<li><a href="${ms_info.twiter_url}"><i class="fa-brands fa-twitter"></i></a></li>`;
  }
  if (ms_info.linkedin_url) {
    socails += `<li><a href="${ms_info.linkedin_url}"><i class="fa-brands fa-linkedin-in"></i></a></li>`;
  }
  if (ms_info.website) {
    socails += `<li><a href="${ms_info.website}"><i class="fab fa-battle-net"></i></a></li>`;
  }
  let len = categories.length;
  let first_services = ``;
  let second_services = ``;
  categories.map((category, index) => {
    if (index <= len / 2) {
      first_services += `<li><a href="./category.html/?microsite_id=${category.microsite_id}&category=${category.id}"><span><i class="fa-solid fa-angles-right"></i></span>${category.name}</a>`;
    } else {
      second_services += `<li><a href="./category.html/?microsite_id=${category.microsite_id}&category=${category.id}"><span><i class="fa-solid fa-angles-right"></i></span>${category.name}</a>`;
    }
  });
  let contacths = ``;
  if (ms_info.entity_phone) {
    contacths += `<li><a href="#"><span><i class="fa-brands fa-whatsapp"></i></span> ${ms_info.entity_phone}</a></li>`;
  }
  if (ms_info.entity_email) {
    contacths += `<li><a href="#"><span><i
    class="fa-solid fa-envelope-open-text"></i></span> ${ms_info.entity_email}</a></li>`;
  }
  if (ms_info.location) {
    contacths += `<li><a href="#"><span><i class="fa-solid fa-location-dot"></i></span> ${ms_info.location}</a></li>`;
  }
  document.getElementById("company_details").innerHTML = ms_info.entity_details;
  document.getElementById("footer_socials").innerHTML = socails;
  document.getElementById("first-services").innerHTML = first_services;
  document.getElementById("second-services").innerHTML = second_services;
  document.getElementById("footer-contact").innerHTML = contacths;
  document.getElementById(
    "copyright"
  ).innerHTML = `2022 ${ms_info.name}. All Rights Reserved`;
}

fetch("https://icircles.app/api/printingpress/home/140")
  .then((res) => res.json())
  .then((data) => {
    renderheader(data.ms_info, data.menus);
    renderbanner(data.ms_id, data.sliders);
    rendercategory(data.product_categories);
    renderproducts(
      data.featured_products,
      data.popular_products,
      data.bestselling_products
    );
    renderfooter(data.ms_info, data.product_categories);

    $(".card_slider").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      autoplay: false,
      autoplaySpeed: 1800,
      speed: 800,
      dots: false,
      prevArrow: '<i class="fas fa-chevron-left cardprev"></i>',
      nextArrow: '<i class="fas fa-chevron-right cardnext"></i>',
      responsive: [
        {
          breakpoint: 968,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
          },
        },
      ],
    });
    $(".content_img").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1800,
      speed: 800,
      dots: true,
      prevArrow: '<i class="fas fa-chevron-left prev"></i>',
      nextArrow: '<i class="fas fa-chevron-right next"></i>',
      responsive: [
        {
          breakpoint: 968,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: "0px",
            slidesToShow: 1,
          },
        },
      ],
    });
  });

localStorage.setItem("name", "Rafat");
localStorage.getItem("name");
