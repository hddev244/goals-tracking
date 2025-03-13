import { IGoal, IGoalRequest } from "@/types/goal.type";
import { openDB } from "@/sqlite-database";
import GoalSQL from "@/sqlite-database/goal.sql";

async function getAll(): Promise<IGoal[]> {
  try {
    const db = await openDB();
    const result = await db.getAllAsync("SELECT * FROM goals WHERE isDeleted = 0 OR isDeleted IS NULL;");
    return result as IGoal[];
  } catch (error) {
    console.log(error);
    return [];
  }
}
async function getById(id: number): Promise<IGoal | null> {
  try {
    const db = await openDB();
    const result = db.getAllSync("SELECT * FROM goals WHERE id = ?;", [id]);
    return result[0] as IGoal;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function deleteById(id: number): Promise<boolean> {
  try {
    const db = await openDB();

    if (!(await veryfyCanDeleteId(id))) {
      return false;
    }

    const deleteAt = new Date().toISOString();
    await db.runAsync("UPDATE goals SET deleteAt = ? WHERE id = ?;", [
      deleteAt,
      id,
    ]);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function update(goal: IGoal): Promise<boolean> {
  try {
    const db = await openDB();

    if (!(await veryfyCanEditId(goal.id))) {
      return false;
    }

    let oldGoal = await getById(goal.id);
    if (!oldGoal) {
      return false;
    }

    oldGoal = {
      ...oldGoal,
      name: goal.name,
      description: goal.description,
      groupId: goal.groupId,
      updatedAt: new Date().toISOString(),
    };

    const sql = GoalSQL.getUpdateSQLReq(oldGoal);
    await db.runAsync(sql);
    return true;
  } catch (error) {
    console.log("goal.repo.ts >> update >> ", error);
    return false;
  }
}

async function veryfyCanEditId(id: number): Promise<boolean> {
  const goal = await getById(id);
  if (!goal) {
    return false;
  }
  if (!goal.canEdit) {
    return false;
  }
  if (goal.isDeleted) {
    return false;
  }

  return true;
}

async function veryfyCanDeleteId(id: number): Promise<boolean> {
  const goal = await getById(id);
  if (!goal) {
    return false;
  }
  if (!goal.canDelete) {
    return false;
  }
  if (goal.isDeleted) {
    return false;
  }

  return true;
}

async function create(goal: IGoalRequest): Promise<number> {
  try {
    const db = await openDB();
    const sql = GoalSQL.getInsertSQLReq([goal]);

    const r = await db.runAsync(sql);
    return r.lastInsertRowId;
  } catch (error) {
    console.log("goal.repo.ts >> create >> ", error);
    return 0;
  }
}

const GoalRepository = {
  getAll,
  getById,
  create,
  deleteById,
  update
};

export default GoalRepository;
