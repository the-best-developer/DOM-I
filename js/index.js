const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav items
let navItems = document.querySelectorAll('a');
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

//Add nav item
let preItem = document.createElement("a")
preItem.setAttribute("href", "#");
preItem.textContent = "Home";

let appItem = document.createElement("a");
appItem.setAttribute("href", "#");
appItem.textContent = "Partners";

const navSelect1 = document.querySelector('nav');
const navSelect2 = document.querySelector('nav');
navSelect1.appendChild(appItem);
navSelect2.prepend(preItem);

//Nav color green
const navGreen = document.querySelectorAll('nav a');
navGreen.forEach(item => item.style.color = 'green');

//cta
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

//main-top content
let MainTopTextH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
MainTopTextH4[0].textContent = siteContent["main-content"]["features-h4"];
MainTopTextH4[1].textContent = siteContent["main-content"]["about-h4"];

let MainTopTextP = document.querySelectorAll(".main-content .top-content .text-content p");
MainTopTextP[0].textContent = siteContent["main-content"]["features-content"];
MainTopTextP[1].textContent = siteContent["main-content"]["about-content"];

//main-img
let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//main-bottom content
let MainBottomTextH4 = document.querySelectorAll(".main-content .bottom-content .text-content h4");
MainBottomTextH4[0].textContent = siteContent["main-content"]["services-h4"];
MainBottomTextH4[1].textContent = siteContent["main-content"]["product-h4"];
MainBottomTextH4[2].textContent = siteContent["main-content"]["vision-h4"];

let MainBottomTextP = document.querySelectorAll(".main-content .bottom-content .text-content p");
MainBottomTextP[0].textContent = siteContent["main-content"]["services-content"];
MainBottomTextP[1].textContent = siteContent["main-content"]["product-content"];
MainBottomTextP[2].textContent = siteContent["main-content"]["vision-content"];

//Contact info
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//Footer
let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];