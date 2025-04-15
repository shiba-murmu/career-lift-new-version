import { useEffect, useState } from 'react';

export const TailwindThemeMode = () => {
  const [mode, setMode] = useState(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setMode(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return mode;
};
/**
 * The useTailwindThemeMode() hook is a custom hook that returns the current mode of the tailwind theme.
 * It uses the useState hook to manage the mode state and the useEffect hook to observe changes in the document's classList.
 */