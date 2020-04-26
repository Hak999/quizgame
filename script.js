var q = ["What is a JavaScript element that represents either TRUE or FALSE values?<br /><br />",
"In JavaScript, what element is used to store multiple values in a single variable?<br /><br />",
" JavaScript does NOT have this function built-in, which is commonly used to print or display data in other languages.?<br /><br />",
"What is the name of the object that allows you to perform mathematical tasks with the interpreter?<br /><br />",
"In JavaScript, what is used in conjunction with HTML to “react” to certain elements?<br /><br />",
     "What does HTML stands for?<br /><br />",
];
var a1 = ["<button class=buttons002 onclick=q1c()>Boolean</button>",
          "<button class=buttons002 onclick=q2c()>Arrays</button>",
          "<button class=buttons002 onclick=q3c()>Output</button>",
          "<button class=buttons002 onclick=q4i()>Math</button>",
          "<button class=buttons002 onclick=q5i()>Events</button>",
          "<button class=buttons002 onclick=q6i()>Hypertext Markup Language</button>",
];

var a2 = ["<button class=buttons002 onclick=q1i()>Condition</button>",
          "<button class=buttons002 onclick=q2i()>Strings</button>",
          "<button class=buttons002 onclick=q3i()>Show</button>",
          "<button class=buttons002 onclick=q4c()>Count</button>",
          "<button class=buttons002 onclick=q5c()>Condition</button>",
          "<button class=buttons002 onclick=q6c()>Hypertext Machine language</button>",
];

var a3 = ["<button class=buttons002 onclick=q1i()>RegExp</button>",
          "<button class=buttons002 onclick=q2i()>Variables</button>",
          "<button class=buttons002 onclick=q3i()>Display</button>",
          "<button class=buttons002 onclick=q4i()>Number</button>",
          "<button class=buttons002 onclick=q5i()>Boolean</button>",
          "<button class=buttons002 onclick=q6i()>Hypertext and links markup language</button>",
];

var a4 = ["<button class=buttons002 onclick=q1i()>Event</button>",
          "<button class=buttons002 onclick=q2i()>Functions</button>",
          "<button class=buttons002 onclick=q3i()>Speak</button>",
          "<button class=buttons002 onclick=q4i()>Solve</button>",
          "<button class=buttons002 onclick=q5i()>RegExp</button>",
          "<button class=buttons002 onclick=q6i()>Hightext machine language</button>",
];

var c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct"];
var i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect"];

var n = 0;
n++;
var s = 0;
s++;

function begin() {
    disappear001.innerHTML = "";
    message001.innerHTML = "";
    question1.innerHTML = q[0];
    option1.innerHTML = a1[0];
    option2.innerHTML = a2[0];
    option3.innerHTML = a3[0];
    option4.innerHTML = a4[0];
    number001.innerHTML = n++;
}

function q1c() {
    answer1.innerHTML = "<div id=green001>" + c[0] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
    score001.innerHTML = s++;
}

function q1i() {
    answer1.innerHTML = "<div id=red001>" + i[0] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
}

function new002() {
    question1.innerHTML = q[1];
    option1.innerHTML = a1[1];
    option2.innerHTML = a2[1];
    option3.innerHTML = a3[1];
    option4.innerHTML = a4[1];
    next001.innerHTML = "";
    answer1.innerHTML = "";
    number001.innerHTML = n++;
}

function q2c() {
    answer1.innerHTML = "<div id=green001>" + c[1] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
    score001.innerHTML = s++;
}

function q2i() {
    answer1.innerHTML = "<div id=red001>" + i[1] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
}

function new003() {
    question1.innerHTML = q[2];
    option1.innerHTML = a1[2];
    option2.innerHTML = a2[2];
    option3.innerHTML = a3[2];
    option4.innerHTML = a4[2];
    next001.innerHTML = "";
    answer1.innerHTML = "";
    number001.innerHTML = n++;
}

function q3c() {
    answer1.innerHTML = "<div id=green001>" + c[2] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
    score001.innerHTML = s++;
}

function q3i() {
    answer1.innerHTML = "<div id=red001>" + i[2] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
}

function new004() {
    question1.innerHTML = q[3];
    option1.innerHTML = a1[3];
    option2.innerHTML = a2[3];
    option3.innerHTML = a3[3];
    option4.innerHTML = a4[3];
    next001.innerHTML = "";
    answer1.innerHTML = "";
    number001.innerHTML = n++;
}

function q4c() {
    answer1.innerHTML = "<div id=green001>" + c[3] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
    score001.innerHTML = s++;
}

function q4i() {
    answer1.innerHTML = "<div id=red001>" + i[3] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
}

function new005() {
    question1.innerHTML = q[4];
    option1.innerHTML = a1[4];
    option2.innerHTML = a2[4];
    option3.innerHTML = a3[4];
    option4.innerHTML = a4[4];
    next001.innerHTML = "";
    answer1.innerHTML = "";
    number001.innerHTML = n++;
}

function q5c() {
    answer1.innerHTML = "<div id=green001>" + c[4] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
    score001.innerHTML = s++;
}

function q5i() {
    answer1.innerHTML = "<div id=red001>" + i[4] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
}

function new006() {
    question1.innerHTML = q[5];
    option1.innerHTML = a1[5];
    option2.innerHTML = a2[5];
    option3.innerHTML = a3[5];
    option4.innerHTML = a4[5];
    next001.innerHTML = "";
    answer1.innerHTML = "";
    number001.innerHTML = n++;
}

function q6c() {
    answer1.innerHTML = "<div id=green001>" + c[5] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
    score001.innerHTML = s++;
}

function q6i() {
    answer1.innerHTML = "<div id=red001>" + i[5] + "</div>";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
}


function end001() {
    message001.innerHTML = "End of Quiz.";
    question1.innerHTML = "";
    option1.innerHTML = "";
    option2.innerHTML = "";
    option3.innerHTML = "";
    option4.innerHTML = "";
    next001.innerHTML = "<div id=text1>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
    answer1.innerHTML = "";
}

function repeat001() {
    location.reload();
}