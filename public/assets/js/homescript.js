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

    renderfooter(data.ms_info, data.product_categories);
  });
