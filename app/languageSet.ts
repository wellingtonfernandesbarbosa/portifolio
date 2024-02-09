const imagesToTranslate: NodeListOf<HTMLImageElement> = document.querySelectorAll("img[data-translate-en-alt]");
const userLang: string = navigator.language;
console.log(userLang)


document.addEventListener("DOMContentLoaded", () => {

  if (userLang === "en-US" || userLang === "en") {
    let elementsToTranslate = document.querySelectorAll("[data-translate-en]");

    elementsToTranslate.forEach((element) => {
      element.innerHTML = element.getAttribute("data-translate-en") || "";
    });

    imagesToTranslate.forEach((image) => {
      let altText = image.getAttribute("data-translate-en-alt");
      image.alt = altText || "";
    });
  }
});
