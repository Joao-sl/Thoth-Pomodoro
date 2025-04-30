import { Coffee, RockingChair, TargetIcon } from 'lucide-react';

import styles from './style.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Cycles() {
  const cycleIconsMap = {
    focusTime: <TargetIcon />,
    smallBreakTime: <Coffee />,
    longBreakTime: <RockingChair />,
  };

  const cycleDescriptionMap = {
    focusTime: 'Time to Focus',
    smallBreakTime: 'Time to Small Break',
    longBreakTime: 'Time to Long Break',
  };

  const { state } = useTaskContext();
  const cycleNumb = Array.from({ length: state.currentCycle });

  return (
    <div className={styles.cyclesWrapper}>
      <p>Cycles</p>

      <div className={styles.cyclesIcons}>
        {cycleNumb.map((_, index) => {
          const nextCycle = index + 1;
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              className={styles[nextCycleType]}
              title={`${cycleDescriptionMap[nextCycleType]}`}
              aria-label={`${cycleDescriptionMap[nextCycleType]}`}
              key={`${nextCycle}_${nextCycleType}`}
            >
              {cycleIconsMap[nextCycleType]}
            </span>
          );
        })}
      </div>
    </div>
  );
}
