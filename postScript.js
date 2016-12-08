var posts = 0;
function pageLoad() {
    var doc = document.getElementById("wrapper");
    //Do things with posts somehow
    //For every post
    var i = 0;
    for (i = 0; i < 2; i++)
    {
        var toAdd = "";
        toAdd += "<div class=\"post\" id=\"post" + i + "\" style=\"display:none;\">";
        toAdd += "<div id=\"posttitle\">Test post " + (i+1) + "</div>"; //Get the name and put it there
        toAdd += "<div id=\"postinfo\">By Zachary Carr, 10/07/16AAAAAAAA @11:25 PM</div><hr/>";//Get the authoer and date then place here
        toAdd += "<div id=\"postbody\"> I think meetings are going to be every monday after school for 45 minutes or so. I'll be in during scorp time if anyone wants to ask for anything</div></div>";
        doc.innerHTML += toAdd;
        posts++;
    }
    doFadeIn(0);
}
//Last commit test on master branch
function doFadeIn(x) {
    $("#post"+x).fadeIn(1000)
    //alert(x);
    if(!(x >= posts))
    {
        //alert("In x: " + x);
        setTimeout(doFadeIn,1000,x+1);
    }
    //$("#post1").fadeIn(1000);
}

//Testing
writePostToFile("Nice post", "Zachary Carr", 3, 12,2016,12,54,false,"Hey dudes what's up lol :)");

//Need post file format
/*

    Line by line?
    POST_TITLE: <title> 
    POST_AUTHOR: <author>
    DATE: <d/m/y/h/m/(am or pm)>
    POST_BODY: <body>
    POST_END

*/


//isPm should be a boolean
function writePostToFile(title, author, day, month, year, hour, minute, isPm, content)
{/*
    var postFile = new File([], "./posts.txt");
    file.open("w");
    alert("Made it here");
    //I guess w stands for write instead of read
    file.writeln("POST_TITLE: " + title);
    file.writeln("POST_AUTHOR: " + author);
    file.writeln("DATE: " + month + "/" + day + "/" + year + "/" + hour + "/" + minute + "/" + (isPm ? "PM":"AM"));
    file.writeln("POST_BODY: " + content);
    file.writeln("POST_END");
    file.close();
   */ 
}
