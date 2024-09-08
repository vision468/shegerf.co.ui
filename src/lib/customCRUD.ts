import fs, { promises } from "fs";
import path from "path";

type PromiseObjectType = {
  err?: Error;
  ok?: boolean;
  data?: {
    "modified-data": Date;
    content: {};
  };
};

class CustomCRUD {
  dbPath: string;
  tablePath: string;
  constructor(tableName: string) {
    const projectPath = process.cwd();
    this.dbPath = path.join(projectPath, "src", "db");
    this.isDatabaseCreated(this.dbPath);
    this.tablePath = path.join(this.dbPath, `${tableName}.json`);
    this.isTableCreated(this.tablePath);
  }
  protected async isTableCreated(tablePath: string): Promise<boolean> {
    let result = false;
    fs.stat(tablePath, (err) => {
      if (err == null) {
        result = true;
        return result;
      } else if (err.code === "ENOENT") {
        fs.writeFile(
          tablePath,
          JSON.stringify({ "db-created": Date.now(), content: {} }),
          (err) => {
            if (err) {
              result = false;
              return result;
            }
            result = true;
            return result;
          }
        );
      }
    });
    return result;
  }
  protected async isDatabaseCreated(dbPath: string): Promise<boolean> {
    try {
      await promises.mkdir(dbPath, { recursive: true });
      return true;
    } catch (error) {
      console.log("isDatabaseCreated try-catch error :");
      console.log(error);
      return false;
    }
  }
  // No Need Create, Constructor do same work as Create

  public Read(): Promise<PromiseObjectType> {
    const ReadPromise = new Promise<PromiseObjectType>((resolve, reject) => {
      fs.open(this.tablePath, "r", (err, fd) => {
        if (err) return reject({ err });

        fs.readFile(fd, (err, data) => {
          if (err) {
            console.error("Error reading the file:", err);
            return reject({ err });
          }
          // Close the file descriptor
          fs.close(fd, (err) => {
            if (err) {
              console.error("Error closing the file:", err);
              return reject({ err });
            }
            console.log("File closed successfully");
            let _data = JSON.parse(data.toString());
            return resolve({ ok: true, data: _data });
          });
        });
      });
    });
    return ReadPromise;
  }

  public Update(record: object): Promise<PromiseObjectType> {
    const UpdatePromise = new Promise<object>((resolve, reject) => {
      fs.open(this.tablePath, "w", (err, fd) => {
        if (err) return reject({ err });
        const data = JSON.stringify({
          "modified-data": Date.now(),
          content: record,
        });
        fs.write(fd, data, (err, written, string) => {
          if (err) {
            console.error("Error writing to the file:", err);
            return reject({ err });
          }
          console.log(`${written} bytes written to the file`);

          // Close the file descriptor
          fs.close(fd, (err) => {
            if (err) {
              console.error("Error closing the file:", err);
              return reject({ err });
            }
            console.log("File closed successfully");
            return resolve({ ok: true, data: JSON.parse(string) });
          });
        });
      });
    });

    return UpdatePromise;
  }
}

export default CustomCRUD;
