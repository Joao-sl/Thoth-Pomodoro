import { ClipboardList, Clock, MoonIcon, Settings, SunIcon } from 'lucide-react';

import styles from './style.module.css';
import { useState, useEffect } from 'react';
import { MyRouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';

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
      <MyRouterLink
        href='/'
        className={styles.menuLink}
        title='Go to home page'
        aria-label='Go to home page'
      >
        <Clock />
      </MyRouterLink>

      <MyRouterLink
        href='/history'
        className={styles.menuLink}
        title='Go to history'
        aria-label='Go to history'
      >
        <ClipboardList />
      </MyRouterLink>

      <MyRouterLink
        href='/settings'
        className={styles.menuLink}
        title='Go to settings'
        aria-label='Go to settings'
      >
        <Settings />
      </MyRouterLink>

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
