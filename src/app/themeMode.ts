const imagemLinkedin = document.getElementById('imagem-linkedin') as HTMLImageElement;
const imagemGithub = document.getElementById('imagem-github') as HTMLImageElement;
const imagemEmail = document.getElementById('imagem-email') as HTMLImageElement;
const imagemWhatsApp = document.getElementById('imagem-whatsapp') as HTMLImageElement;

const setDarkTheme = (): void => {
  const root = document.documentElement;
  const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
  

  if (isDarkModeEnabled) {
    imagemWhatsApp.src = "./assets/whatsapp.png";
    imagemLinkedin.src = "./assets/linkedin.png";
    imagemGithub.src = "./assets/github.png";
    imagemEmail.src = "./assets/email.png";
  } else {
    imagemWhatsApp.src = "./assets/whatsapp-black.png";
    imagemLinkedin.src = "./assets/linkedin-black.png";
    imagemGithub.src = "./assets/github-black.png";
    imagemEmail.src = "./assets/email-black.png";
  }
}

setDarkTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setDarkTheme);

const linkLinkedin = document.getElementById('link-linkedin') as HTMLAnchorElement;

linkLinkedin.addEventListener("mouseenter", () => {
  imagemLinkedin.setAttribute("src", "assets/linkedin-blue.png");
});

linkLinkedin.addEventListener("mouseleave", () => {
  imagemLinkedin.setAttribute("src", "assets/linkedin.png");
});

const linkGithub = document.getElementById('link-github') as HTMLAnchorElement;
linkGithub.addEventListener("mouseenter", () => {
  imagemGithub.setAttribute("src", "assets/github-blue.png");
});

linkGithub.addEventListener("mouseleave", () => {
  imagemGithub.setAttribute("src", "assets/github.png");
});

const linkEmail = document.getElementById('link-email') as HTMLAnchorElement;
linkEmail.addEventListener("mouseenter", () => {
  imagemEmail.setAttribute("src", "assets/email-blue.png");
});

linkEmail.addEventListener("mouseleave", () => {
  imagemEmail.setAttribute("src", "assets/email.png");
});

const linkWhatsApp = document.getElementById('link-whatsapp') as HTMLAnchorElement;
linkWhatsApp.addEventListener("mouseenter", () => {
  imagemWhatsApp.setAttribute("src", "assets/whatsapp-blue.png");
});

linkWhatsApp.addEventListener("mouseleave", () => {
  imagemWhatsApp.setAttribute("src", "assets/whatsapp.png");
});

const downloadCV = document.querySelector("#downloadCV") as HTMLAnchorElement;
const downloadIcon = document.querySelector("#downloadIcon") as HTMLImageElement;

downloadCV.addEventListener("mouseenter", () => {
  downloadIcon.setAttribute("src", "assets/download-blue.png");
});

downloadCV.addEventListener("mouseleave", () => {
  downloadIcon.setAttribute("src", "assets/download.png");
});
