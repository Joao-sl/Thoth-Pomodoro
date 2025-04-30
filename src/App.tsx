import { ToastifyWrapper } from './components/ToastifyWrapper';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MainRouter } from './routers/MainRouter';

import './style/global.css';
import './style/theme.css';

export function App() {
  return (
    <TaskContextProvider>
      <ToastifyWrapper>
        <MainRouter />
      </ToastifyWrapper>
    </TaskContextProvider>
  );
}
