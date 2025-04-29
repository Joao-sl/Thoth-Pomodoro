import { TaskModel } from '../models/TaskModel';

export function getNextCycleType(cycle: number): TaskModel['type'] {
  if (cycle % 8 === 0) return 'longBreakTime';
  if (cycle % 2 === 0) return 'smallBreakTime';
  return 'focusTime';
}
