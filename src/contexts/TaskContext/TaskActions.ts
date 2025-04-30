import { TaskModel } from '../../models/TaskModel';
import { TaskStateModel } from '../../models/TaskStateModel';

export enum TaskActionTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNT_DOWN = 'COUNT_DOWN',
  COMPLETED_TASK = 'COMPLETED_TASK',
  SETTINGS_TASK = 'SETTINGS_TASK',
  RESET_ALL = 'RESET_ALL',
}

export type TaskActionsWithPayload =
  | { type: TaskActionTypes.START_TASK; payload: TaskModel }
  | { type: TaskActionTypes.COUNT_DOWN; payload: { secondsRemaining: number } }
  | { type: TaskActionTypes.SETTINGS_TASK; payload: TaskStateModel['config'] };

export type TaskActionsWithoutPayload =
  | { type: TaskActionTypes.INTERRUPT_TASK }
  | { type: TaskActionTypes.RESET_STATE }
  | { type: TaskActionTypes.RESET_ALL }
  | { type: TaskActionTypes.COMPLETED_TASK };

export type TaskActionModel = TaskActionsWithPayload | TaskActionsWithoutPayload;
