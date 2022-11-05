let buttonLanguage = document.getElementById("hulcButton");
let bgLanguage = document.getElementById("hLanguages");
let textLanguage = document.getElementById("hlUl");
let expHeader = document.getElementById("hultuExp");
let bgHeader = document.getElementById("hExp");
let closeBtnHeader = document.getElementById("heCloseBtn");
let body = document.getElementById("body");
let html = document.getElementById("html");

buttonLanguage.onclick = function () {
  if (bgLanguage.style.height == 0) {
    bgLanguage.style.height = "92px";
    textLanguage.style.opacity = "1";
  }
}

expHeader.onclick = function () {
  bgHeader.style.opacity = "1";
  bgHeader.style.pointerEvents = "auto";
  bgHeader.style.transition = "0.2s";
  body.style.overflowY = "hidden";
  html.style.overflowY = "hidden";
  window.scrollTo(0, 0);
}

closeBtnHeader.onclick = function () {
  bgHeader.style.opacity = "0";
  bgHeader.style.pointerEvents = "none";
  bgHeader.style.transition = "0s";
  body.style.overflowY = "auto";
  html.style.overflowY = "auto";
}
