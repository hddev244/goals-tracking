import { IBaseModel } from './index.type';
/**
        goal.name,
        goal.description,
        goal.groupId,
        goal.status,
        goal.deadline,
        goal.createdAt,
        goal.updatedAt,
 */

export interface IGoal extends IBaseModel {
  name: string;
  description: string;
  groupId: number;
  canDelete?: boolean;
  canEdit?: boolean;
}


export interface IGoalRequest {
  id?: number;
  name: string;
  description: string;
  groupId: number;
  status: number;
  deadline: string;
  createdAt?: string;
  updatedAt?: string;
  canDelete?: boolean;
  canEdit?: boolean;
}
