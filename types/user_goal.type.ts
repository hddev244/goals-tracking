import { IBaseModel } from './index.type';
export interface IUserGoal extends IBaseModel {
  userId: number;
  goalId: number;
  status: IUserGoalStatus;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserGoalRequest {
  userId: number;
  goalId: number;
  status: IUserGoalStatus;
  createdAt?: string;
  updatedAt?: string;
}

export enum IUserGoalStatus {
  PENDING = 0,
  COMPLETED = 1,
  FAILED = 2,
  DROPPED = 3,
}