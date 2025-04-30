import { MainTemplate } from '../../templates/MainTemplate';
import { Heading } from '../../components/Heading/Heading';
import { DefaultHtml } from '../../components/DefaultHtml';
import { DefaultInput } from '../../components/DefaultInput';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveAll } from 'lucide-react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { useEffect, useRef } from 'react';
import { showMessage } from '../../adapters/toastifyAdapter';
import { TaskActionTypes } from '../../contexts/TaskContext/TaskActions';
import styles from './styles.module.css';

export function Settings() {
  const { state, dispatch } = useTaskContext();

  const focusTimeInput = useRef<HTMLInputElement>(null);
  const smallBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleResetAll(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    showMessage.dismiss();

    showMessage.confirm(
      'Are you sure? This will reset the entire site to default, stop your active tasks, and clear your history.',
      confirmation => {
        if (!confirmation) return;

        dispatch({ type: TaskActionTypes.RESET_ALL });
        window.location.reload();
      },
    );
  }

  function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    const focusTime = Number(focusTimeInput.current?.value);
    const smallBreakTime = Number(smallBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(focusTime) || isNaN(smallBreakTime) || isNaN(longBreakTime)) {
      showMessage.error('Write only number in the fields');
      return;
    }

    if (focusTime < 1 || smallBreakTime < 1 || longBreakTime < 1) {
      showMessage.error('Write only number greater than 0');
      return;
    }

    dispatch({
      type: TaskActionTypes.SETTINGS_TASK,
      payload: {
        focusTime,
        smallBreakTime,
        longBreakTime,
      },
    });
    showMessage.success('Settings Saved');
  }

  useEffect(() => {
    return () => showMessage.dismiss();
  }, []);

  return (
    <MainTemplate>
      <DefaultHtml>
        <Heading>Settings </Heading>

        <p>
          Change the counter settings here or{' '}
          <button onClick={handleResetAll} className={styles.resetAllBtn}>
            RESET ALL
          </button>
        </p>

        <br />

        <form onSubmit={handleSaveSettings} action='' className='taskForm'>
          <div className='taskContent'>
            <DefaultInput
              id='focusTime'
              labelText='Focus (Minutes)'
              defaultValue={state.config.focusTime}
              ref={focusTimeInput}
              type='number'
            />
          </div>
          <div className='taskContent'>
            <DefaultInput
              id='smallBreakTime'
              labelText='Little Break Time (Minutes)'
              defaultValue={state.config.smallBreakTime}
              ref={smallBreakTimeInput}
              type='number'
            />
          </div>
          <div className='taskContent'>
            <DefaultInput
              id='longBreakTime'
              labelText='Long Break Time (Minutes)'
              defaultValue={state.config.longBreakTime}
              ref={longBreakTimeInput}
              type='number'
            />
          </div>

          <DefaultButton icon={<SaveAll />} title='Save all' aria-label='Save all' />
        </form>
      </DefaultHtml>
    </MainTemplate>
  );
}
