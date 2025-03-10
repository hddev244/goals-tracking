import { IGroup } from "@/types/group.type";
import { openDB } from "@/sqlite-database";
import { ResponseStatus, ResponseType } from "@/types/response.type";

async function getAll(): Promise<ResponseType<IGroup[]>> {
  try {
    const db = await openDB();
    const result = await db.getAllAsync("SELECT * FROM groups;");
    return {
      status: ResponseStatus.SUCCESS,
      data: result as IGroup[],
      message: "Successfully fetched all groups",
    };
  } catch (error) {
    console.log(error);
    return {
      status: ResponseStatus.INTERNAL_SERVER_ERROR,
      data: null,
      message: "Failed to fetch all groups",
    };
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
