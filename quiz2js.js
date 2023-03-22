var questionBank= [
    {
        question : 'This temple is 150 year old temple situated in Kavi Kamboi in Gujarat. It is flanked by the Arabian Sea on one side and the Bay of Cambay on the other. The Shivalinga present here can be seen only during low-tide hours. In the above given description, which temple is being talked about?',
        option : ['Somnath Temple','Nageshwar Temple','Stambheshwar Mahadev Temple','Dwarkadhish Temple'],
        answer : 'Stambheshwar Mahadev Temple'
    },
    {
        question : 'Which is the largest church in Goa?',
        option : ['Se Cathedral','Basilica of Bom Jesus','Church of Cajetan','Church of Our Lady of Rosary'],
        answer : 'Se Cathedral'
    },
    {
        question : 'Which monument is known for about 1000 windows?',
        option : ['Charminar','Hawa Mahal','Taj Mahal','Red Fort'],
        answer : 'Hawa Mahal'
    },
    {
        question : 'Which is the busiest 4th cantilever bridge in the world?',
        option : ['Gandhi-Setu','2nd Hooghly Bridge','Howrah Bridge','Bandra-Worli Sea Link'],
        answer : 'Howrah Bridge'
    },
    {
        question : 'Which temple dedicated to the sun-god is shaped like a chariot?',
        option : ['Sun Temple, Konark','Lotus Temple, New Delhi','Surya Pahar Temple, Assam','Jagannath Temple, Puri'],
        answer : 'Sun Temple, Konark'
    },
    {
        question : 'This Islamic architecture was built by Shah Jahan as a memorial to his wife. Name it.',
        option : ['Qutub Minar','Taj Mahal','Red Fort','Fatehpur Sikhri'],
        answer : 'Taj Mahal'
    },
    {
        question: 'When was Shanivar Wada built?' ,
        option: ['1736', '1536', '1218', '1902'],
        answer: '1736'
    },
    {
        question : 'What is Jantar Mantar?',
        option : ['An Archeological Site','A Museum','A Fort','An Astronomical Observatory'],
        answer : 'An Astronomical Observatory'
    },
    {
        question : 'Which city was previously the capital of Vijaynagar?',
        option : ['Hampi','Madras','Manglore','Mysore'],
        answer : 'Hampi'
    },
    {
        question: 'Which monument was built by Qutub-Ud-Din-Aibak?',
        option: ['Jamia Masjid', 'Qutub Minar', 'Iron Pillar', 'Fatehpur Sikhri'],
        answer: 'Qutub Minar'
    },
    {
        question: 'Which fort was founded by the Kakatiya Kings of Warangal?',
        option: ['Red Fort', 'Amber Fort', 'Golconda Fort', 'Agra Fort'],
        answer: 'Golconda Fort'
    },
    {
        question: 'Which monument is built on the banks of the river Musi?',
        option: ['Charminar', 'Taj Mahal', 'Agra Fort', 'Golconda Fort'],
        answer: 'Charminar'
    },
    {
        question: 'Which Chola Temple is a UNESCO World Heritage Site?',
        option: ['Brihadisva Temple','Meenakshi Temple', 'Airavatesvara', 'Gangaikondacholisvaram'],
        answer: 'Brihadisva Temple'
    },
    {
        question: 'Where is the Tagore Centre for the Study of Culture and Civilization ?',
        option: ['Shimla', 'Kolkata', 'Chennai', 'Dehradun'],
        answer: 'Shimla'
    },
    {
        question: 'Ajanta Ellora Caves are situated near which of the following cities?',
        option: ['Madurai', 'Mount Abu', 'Aurangabad', 'Bijapur'],
        answer: 'Aurangabad'
    }
    
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion(); 