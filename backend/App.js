const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./config/credentials");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const compression = require("compression");

// routers
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
app.use(credentials);
app.use(cors(corsOptions));
// app.options("*", cors());

// Set security HTTP headers
app.use(helmet());
app.use(helmet.crossOriginEmbedderPolicy({ policy: "credentialless" }));
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    originAgentCluster: true,
  })
);
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https:", "data:", "blob:"],
    },
  })
);
// Development logging
if (process.env.NODE_ENV.trim() === "development") {
  app.use(morgan("dev"));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use(compression());
app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);

if (process.env.NODE_ENV.trim() === "production") {
  const __dirname = path.resolve();

  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
