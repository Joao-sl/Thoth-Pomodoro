import { UserTaskContext } from '../../contexts/TaskContext/useTaskContext';
import styles from './style.module.css';

export function CountDown() {
  const { state } = UserTaskContext();

  return (
    <div className={`${styles.countDown} FlexCentralized`}>
      {state.formattedSecondsRemaining}
    </div>
  );
}
