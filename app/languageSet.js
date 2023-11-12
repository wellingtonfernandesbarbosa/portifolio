document.addEventListener("DOMContentLoaded", function () {
  let userLang = navigator.language || navigator.userLanguage;

  if (userLang === "en-US" || userLang === "en") {
    let elementsToTranslate = document.querySelectorAll("[data-translate-en]");

    elementsToTranslate.forEach((element) => {
      element.innerHTML = element.getAttribute("data-translate-en");
    });

    let imagesToTranslate = document.querySelectorAll("img[data-translate-en-alt]");

    imagesToTranslate.forEach((image) => {
      let altText = image.getAttribute("data-translate-en-alt");
      image.alt = altText;
    });
  }
});
