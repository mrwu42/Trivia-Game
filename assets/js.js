$('#start').on('click',function(){
    game.start()
})

// $('#reset').on('click',function(){
//     game.reset()
// })


$(document).on('click','#end',function(){
    game.done();
})




var questions = [{
        question: "What Family does the Cat hail from?",
        answers: ["Feliade","Feliformia","Felinae","Felis"],
        correctanswer: "Feliade"

    }, {
        question: "What SubFamily does the Cat hail from?",
        answers: ["Feliade","Feliformia","Felinae","Felis"],
        correctanswer: "Felinae"
    }, {
        question: "What Genus does the Cat hail from?",
        answers: ["Feliade","Feliformia","Felinae","Felis"],
        correctanswer: "Felis"
    }, {
        question: "What Suborder does the Cat hail from?",
        answers: ["Feliade","Feliformia","Felinae","Felis"],
        correctanswer: "Feliformia"
    }, {
        question: "What Kingdom does the Cat hail from?",
        answers: ["Animalia","Vegetabilia","Protozoa","Eukaryota"],
        correctanswer: "Animalia"
    }, {
        question: "Bonus: Was this an unfair quiz?",
        answers: ["No","Alittle","Sorta","Yes"],
        correctanswer: "Yes"
    }];

    var game = {
        correct: 0,
        incorrect: 0,
        counter: 60,
        countdown: function(){
            game.counter--;
            $('#counter').html(game.counter);
            if(game.counter<=0){
                game.done();
            }

        },
        start: function(){
            timer = setInterval(game.countdown,1000);
            $('#subwrapper').prepend('<h2>Time: <span id="counter">60</span> Seconds</h2>');
            $('#start').remove()
            for(var i=0; i < questions.length;i++){
                $('#subwrapper').append('<h2>' + questions[i].question+'</h2>');
                for(var j=0; j <questions[i].answers.length;j++){
                    $("#subwrapper").append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }
        }
        
        $('#subwrapper').append('<br> <br><button id="end">Submit!!!</button>')
    },

    

    
    done: function(){
        $.each($("input[name='question-0']:checked"),function(){
            if($(this).val()==questions[0].correctanswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function(){
            if($(this).val()==questions[1].correctanswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val()==questions[2].correctanswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val()==questions[3].correctanswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val()==questions[4].correctanswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function(){
            if($(this).val()==questions[5].correctanswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
        },

        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();
            $('#subwrapper').html("<h2>Complete!!!</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $('#subwrapper').append("<h3>Unanswers: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
            $('#subwrapper').append("<br> <h3> Click ME to Try Again!!!!!</h3>");
            $('#subwrapper').append("<a href=''><button><img src='https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg'></button></a>")
        },


        
}
