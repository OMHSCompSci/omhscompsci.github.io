$(document).ready(function() {
    var db = firebase.database().ref().child("members");
    db.once("value", function(data) {
                    //Change table
                    var memberArray = data.val();
                    if(memberArray == null)
                    {
                        //No members
                        //do nothing
                        
                    } else {
                        $(".memberlist").html("");
                        //Should clear
                        for (var i = 0; i < memberArray.length; i++)
                        {
                            var member = memberArray[i];
                            $(".memberlist").append("<tr><td>" + member.position + "</td><td>" + member.name + "</td></tr>");
                        }
                    }
                });
});