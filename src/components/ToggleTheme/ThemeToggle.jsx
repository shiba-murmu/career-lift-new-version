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
      className="px-4 py-2 rounded font-medium transition-all bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:scale-105"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggle;
