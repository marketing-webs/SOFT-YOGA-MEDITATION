// NAZWA SPÓŁKI
const companyNodeList = document.querySelectorAll(".company-name");
companyNodeList.forEach((item) => {
  item.innerText =
    "Bunta, s. r. o., Sídlo Bratislava, Kopčianska 10, PSČ 85101 IČO 54799708";
});

//EMAIL
const emailNodeList = document.querySelectorAll(".company-email");
emailNodeList.forEach((item) => {
  item.innerText = "kniha@bunta.com";
});

// DOMENA
const domainNodeList = document.querySelectorAll(".domain-name");
domainNodeList.forEach((item) => {
  item.innerText = "laryngologickakonzultace-online.cz";
});

//CENA
const priceNodeList = document.querySelectorAll(".product-price");
priceNodeList.forEach((item) => {
  item.innerText = "2800";
});
