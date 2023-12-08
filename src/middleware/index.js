import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import cookieParser from "cookie-parser";
import session from "express-session";
import expressEjsLayouts from "express-ejs-layouts";
import flash from "express-flash";
import path from "path";
import url from "url";

const appMidleware = express();
const upload = multer();
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

appMidleware.use(expressEjsLayouts);
appMidleware.use(express.static(path.join(__dirname, "../../public")));
appMidleware.use(bodyParser.json());
appMidleware.use(bodyParser.urlencoded({ extended: true }));
appMidleware.use(upload.array());
appMidleware.use(cookieParser());
appMidleware.use(
  session({
    secret: "1213-1313-13131-sadad",
    resave: false,
    saveUninitialized: false,
  })
);
appMidleware.use(flash());

export default appMidleware;
