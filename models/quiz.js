var mongoose = require('mongoose');
// quiz schema
var quizSchema = mongoose.Schema({
    qname: {
        type: String,
        required: true
    },
    qnumber: {
        type: Number,
        default: 0
    },
    Question: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }],
    create_data: {
        type: Date,
        default: Date.now
    }
});
var Quiz = module.exports = mongoose.model('Quiz', quizSchema);
//get all Questioins
module.exports.getQuizes = function (callback) {
    console.log("*************&&&&&&&&&&&&&&**************")
    //Quiz.find({ Question: {$not: {$size: 0}}})
    // Quiz.find({ Question: {$gt: [] }})
    // Quiz.find({ 'Question.29': {$exists: true},'Question.30': {$exists: false}})
    Quiz.find({})
        .select('_id qname qnumber Question')
        .exec(function (err, data) {
            if (err) {
                console.log(err);
                callback("CANNTasdfasdf");
            } else {
                console.log(data)
                callback(null, data);
            }
        });
}

// get all questions for quiz by _id

module.exports.getQuizById = function (quiz, callback) {
    // Book.findById(book,callback);
    console.log("*************&&&&&&&&&&&&&&**************")
    Quiz.findOne({ _id: quiz })
        .select('Question')
        .populate('Question')
        .exec(function (err, data) {
            if (err) {
                console.log(err);
                callback("CANNTasdfasdf");
            } else {
                console.log(data)
                callback(null, data);
            }
        });
   // console.log({ _id: quiz });
   // Quiz.findOne({ _id: quiz }, callback);
}



//add quiz
module.exports.addQuiz = function (quiz, callback) {
    console.log(quiz);
    // quiz.$inc
    var newQuiz = new Quiz({
        qname: quiz.qname
    });
    console.log("//////////////////");
    console.log(newQuiz);

    newQuiz.save(newQuiz, function (err, savedObject) {
        if (err || !savedObject) {
            callback('ERR_CANT_SAVE_NEW_Quiz');
        } else {
            // module.quiz.findOneAndUpdate
            console.log("7878787878787");
            console.log(savedObject);
            callback(null, savedObject);
        }
    });
}