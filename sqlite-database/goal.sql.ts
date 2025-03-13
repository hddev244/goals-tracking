import { IGoal, IGoalRequest } from "@/types/goal.type";
import { IGroup } from "@/types/group.type";

function getInsertSQL(values: IGoal[]): string {
  const r = values
    .map(
      (goal) =>
        `(${goal.id}, '${goal.name}', '${goal.description}', ${goal.groupId}, ${
          goal.canDelete ? 1 : 0
        }, ${goal.canEdit ? 1 : 0}, '${goal.createdAt}', '${goal.updatedAt}')`
    )
    .join(",");
  const sql = `INSERT INTO goals (id, name, description, groupId, canDelete, canEdit, createdAt, updatedAt) VALUES ${r};`;
  return sql;
}

function getInsertSQLReq(values: IGoalRequest[]): string {
  const r = values
    .map(
      (goal) =>
        `('${goal.name}', '${goal.description}', ${goal.groupId}, ${
          goal.canDelete ? 1 : 0
        }, ${goal.canEdit ? 1 : 0}, '${goal.createdAt}', '${goal.updatedAt}')`
    )
    .join(",");
  const sql = `INSERT INTO goals (name, description, groupId, canDelete, canEdit, createdAt, updatedAt) VALUES ${r};`;
  return sql;
}

function getUpdateSQLReq(goal: IGoal): string {
  const sql = `UPDATE goals SET name = '${goal.name}', description = '${goal.description}', groupId = ${goal.groupId}, canDelete = ${
    goal.canDelete ? 1 : 0
  }, canEdit = ${goal.canEdit ? 1 : 0}, updatedAt = '${goal.updatedAt}' WHERE id = ${goal.id};`;
  return sql;
}

const GoalSQL = {
  getInsertSQL,
  getInsertSQLReq,
  getUpdateSQLReq
};

export default GoalSQL;
