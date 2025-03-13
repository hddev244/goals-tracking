import { IGoal } from "@/types/goal.type";
import { IGroup } from "@/types/group.type";
import { RadioButtonProps } from "react-native-radio-buttons-group";
export const TASKS_TYPE: RadioButtonProps[] = [
  {
    id: "1",
    label: "Công việc",
    icon: "📝",
    value: "task",
    borderColor: "#FFF5CC", // Vàng nhạt
    color: "#705000", // Nâu đậm để dễ đọc
  },
  {
    id: "2",
    label: "Việc cần làm",
    icon: "✍",
    value: "todo",
    borderColor: "#D6E4FF", // Xanh dương nhạt
    color: "#002366", // Xanh đậm giúp tương phản
  },
  {
    id: "3",
    label: "Sự kiện",
    icon: "📢",
    value: "event",
    borderColor: "#FFDAD6", // Đỏ cam nhạt
    color: "#8B0000", // Đỏ đậm để rõ chữ
  },
  {
    id: "4",
    label: "Mục tiêu",
    icon: "🎯",
    value: "goal",
    borderColor: "#D7F8D7", // Xanh lá cây rất nhạt
    color: "#006400", // Xanh đậm dễ đọc
  },
  {
    id: "5",
    label: "Thói quen",
    icon: "🔁",
    value: "habit",
    borderColor: "#E8DAFF", // Tím nhạt
    color: "#4B0082", // Tím đậm giúp chữ rõ hơn
  },
];

const baseGroup: IGroup = {
  id: 0,
  name: "",
  canDelete: false,
  isDeleted: false,
  iconId: 0,
  colorId: 0,
  canEdit: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

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
];

const baseGoal: IGoal = {
  id: 0,
  name: "",
  description: "",
  groupId: 0,
  isDeleted: false,
  canDelete: false,
  canEdit: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const initGoals: IGoal[] = [
  {
    ...baseGoal,
    id: 1,
    name: "Tập thể dục",
    description: "Tập thể dục mỗi ngày",
    groupId: 1,
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
];
