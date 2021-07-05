const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const servicesLink = document.querySelector("a:nth-of-type(1)");
servicesLink.textContent = siteContent["nav"]["nav-item-1"];
servicesLink.style.color = "green";

const productLink = document.querySelector("a:nth-of-type(2)");
productLink.textContent = siteContent["nav"]["nav-item-2"];
productLink.style.color = "green";

const visionLink = document.querySelector("a:nth-of-type(3)");
visionLink.textContent = siteContent["nav"]["nav-item-3"];
visionLink.style.color = "green";

const featureLink = document.querySelector("a:nth-of-type(4)");
featureLink.textContent = siteContent["nav"]["nav-item-4"];
featureLink.style.color = "green";

const aboutLink = document.querySelector("a:nth-of-type(5)");
aboutLink.textContent = siteContent["nav"]["nav-item-5"];
aboutLink.style.color = "green";

const contactLink = document.querySelector("a:nth-of-type(6)");
contactLink.textContent = siteContent["nav"]["nav-item-6"];
contactLink.style.color = "green";

const titleText = document.querySelector(".cta-text h1");
titleText.textContent = siteContent["cta"]["h1"];

const titleButton = document.querySelector(".cta-text button");
titleButton.textContent = siteContent["cta"]["button"];

const titleImg = document.querySelector(".cta img");
titleImg.setAttribute("src", siteContent["cta"]["img-src"]);

const featuresTitle = document.querySelector(
  ".top-content div:nth-of-type(1) h4"
);
featuresTitle.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelector(
  ".top-content div:nth-of-type(1) p"
);
featuresContent.textContent = siteContent["main-content"]["features-content"];

const aboutTitle = document.querySelector(".top-content div:nth-of-type(2) h4");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector(
  ".top-content div:nth-of-type(2) p"
);
aboutContent.textContent = siteContent["main-content"]["about-content"];

const mainContentImg = document.querySelector(".main-content img");
mainContentImg.setAttribute(
  "src",
  siteContent["main-content"]["middle-img-src"]
);

const servicesTitle = document.querySelector(
  ".bottom-content div:nth-of-type(1) h4"
);
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelector(
  ".bottom-content div:nth-of-type(1) p"
);
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productTitle = document.querySelector(
  ".bottom-content div:nth-of-type(2) h4"
);
productTitle.textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelector(
  ".bottom-content div:nth-of-type(2) p"
);
productContent.textContent = siteContent["main-content"]["product-content"];

const visionTitle = document.querySelector(
  ".bottom-content div:nth-of-type(3) h4"
);
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelector(
  ".bottom-content div:nth-of-type(3) p"
);
visionContent.textContent = siteContent["main-content"]["vision-content"];

const contactTitle = document.querySelector(".contact h4");
contactTitle.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelector(".contact p:nth-of-type(1)");
contactAddress.textContent = siteContent["contact"]["address"];

const contactPhone = document.querySelector(".contact p:nth-of-type(2)");
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelector(".contact p:nth-of-type(3)");
contactEmail.textContent = siteContent["contact"]["email"];

const copyrightFooter = document.querySelector("footer");
copyrightFooter.textContent = siteContent["footer"]["copyright"];

const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
blogLink.style.color = "green";
document.querySelector("nav").prepend(blogLink);

const storeLink = document.createElement("a");
storeLink.textContent = "Store";
storeLink.href = "#";
storeLink.style.color = "green";
document.querySelector("nav").appendChild(storeLink);
