import express from "express";
const app = express();

import helmet from "helmet";
app.use(helmet());

import rateLimit from "express-rate-limit";
const baseLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100
});
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10
});
app.use(baseLimiter);
app.use("/auth/*", authLimiter);

const ipLogger = (req, res, next) => {
    console.log("The client IP is: " + req.ip);
    next();
};
app.use(ipLogger);

import session from "express-session";
app.use(session({
    secret: 'Demon Slayer is an overrated anime',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

import sessionRouter from './router/session.mjs';
app.use(sessionRouter);

import bcrypt from "./util/password.mjs";

const PORT = process.env.PORT || 8080;

app.get("/auth/login", (req, res) => {
    res.send({ message: "Logging in..." })
});

app.get("/", (req, res, next) => {
    console.log("First route was hit but pass it on");
    next();
});

app.get("/", (req, res) => {
    console.log(req.session.id);
    res.send(`<h1>Second Route</h1>`)
});

app.get("/*", (req, res) => {
    res.status(404).send(`<h1>Sorry but this page was not found.</h1>`)
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log('listening on http://localhost:' + PORT + '/');
});