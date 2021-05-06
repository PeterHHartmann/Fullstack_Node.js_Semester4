import express from "express";
const router = express.Router();

// console.log(new Date().toDateString());

router.get("/setsession", (req, res) => {
    req.session.date = new Date();
    res.send({});
});

router.get("/getsession", (req, res) => {
    console.log(req.session.date);
    res.send({});
});

export default router;