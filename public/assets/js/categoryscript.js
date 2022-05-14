let url = new URL(window.location.href);
var ms_id = url.searchParams.get("microsite_id");
let category_id = url.searchParams.get("category");

function rendercategoryproduct(products) {
  let hs = ``;
  products.map((product) => {
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
    hs += `<div class="col-lg-4 mb-4">
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
  document.getElementById(
    "category-products"
  ).innerHTML = `<div class="row card_slider">
  ${hs}
  </div>`;
}

fetch(`https://icircles.app/api/printingpress/category/${ms_id}/${category_id}`)
  .then((data) => data.json())
  .then((res) => {
    document.getElementById(
      "category-header"
    ).innerHTML = `<h2>Products Under <span>${res.category.name}</span> </h2>
      <p>${res.category.description}</p>`;
    rendercategoryproduct(res.products);
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
