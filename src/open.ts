import { config } from "./config";
import { exec } from "child_process";

export function open(diaryPathName: string) {
  exec(`${config.editor ?? "open"} ${diaryPathName}`);
}
