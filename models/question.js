var mongoose = require('mongoose');
//Quiz = require('./models/quiz');

//questino schema
var questionSchema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    a1: {
        type: String,
        required: true
    },
    a2: {
        type: String,
        required: true
    },
    a3: {
        type: String,
        required: true
    },
    a4: {
        type: String,
        required: true
    },
    correctAns: {
        type: Number,
        required: true
    },
    quiz_id: {
        type: String,
    },
    create_data: {
        type: Date,
        default: Date.now
    }
});
var Question = module.exports = mongoose.model('Question', questionSchema);
//get all Questioins
module.exports.getQuestions = function (callback, limit) {
    console.log("*******************")
    Question.find({}, function (err, data) {
        if (err) {
            console.log(err);
            callback("CANNTasdfasdf");
        } else {
            console.log(data)
            callback(null, data);
        }
    });

}

// add questions
module.exports.addQuestion = function (question, callback) {
    var newQuestion = new Question({
        text: question.text,
        a1: question.a1,
        a2: question.a2,
        a3: question.a3,
        a4: question.a4, 
        correctAns: question.correctAns,
        quiz_id: question.quiz_id
    });
   newQuestion.save(newQuestion, function (err, savedObject) {
        if (err || !savedObject) {
            callback('ERR_CANT_SAVE_NEW_Quiz');
        } else {
            Quiz.findById(question.quiz_id,function(err,data){
                if(err){
                    callback("not updated");
                }else{
                    console.log(data);
                    data.Question.push(savedObject._id);
                    data.save();
                }
            })
            console.log("363636363636363");
            console.log(savedObject);
            callback(null, savedObject);
        }
    });
}

// module.exports.addQuestion = function (questino, callback) {

//     console.log("xxxxxxxxxxxxx")
//     console.log(questino);
//     console.log("yyyyyyyyyy")
//     Question.create(questino, callback);
// }

// add question
