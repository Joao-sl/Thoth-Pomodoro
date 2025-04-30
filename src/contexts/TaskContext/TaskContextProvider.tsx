import { taskReducer } from './taskReducer';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { useEffect, useReducer, useRef } from 'react';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';
import { TaskActionTypes } from './TaskActions';
import { loadJapaneseAlarm, loadNatureAlarm } from '../../utils/loadAlarm';
import { TaskStateModel } from '../../models/TaskStateModel';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem('state');

    if (!storageState) return initialTaskState;

    const parsedStorageState = JSON.parse(storageState) as TaskStateModel;
    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
    };
  });
  const playAlarmRef = useRef<ReturnType<typeof loadJapaneseAlarm> | null>(null);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage(event => {
    const countDownSeconds = event.data;

    if (countDownSeconds <= 0) {
      if (playAlarmRef.current) {
        playAlarmRef.current();
        playAlarmRef.current = null;
      }
      dispatch({
        type: TaskActionTypes.COMPLETED_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));

    if (!state.activeTask) {
      worker.terminate();
    }
    document.title = `${state.formattedSecondsRemaining} - Thoth Pomodoro`;

    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() => {
    if (state.activeTask && playAlarmRef.current === null) {
      playAlarmRef.current = loadNatureAlarm();
    } else {
      playAlarmRef.current = null;
    }
  }, [state.activeTask]);

  return <TaskContext.Provider value={{ state, dispatch }}>{children}</TaskContext.Provider>;
}
