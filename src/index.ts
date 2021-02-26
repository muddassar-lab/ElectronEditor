import { app, BrowserWindow } from "electron";
import * as path from "path";

app.on("ready", () => {
  console.log("App is ready");

  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  const indexHTML = path.join(__dirname + "/index.html");
  win
    .loadFile(indexHTML)
    .then(() => {
      // IMPLEMENT FANCY STUFF HERE
    })
    .catch((e) => console.error(e));
  win.removeMenu();
});
