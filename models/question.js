var mongoose = require('mongoose');
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
    create_data: {
        type: Date,
        default: Date.now
    }
});
var Question = module.exports = mongoose.model('Question',questionSchema);
//get all Questioins
module.exports.getQuestions = function (callback, limit) {
    console.log("*******************")
    Question.find({},function (err, data) {
        if (err) {
            console.log(err);
            callback("CANNTasdfasdf");
        } else {
            console.log(data)
            callback(null, data);
        }
    });
    // add question
      module.exports.addQuestion = function (questino, callback) {
          console.log("xxxxxxxxxxxxx")
        console.log(questino);
          console.log("yyyyyyyyyy")
       Question.create(questino, callback);
    }
}