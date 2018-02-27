var numExams = 0;
var scores = new Array();
var examScores = 0;



function go() {
    do {
        numExams = window.prompt("How many exams need scoring");
    }while(isNaN(numExams));
    getScores(numExams);
    maxExam(scores);
    outScores(scores);
}


function getScores(numExams){
    var exams = numExams;
    var i = 1;

    do{
        examScores = window.prompt("Enter in Exam" + i + " grade:");
        scores[exams-1] = examScores;
        i++;
        exams--;
    }while(isNaN(examScores) || exams > 0 );
    return scores;
}


function maxExam(scores){
    var curMax = 0;
    var curMaxIndex = 0;
    // for (var i in scores)
    //     if (parseInt(scores[i]) > curMax) {
    //         curMax = scores[i];
    //         curMaxIndex;
    //     }
    for(var j = 0; j < scores.length; j++){
        if (parseInt(scores[j]) > curMax) {
            curMax = scores[j];
            curMaxIndex = j + 1;
        }
    }
    document.writeln("The highest score, "  + curMax + ", was on Exam " + curMaxIndex);
}


function outScores(scores){

    var table = "<table border='1' width='15%'>";
    var row1  = "<tr>";
    var row2  = "<tr>";
    var l = 0;
    for (var i = 0; i < scores.length; i++){
        row1 += "<th>" + "Exam" + l + "</th>";
        row2 += "<td>" + scores[i] + "</td>";
        l++;
    }
    row1 += "</tr>";
    row2 += "</tr>";
    table += row1 + row2  + "</table>";
    document.writeln(table);
}