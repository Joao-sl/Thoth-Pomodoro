import { useContext } from 'react';
import { TaskContext } from './TaskContext';

export function UserTaskContext() {
  return useContext(TaskContext);
}
