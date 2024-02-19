const imagemLinkedin = document.getElementById('imagem-linkedin') as HTMLImageElement;
const imagemGithub = document.getElementById('imagem-github') as HTMLImageElement;
const imagemEmail = document.getElementById('imagem-email') as HTMLImageElement;

const setDarkTheme = (): void => {
    const root = document.documentElement;
    const currentTime = new Date().getHours();
    const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (isDarkModeEnabled || (currentTime >= 18 || currentTime < 6)) {
      root.style.setProperty('--primary-color', '#e0e0e0');
      root.style.setProperty('--secondary-color', '#22d4fd');
      root.style.setProperty('--tertiary-color', '#727272');
      root.style.setProperty('--quaternary-color', '#101010');
      root.style.setProperty('--background-color', '#161616');
      root.style.setProperty('--background-primary-color', '#101010');
      root.style.setProperty('--background-secondary-color', '#151515');
      root.style.setProperty('--background-tertiary-color', '#202020');
      root.style.setProperty('--background-quaternary-color', '#353535');
      imagemLinkedin.src = "./assets/linkedin.png";
      imagemGithub.src = "./assets/github.png";
      imagemEmail.src = "./assets/email.png";
    } else {
      root.style.setProperty('--primary-color', '#292929');
      root.style.setProperty('--secondary-color', '#007bff');
      root.style.setProperty('--tertiary-color', '#a5a5a5');
      root.style.setProperty('--quaternary-color', '#f5f5f5');
      root.style.setProperty('--background-color', '#c9c9c9');
      root.style.setProperty('--background-primary-color', '#e8e8e8');
      root.style.setProperty('--background-secondary-color', '#efefef');
      root.style.setProperty('--background-tertiary-color', '#f8f8f8');
      root.style.setProperty('--background-quaternary-color', '#ffffff');
      imagemLinkedin.src = "./assets/linkedin-black.png";
      imagemGithub.src = "./assets/github-black.png";
      imagemEmail.src = "./assets/email-black.png";
    }
  }
  
  setDarkTheme();
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setDarkTheme);
