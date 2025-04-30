import { useRef } from 'react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { PlayIcon, TimerReset } from 'lucide-react';
import { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/TaskActions';
import { CycleTipUser } from '../CycleTipUser';
import { showMessage } from '../../adapters/toastifyAdapter';

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || '';

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleStartNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.dismiss();
      showMessage.warn('Write you task to start');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  }

  function handleStopCurrentTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleStartNewTask} action='' className='taskForm'>
      <div className='taskContent'>
        <DefaultInput
          type='text'
          id='task-input'
          placeholder='Type your task'
          labelText='Task'
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className='taskContent'>
        <CycleTipUser />
      </div>

      <div className='taskContent'>
        <Cycles />
      </div>

      <div className='taskContent'>
        {!state.activeTask && (
          <DefaultButton
            aria-label='Start the task'
            title='Start the task'
            type='submit'
            icon={<PlayIcon />}
            color='start'
            key='just_for_react_to_destroy_this_submit_button'
          />
        )}
        {state.activeTask && (
          <DefaultButton
            aria-label='Stop current task'
            title='Stop current task'
            type='button'
            icon={<TimerReset />}
            color='stop'
            onClick={handleStopCurrentTask}
            key='destroy_that_button_to'
          />
        )}
      </div>
    </form>
  );
}
