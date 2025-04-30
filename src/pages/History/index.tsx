import { DefaultButton } from '../../components/DefaultButton';
import { Heading } from '../../components/Heading/Heading';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskActionTypes } from '../../contexts/TaskContext/TaskActions';
import { MainTemplate } from '../../templates/MainTemplate';
import { showMessage } from '../../adapters/toastifyAdapter';

import { formatDate } from '../../utils/formatDate';
import { getTaskStatus } from '../../utils/getTaskStatus';

import { Link } from 'react-router';
import { Coffee, RockingChair, TargetIcon, TrashIcon } from 'lucide-react';

import styles from './style.module.css';
import { useEffect } from 'react';
import { DefaultHtml } from '../../components/DefaultHtml';

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

  const { state, dispatch } = useTaskContext();
  const hasTasks = state.tasks.length > 0;

  const sortedTasks = [...state.tasks].sort((a, b) => {
    return b.startDate - a.startDate;
  });

  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };
  }, []);

  function handleDeleteHistory() {
    showMessage.dismiss();
    showMessage.confirm('Are u sure?', confirmation => {
      if (!confirmation) return;
      dispatch({ type: TaskActionTypes.RESET_STATE });
    });
  }

  return (
    <MainTemplate>
      <DefaultHtml>
        <Heading>
          <span>History</span>
          {hasTasks && (
            <span className={`${styles.trashButton} ${styles.marginTop}`}>
              <DefaultButton
                onClick={handleDeleteHistory}
                icon={<TrashIcon />}
                aria-label='Delete all history'
                title='Delete all history'
              />
            </span>
          )}
        </Heading>
      </DefaultHtml>

      <div className={styles.responsiveTable}>
        {hasTasks && (
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
                    <td>{task.duration} Min</td>
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
        )}
        {!hasTasks && (
          <h3 className={styles.notFoundTasks}>
            You don't have any tasks yet, try starting one,{' '}
            <Link to='/' className={styles.homeLink}>
              Home
            </Link>
          </h3>
        )}
      </div>
    </MainTemplate>
  );
}
