function pageLoad() {
    var doc = document.getElementById("wrapper");
    //Do things with posts somehow
    //For every post
    var i = 0;
    for (i = 0; i < 2; i++)
    {
        //Necessary because doc.innerHTML+= "<div>" automatically adds the </div> after :(
        var toAdd = "";
        toAdd += " <div id=\"post\">";
        toAdd += "<div id=\"posttitle\">Test post " + (i+1) + "</div>"; //Get the name and put it there
        toAdd += "<div id=\"postinfo\">By Zachary Carr, 10/07/16AAAAAAAA @11:25 PM</div><hr/>";//Get the authoer and date then place here
        toAdd += "<div id=\"postbody\"> I think meetings are going to be every monday after school for 45 minutes or so. I'll be in during scorp time if anyone wants to ask for anything</div></div><br/>";
        doc.innerHTML += toAdd;
    }
}
