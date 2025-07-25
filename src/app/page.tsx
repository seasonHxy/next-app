"use client";

import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const toggleDarkMode = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-24 transition-colors duration-200 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Dark Mode Toggle</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Current theme: {theme}
        </p>
        <button
          onClick={toggleDarkMode}
          className="px-6 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors cursor-pointer font-medium"
        >
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </main>
  );
}
