import {
  AlarmClockIcon,
  FolderClockIcon,
  Settings2Icon,
  SunIcon,
} from 'lucide-react';

import styles from './style.module.css';

export function Menu() {
  return (
    <nav className={`${styles.menuWrapper} test`}>
      <a href='#' className={styles.menuLink}>
        <AlarmClockIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <FolderClockIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <Settings2Icon />
      </a>
      <a href='#' className={styles.menuLink}>
        <SunIcon />
      </a>
    </nav>
  );
}
