let buttonLanguage = document.getElementById("hulcButton");
let bgLanguage = document.getElementById("hLanguages");
let textLanguage = document.getElementById("hlUl");
let expHeader = document.getElementById("hultuExp");
let bgHeader = document.getElementById("hExp");

buttonLanguage.onclick = function () {
  if (bgLanguage.style.height == 0) {
    bgLanguage.style.height = "92px";
    textLanguage.style.opacity = "1";
  }
}

expHeader.onclick = function () {
  bgHeader.style.opacity = "1";
}


/*z-index: 89;
position: fixed;
top: 145px;
right: 5px;
display: flex;
background-color: #1D1F22;
opacity: 0.9;
*/
