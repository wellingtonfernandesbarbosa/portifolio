document.addEventListener("DOMContentLoaded", function () {
  let userLang = navigator.language || navigator.userLanguage;

  if (userLang === "en-US" || userLang === "en") {
    let elementsToTranslate = document.querySelectorAll("[data-translate-en]");

    elementsToTranslate.forEach(function (element) {
      element.innerHTML = element.getAttribute("data-translate-en");
    });
  }
});
