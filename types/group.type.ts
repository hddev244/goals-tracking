import { IBaseModel } from "./index.type";


export interface IGroup extends IBaseModel {
  id: number;
  name: string;
  colorId: number;
  iconId: number;
  description?: string;
  canDelete?: boolean;
  canEdit?: boolean;
}