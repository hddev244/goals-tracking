import { IGoal, IGoalRequest } from "@/types/goal.type";
import { openDB } from "@/sqlite-database";
import { ResponseStatus, ResponseType } from "@/types/response.type";
import GoalRepository from "@/repositories/goal.repo";

async function getAll(): Promise<ResponseType<IGoal[]>> {
  return GoalRepository.getAll()
    .then((result) => {
      return {
        status: ResponseStatus.SUCCESS,
        data: result,
        message: "Successfully fetched all goals",
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        data: null,
        message: "Failed to fetch all goals",
      };
    });
}
async function create(goal: IGoalRequest): Promise<ResponseType<IGoal | null>> {
  return GoalRepository.create(goal)
    .then((res) => {
      return GoalRepository.getById(res)
        .then((result) => {
          return {
            status: ResponseStatus.CREATED,
            data: result,
            message: "Successfully created goal",
          };
        })
        .catch((error) => {
          console.log(error);
          return {
            status: ResponseStatus.INTERNAL_SERVER_ERROR,
            data: null,
            message: "Failed to create goal",
          };
        });
    })
    .catch((error) => {
      console.log(error);
      return {
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        data: null,
        message: "Failed to create goal",
      };
    });
}
function getById(id: number) {}

const GoalService = {
  getAll,
  getById,
  create,
};
export default GoalService;
