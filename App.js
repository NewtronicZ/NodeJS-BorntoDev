import express from "express";
import chalk from "chalk";
import debug from "debug";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const productRouter = express.Router();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("combined"));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) =>{
  res.send("Hello World! I'm product");
});

productRouter.route("/1").get((req, res) =>{
  res.send("Hello World! I'm product1");
});

app.use("/products", productRouter)

app.get("/", (req, res) => {
  res.render("index", {
    username: "Newza555+",
    customers: ["Kitty", "NewtronicZ", "Kittikorn"],
  });
})

app.use(express.static(join(__dirname, "/public/")));

app.listen(PORT, () => {
  debug.log(" listening on port: " + chalk.red(" : " + PORT));
});
