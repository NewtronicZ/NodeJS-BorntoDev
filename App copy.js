import express from "express";
import chalk from "chalk";
import debug from "debug";
import morgan from "morgan";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import products from './data/products.cjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const productRouter = express.Router();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("combined"));

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) =>{
  res.render('products',
    products,
  );
});

productRouter.route("/:id").get((req, res) =>{
  const id = req.params.id;
  res.send("Hello World !! I'm Product " +id);
});

/*productRouter.route("/").get((req, res) =>{
  res.render('products', {
    products: [
      {productTitle:'น้ำยาล้างจาน', productDescription:'น้ำยาล้างจานสูตร 1', productPrice:50},
      {productTitle:'น้ำยาล้างจาน2', productDescription:'น้ำยาล้างจานสูตร 2', productPrice:55},
      {productTitle:'น้ำยาล้างจาน3', productDescription:'น้ำยาล้างจานสูตร 3', productPrice:60},
      {productTitle:'น้ำยาล้างจาน4', productDescription:'น้ำยาล้างจานสูตร 4', productPrice:65},
      {productTitle:'น้ำยาล้างจาน5', productDescription:'น้ำยาล้างจานสูตร 5', productPrice:70},
    ],
  });
});*/

/*productRouter.route("/:id").get((req, res) =>{
  const id = req.params.id;
  res.send("Hello World! I'm product "+id);
});*/

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
