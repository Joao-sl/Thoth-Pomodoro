import { UserTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function CycleTipUser() {
  const { state } = UserTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const ActiveTaskTips = {
    focusTime: <span>Time to focus for {state.config.focusTime} minutes</span>,
    smallBreakTime: (
      <span>Time to take a little break for {state.config.smallBreakTime} minutes</span>
    ),
    longBreakTime: <span>Time to take a break for {state.config.longBreakTime} minutes</span>,
  };

  const InactiveTaskTips = {
    focusTime: <span>Next, it’s time to focus for {state.config.focusTime} minutes</span>,
    smallBreakTime: (
      <span>Next, it’s time to take a little break for {state.config.smallBreakTime} minutes</span>
    ),
    longBreakTime: (
      <span>Next, it’s time to take a break for {state.config.longBreakTime} minutes</span>
    ),
  };

  return (
    <>
      {state.activeTask && ActiveTaskTips[state.activeTask.type]}
      {!state.activeTask && InactiveTaskTips[nextCycleType]}
    </>
  );
}
