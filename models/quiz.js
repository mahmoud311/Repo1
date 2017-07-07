var mongoose = require('mongoose');
// quiz schema
var quizSchema = mongoose.Schema({
    qname: {
        type: String,
        required: true
    },
    qnumber: {
        type: Number
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
module.exports.getQuizes = function (callback, limit) {
    console.log("*************&&&&&&&&&&&&&&**************")
    Quiz.find({}, function (err, data) {
        if (err) {
            console.log(err);
            callback("CANNTasdfasdf");
        } else {
            console.log(data)
            callback(null, data);
        }
    });
    module.exports.addQuiz = function (quiz, callback) {
        console.log(quiz);
       Quiz.create(quiz, callback);
    }
}