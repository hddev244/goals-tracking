import { IGoal } from "@/types/goal.type";
import { IGroup } from "@/types/group.type";

const baseGroup: IGroup = {
  id: 0,
  name: "",
  canDelete: false,
  iconId: 0,
  colorId: 0,
  canEdit: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

export const initGroups: IGroup[] = [
  {
    ...baseGroup,
    id: 1,
    name: "Sức khỏe",
  },
  {
    ...baseGroup,
    id: 2,
    name: "Học tập",
  },
  {
    ...baseGroup,
    id: 3,
    name: "Công việc",
  },
  {
    ...baseGroup,
    id: 4,
    name: "Giải trí",
  },
  {
    ...baseGroup,
    id: 5,
    name: "Khác",
  },
]


const baseGoal: IGoal = {
  id: 0,
  name: "",
  description: "",
  groupId: 0,
  canDelete: false,
  canEdit: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

export const initGoals: IGoal[] = [
  {
    ...baseGoal,
    id: 1,
    name: "Tập thể dục",
    description: "Tập thể dục mỗi ngày",
    groupId: 1

  },
  {
    ...baseGoal,
    id: 2,
    name: "Học tiếng anh",
    description: "Học tiếng anh mỗi ngày",
    groupId: 3,
  },
  {
    ...baseGoal,
    id: 3,
    name: "Đọc sách",
    description: "Đọc sách mỗi ngày",
    groupId: 3,
  },
  {
    ...baseGoal,
    id: 4,
    name: "Ngủ đúng giờ",
    description: "Ngủ đúng giờ mỗi ngày",
    groupId: 4,
  },
  {
    ...baseGoal,
    id: 5,
    name: "Tập code",
    description: "Tập code mỗi ngày",
    groupId: 3,
  },
  {
    ...baseGoal,
    id: 6,
    name: "Tập code",
    description: "Tập code mỗi ngày",
    groupId: 3,
  },
  ]