import {
  AlarmClockIcon,
  FolderClockIcon,
  MoonIcon,
  Settings2Icon,
  SunIcon,
} from 'lucide-react';

import styles from './style.module.css';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';

    return storageTheme;
  });

  const themeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';

      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={`${styles.menuWrapper} test`}>
      <a
        href='#'
        className={styles.menuLink}
        title='Go to home page'
        aria-label='Go to home page'
      >
        <AlarmClockIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        title='Go to history'
        aria-label='Go to history'
      >
        <FolderClockIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        title='Go to settings'
        aria-label='Go to settings'
      >
        <Settings2Icon />
      </a>
      <a
        href=''
        className={styles.menuLink}
        title='Switch the website theme'
        aria-label='Switch the website theme'
        onClick={handleTheme}
      >
        {themeIcon[theme]}
      </a>
    </nav>
  );
}
