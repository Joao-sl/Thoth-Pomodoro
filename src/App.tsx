import { ContentWrapper } from './components/ContentWrapper';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import { CountDown } from './components/CountDown';
import { PlayIcon } from 'lucide-react';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';

import './style/theme.css';
import './style/global.css';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <ContentWrapper>
        <Logo />

        <Menu />

        <CountDown />

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

        <Footer />
      </ContentWrapper>
    </>
  );
}
