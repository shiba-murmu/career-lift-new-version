import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Get stored theme or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Add or remove the 'dark' class on root html tag
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Store user's preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-0.5 grid place-content-center rounded-full bg-neutral-400 hover:scale-105 hover:bg-neutral-200 transition-all  duration-300  text-black"
    >
      {theme === 'light' ? <ModeNightIcon sx = {{color : 'black' , fontSize : '15px'}} /> : <LightModeIcon sx = {{color : 'black' , fontSize : '15px'}} />}
    </button>
  );
};

export default ThemeToggle;

