import { Coffee, RockingChair, TargetIcon, TrashIcon } from 'lucide-react';
import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading/Heading';
import { MainTemplate } from '../../templates/MainTemplate';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';

import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';

import styles from './style.module.css';

export function History() {
  const TaskTypeMap = {
    focusTime: 'Focus',
    smallBreakTime: 'Little Break',
    longBreakTime: 'Long Break',
  };

  const TaskTypeIconMap = {
    focusTime: <TargetIcon color='var(--cycles-target)' />,
    smallBreakTime: <Coffee color='var(--cycles-small-break)' />,
    longBreakTime: <RockingChair color='var(--cycles-long-break)' />,
  };

  const { state } = useTaskContext();
  const sortedTasks = [...state.tasks].sort((a, b) => {
    return b.startDate - a.startDate;
  });

  return (
    <MainTemplate>
      <Heading>
        <span className={styles.marginTop}>History</span>
        <span className={`${styles.trashButton} ${styles.marginTop}`}>
          <DefaultButton
            icon={<TrashIcon />}
            aria-label='Delete all history'
            title='Delete all history'
          />
        </span>
      </Heading>

      <div className={styles.responsiveTable}>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Status</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {sortedTasks.map(task => {
              return (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.duration}</td>
                  <td>{formatDate(task.startDate)}</td>
                  <td>{getTaskStatus(task, state.activeTask)}</td>
                  <td className={styles.taskType}>
                    {TaskTypeIconMap[task.type]} {TaskTypeMap[task.type]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </MainTemplate>
  );
}
