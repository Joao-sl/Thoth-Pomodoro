import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { PlayIcon } from 'lucide-react';

export function MainForm() {
  return (
    <form action='' className='taskForm'>
      <div className='taskContent'>
        <DefaultInput
          type='text'
          id='task-input'
          placeholder='Type your task'
          labelText='Task'
        />
      </div>

      <div className='taskContent'>
        <p>Time to rest, 5 minutes</p>
      </div>

      <div className='taskContent'>
        <Cycles />
      </div>

      <div className='taskContent'>
        <DefaultButton icon={<PlayIcon />} color='start' />
      </div>
    </form>
  );
}
