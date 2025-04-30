import { TaskStateModel } from '../../models/TaskStateModel';

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    focusTime: 25,
    smallBreakTime: 5,
    longBreakTime: 15,
  },
};
