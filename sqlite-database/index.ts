import * as SQLite from "expo-sqlite";
import { initGroups, initGoals } from "../data/initdata";
import GroupSQL from "./group.sql";
import GoalSQL from "./goal.sql";

const enum DB_CONECT_TYPE {
  UPDATE,
  DELETE,
  DROP_CREATE,
  CREATE,
}

// Mở database (trả về Promise)
const openDB = async () => {
  return await conectDB(DB_CONECT_TYPE.DROP_CREATE, "db_v0.db");
};

const conectDB = async (
  type: DB_CONECT_TYPE,
  db_name: string
): Promise<SQLite.SQLiteDatabase> => {
  switch (type) {
    case DB_CONECT_TYPE.UPDATE:
      return await SQLite.openDatabaseAsync(db_name);
    case DB_CONECT_TYPE.DELETE:
      // Add logic for DELETE if needed
      break;
    case DB_CONECT_TYPE.DROP_CREATE:
      return await SQLite.openDatabaseAsync(db_name);
      break;
    case DB_CONECT_TYPE.CREATE:
      // Add logic for CREATE if needed
      break;
    default:
      return await SQLite.openDatabaseAsync(db_name);
  }
  throw new Error("DB connection type not handled");
};

// kiểm tra xem database đã được khởi tạo chưa
const isDBInitialized = async () => {
  try {
    const db = await openDB(); // Đợi database mở hoàn tất
    const result = await db.getAllAsync("SELECT * FROM goals LIMIT 1;");
    return result.length > 0;
  } catch (error) {
    return false;
  }
};

const initDatabase = async () => {
  const exists = await isDBInitialized();
  if (exists) {
    console.log("Database already exists, skipping initialization.");
    return;
  } else {
    console.log("Database does not exist, initializing...");
  }
  try {
    const db = await openDB(); // Đợi database mở hoàn tất

    await db.execAsync(`
      DROP TABLE IF EXISTS groups;
      CREATE TABLE IF NOT EXISTS groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        createdAt DATE,
        updatedAt DATE,
        deletedAt DATE,
        isDeleted INTEGER,
        canDelete INTEGER,
        canEdit INTEGER,
        iconId INTEGER,
        colorId INTEGER
      );
    `);
    console.log('Table "goals" created successfully!');

    await db.execAsync(`
      DROP TABLE IF EXISTS goals;
      CREATE TABLE IF NOT EXISTS goals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        groupId INTEGER,
        createdAt DATE,
        updatedAt DATE,
        isDeleted INTEGER,
        deletedAt DATE,
        canDelete INTEGER,
        canEdit INTEGER
      );
    `);

    await insertInitGroups(db); // Danh sách các giá trị cho từng hàng
    await insertInitGoals(db); // Danh sách các giá trị cho từng hàng
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

const insertInitGroups = async (db: SQLite.SQLiteDatabase) => {
  try {
    /**  name TEXT,
        description TEXT,
        createdAt DATE,
        updatedAt DATE,
        deletedAt DATE,
        isDeleted INTEGER,
        canDelete INTEGER,
        canEdit INTEGER,
        iconId INTEGER,
        colorId INTEGER */


    const sql = GroupSQL.getInsertSQL(initGroups);

    await db.execAsync(sql);
    console.log('Table "groups" created successfully!');
  } catch (error) {
    console.log(error);
    return [];
  }
};

const insertInitGoals = async (db: SQLite.SQLiteDatabase) => {
  try {
    const sql = GoalSQL.getInsertSQL(initGoals);
    await db.execAsync(sql);
    console.log("Initial goals inserted successfully!");
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Gọi hàm khởi tạo database
initDatabase();

export { openDB };
