import { IGroup } from "@/types/group.type";

function getInsertSQL (values : IGroup[]):string {
  const r = values
        .map(
          (group) =>
            `(  ${group.id},
              '${group.name}',
              '${group.description}',
              '${group.createdAt}',
              '${group.updatedAt}',
              NULL,
              0,
              ${group.canDelete ? 1 : 0},
              ${group.canEdit ? 1 : 0},
              ${group.iconId},
              ${group.colorId})`
        )
        .join(",");
  const sql = `
  INSERT INTO groups (id, name, description, createdAt, updatedAt, deletedAt, isDeleted, canDelete, canEdit, iconId, colorId)
  VALUES ${r};
`;
  return sql;
}

const GroupSQL = {
  getInsertSQL,
};

export default GroupSQL;