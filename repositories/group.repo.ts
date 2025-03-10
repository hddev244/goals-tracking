import { IGroup } from "@/types/group.type";

import { openDB } from "@/sqlite-database";

async function getAll(): Promise<IGroup[]> {
  try {
    const db = await openDB();
    const result = await db.getAllAsync("SELECT * FROM groups;");
    return result as IGroup[];
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getById(id: number) {}
async function create(group: IGroup) {}

const GroupRepository = {
  getAll,
  getById,
  create,
};

export default GroupRepository;
