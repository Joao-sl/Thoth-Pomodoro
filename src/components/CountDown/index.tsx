import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './style.module.css';

export function CountDown() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const nextCycleMap = {
    focusTime: state.config['focusTime'],
    smallBreakTime: state.config['smallBreakTime'],
    longBreakTime: state.config['longBreakTime'],
  };

  return (
    <>
      {state.activeTask && (
        <div className={`${styles.countDown} FlexCentralized`}>
          {state.formattedSecondsRemaining}
        </div>
      )}

      {!state.activeTask && (
        <div className={`${styles.countDown} FlexCentralized`}>
          {String(nextCycleMap[nextCycleType]).padStart(2, '0')}:00
        </div>
      )}
    </>
  );
}
