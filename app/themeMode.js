function setDarkTheme() {
    const root = document.documentElement;
    const currentTime = new Date().getHours();
    const isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    if (isDarkModeEnabled || (currentTime >= 18 || currentTime < 6)) {
      root.style.setProperty('--primary-color', '#e0e0e0');
      root.style.setProperty('--secondary-color', '#22d4fd');
      root.style.setProperty('--tertiary-color', '#828282');
      root.style.setProperty('--quaternary-color', '#101010');
      root.style.setProperty('--background-color', '#161616');
      root.style.setProperty('--background-primary-color', '#000000');
      root.style.setProperty('--background-secondary-color', '#272727');
      root.style.setProperty('--background-tertiary-color', '#494949');
      root.style.setProperty('--background-quaternary-color', '#727272');
    } else {
      root.style.setProperty('--primary-color', '#292929');
      root.style.setProperty('--secondary-color', '#007bff');
      root.style.setProperty('--tertiary-color', '#555555');
      root.style.setProperty('--quaternary-color', '#f5f5f5');
      root.style.setProperty('--background-color', '#c9c9c9');
      root.style.setProperty('--background-primary-color', '#ababab');
      root.style.setProperty('--background-secondary-color', '#c1c1c1');
      root.style.setProperty('--background-tertiary-color', '#dddddd');
      root.style.setProperty('--background-quaternary-color', '#e9e9e9');
    }
  }
  
  setDarkTheme();
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setDarkTheme);
