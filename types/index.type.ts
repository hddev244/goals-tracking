export interface IFile {
  name: string;
  path : string;
  content: string;
}


export interface IBaseModel {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  isDeleted: boolean;
}