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
                        //$(".memberlist").html("");
                        //Should clear
                        var founderArray = [];
                        var sponsorArray = [];
                        var normArray = [];
                        for (var i = 0; i < memberArray.length; i++)
                        {
                            var member = memberArray[i];
                            if(member.position.toLowerCase() === "founder") {
                                founderArray.push(member);
                            } else if (member.position.toLowerCase() === "sponsor") {
                                sponsorArray.push(member);
                            } else {
                                normArray.push(member);
                            }
                            //$(".memberlist").append("<tr><td>" + member.position + "</td><td>" + member.name + "</td></tr>");
                        }
                        
                       // $("#founders").html("<tr><td>");
                        var founderString = "<tr><td>";
                        for (var i = 0; i < founderArray.length; i++) {
                            founderString += founderArray[i].name;
                            if(i+1 < founderArray.length) {
                                founderString+=", ";
                            }
                        }
                        founderString+="</td></tr>";
                        $("#founders").html(founderString);
                       // $("#founders").append("</td></tr>");
                        
                        //$("#sponsors").html("<tr><td>");
                        var sponserString = "<tbody><tr><td>";
                        for (var i = 0; i < sponsorArray.length; i++) {
                            sponserString += sponsorArray[i].name;
                            if(i+1 < sponsorArray.length) {
                                sponserString+=", ";
                            }
                        }
                        sponserString+="</td></tr></tbody>";
                        $("#sponsors").html(sponserString);
                        
                        var memString = "<tbody><tr>";
                        for (var i = 0; i < normArray.length; i++) {
                            memString += "<td>" + normArray[i].name + "</td>";
                            if(i%3 == 2) {
                                memString+="</tr><tr>";
                            }
                            
                            }
                        }
                        memString+="</tr></tbody>";
                        $("#members").html(memString);
                });
});