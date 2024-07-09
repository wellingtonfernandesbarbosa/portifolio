const setDarkTheme = (): void => {
  const root = document.documentElement;
  const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const imagemLinkedin = document.getElementById('imagem-linkedin') as HTMLImageElement;
  const imagemGithub = document.getElementById('imagem-github') as HTMLImageElement;
  const imagemEmail = document.getElementById('imagem-email') as HTMLImageElement;

  if (isDarkModeEnabled) {
    imagemLinkedin.src = "./assets/linkedin.png";
    imagemGithub.src = "./assets/github.png";
    imagemEmail.src = "./assets/email.png";
  } else {
    imagemLinkedin.src = "./assets/linkedin-black.png";
    imagemGithub.src = "./assets/github-black.png";
    imagemEmail.src = "./assets/email-black.png";
  }
}

setDarkTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setDarkTheme);


const downloadCV = document.querySelector("#downloadCV") as HTMLAnchorElement;
const downloadIcon = document.querySelector("#downloadIcon") as HTMLImageElement;

downloadCV.addEventListener("mouseenter", () => {
  downloadIcon.setAttribute("src", "assets/download-blue.png");
});

downloadCV.addEventListener("mouseleave", () => {
  downloadIcon.setAttribute("src", "assets/download.png");
});
