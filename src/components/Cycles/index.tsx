import { Coffee, RockingChair, TargetIcon } from 'lucide-react';

import styles from './style.module.css';

export function Cycles() {
  return (
    <div className={styles.cyclesWrapper}>
      <p>Cycles</p>

      <div className={styles.cyclesIcons}>
        <span className={styles.target} title='Time to Focus'>
          <TargetIcon />
        </span>

        <span className={styles.smallBreak} title='Time to Small Break'>
          <Coffee />
        </span>

        <span className={styles.target} title='Time to Focus'>
          <TargetIcon />
        </span>

        <span className={styles.smallBreak} title='Time to Small Break'>
          <Coffee />
        </span>

        <span className={styles.target} title='Time to Focus'>
          <TargetIcon />
        </span>

        <span className={styles.smallBreak} title='Time to Small Break'>
          <Coffee />
        </span>

        <span className={styles.target} title='Time to Focus'>
          <TargetIcon />
        </span>

        <span className={styles.longBreak} title='Time to Long Break'>
          <RockingChair />
        </span>
      </div>
    </div>
  );
}
