import { IFile } from "@/types/index.type";
import * as FileSystem from "expo-file-system";
import {shareAsync} from "expo-sharing";

const save = async (file: IFile): Promise<IFile> => {
  try {
    const fileEntry = await FileSystem.writeAsStringAsync(file.path, file.content, {
      encoding: FileSystem.EncodingType.UTF8,
    });
    return file;
  } catch (error) {
    return file;
  }
}

const read = async (path: string): Promise<IFile> => {
  try {
    const content = await FileSystem
      .readAsStringAsync(path, { encoding: FileSystem.EncodingType.UTF8 });
    return { path, content, name: path.split("/").pop() || "" };
  } catch (error) {
    console.error("Lỗi khi đọc file: s", error);
    return { path, content: "", name: path.split("/").pop() || "" };
  }
}

const shareFile = async (path: string) => {
  try {
    await shareAsync(path);
  } catch (error) {
    console.error("Lỗi khi chia sẻ file:", error);
  }
}


const FileService = {
  save,
  read,
};

export default FileService;