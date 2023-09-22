import path from "path"
import express from "express"
import homeController from "./serve_html/controllers/homeController.js"
import { fileURLToPath } from 'url'

const port = 3000,
  app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("view engine", "ejs")
app.set("views", __dirname + "/serve_html/views")

app.use(express.static(path.join(__dirname, '/serve_html/public')))
app.use("/static", express.static(path.join(__dirname, '/serve_html/public')))
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
// app.use(errorController.responseNoResoure)

app.get("/", homeController.respondHomePage)
app.get("/home", homeController.respondHomePage)
app.get("/contact", homeController.respondContactPage)
app.get("/courses", homeController.respondCoursesPage)

app.listen(port, () => {
  console.log(`The server has started and is listening on port number ${port}!`)
})

