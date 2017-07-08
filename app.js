var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Quiz = require('./models/quiz');
Question = require('./models/question');


app.use(bodyParser.json());
// console.log(Genre.ali());
// console.log(Book);

// connect to mongoose

mongoose.connect('mongodb://localhost:27017/turtleDB');
var db = mongoose.connection;
app.get("/", function (req, res) {
    console.log("*********************************************************");
    console.log("**************totototototootototototot***************");
    res.send('xxxxxxxxxxx');
});
app.get("/api/quizzes", function (req, res) {
    Quiz.getQuizes(function (err, quizes) {
        if (err) {
            console.log(err)
            throw err;
        }
        res.json(quizes);
    })
});
app.post("/api/addQuiz", function (req, res) {
    console.log("11111111111******************************************");
    var quiz = req.body;
    console.log(quiz);
    Quiz.addQuiz(quiz, function (err, quiz) {
        
        if (err) {
            console.log(err);
        } else {
            res.json(quiz);
        }
    })
});

// get questions
app.get("/api/questions", function (req, res) {
    Question.getQuestions(function (err, question) {
        if (err) {
            console.log(err)
            throw err;
        }
        res.json(question);
    })
});
app.post("/api/questions", function (req, res) {
    console.log("*******************@@@@@@@@@@@******************");
    console.log(req);
    var question = req.body;
    Question.addQuestion(question, function (err, question) {
        if (err) {
            throw err;
        }
        res.json(question);
    })
});
app.listen(3001);