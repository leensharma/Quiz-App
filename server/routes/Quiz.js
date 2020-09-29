const express = require("express");
const router = express.Router();
const { Quiz } = require("../models/Quiz");

router.post("/addToQuiz", (req, res) => {
  const quiz = new Quiz(req.body);
  quiz.save((err, result) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.get("/testList", (req, res) => {
  Quiz.find({})
    .distinct("subject")
    .exec((err, subject) => {
      if (err) return res.status(400).send(err);
      res.status(200).json({ success: true, subject });
    });
});

router.get("/subjectTest/:subject", (req, res) => {
  Quiz.find({ subject: req.params.subject }).exec((err, result) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, result });
  });
});

module.exports = router;
