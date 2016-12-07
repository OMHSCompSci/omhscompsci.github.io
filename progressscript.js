$(document).ready(function() {
    $.get("https://api.github.com/repositories/71170842/commits", function(val) {
        //This actually works
        $commitArray = val;
        var maxCommits = 10;
        var commitsString = "";
        commitsString+="<table class=\"comtable\">";
        for (var i = 0; i < maxCommits; i++) {
            commitsString+=("<tr class=\"commit-item\">");
            name = checkSubs($commitArray[i].commit.author.name) + ", " + formatDate($commitArray[i].commit.author.date);
            commitsString+=("<td>" + name + "</td>");
            commitsString+=("<td>" + $commitArray[i].commit.message + "</td>");
            commitsString+="</tr>";
        }
        commitsString+="</table>";
        
        $("#comlistgame").html(commitsString);      //alert($commitArray[0].commit.message);
       });
    $.get("https://api.github.com/repositories/75451699/commits", function(val) {
        //This actually works
        $commitArray = val;
        var maxCommits = 10;
        var commitsString = "";
        commitsString+="<table class=\"comtable\">";
        for (var i = 0; i < maxCommits; i++) {
            commitsString+=("<tr class=\"commit-item\">");
            name = checkSubs($commitArray[i].commit.author.name) + ", " + formatDate($commitArray[i].commit.author.date);
            commitsString+=("<td>" + name + "</td>");
            commitsString+=("<td>" + $commitArray[i].commit.message + "</td>");
            commitsString+="</tr>";
        }
        commitsString+="</table>";
        
        $("#comlistsite").html(commitsString);      //alert($commitArray[0].commit.message);
       });
});


function formatDate(gitDate) {
    var year = gitDate.substring(0,4);
    var day = gitDate.substring(5,7);
    var month = gitDate.substring(8,10);
    return day + "/" + month + "/" + year;
}

function checkSubs(name) {
    if (name === "MadelynCarr" || name ==="xDestx" || name === "zcarr8445" || name === "xDest | Zach") {
        return "Zachary";
    }
    if (name === "kngo0784" || name === "UltimateSmee") {
        return "Kaleo";
    }
    return name;
}