//feed.js
function init(){
	document.addEventListener("deviceready", deviceReady, true);

	delete init;
}


function person(username, imageId, timeVal)
{
	this.username = username;
	this.imageId = imageId;
	this.timeVal = timeVal;
}

function loader(){
	/*	var myFather = new person("John11", 19992, 60);
		var myMother = new person("Sally699", 78211, 48);

		var myArray=[];
		myArray.push(myFather);
		myArray.push(myMother);
		console.log("push");  */


	//	document.getElementById("result").innerHTML=localStorage.username;
	//	if(result=="steve"){
	/*	var valoutput ;
		if(typeof(window.localStorage) != 'undefined'){ 
			valoutput = window.localStorage.getItem ("user"); 
			$("#temp").append("username: " + valoutput+"<br>");
		} 
		else{ 
			throw "window.localStorage, not defined"; 
		}

		for(var j=0; j<myArray.length; j++){
			console.log(j);
    		$("#temp").append("username: " + myArray[j].username+"<br>");
    	}  */

		var usernames=[];
		var imgLinks=[];
		var dataLength=0;

		$.get("https://web.engr.illinois.edu/~opinio2014/feed.php",function(data){


			var obj = jQuery.parseJSON( data );

				for(var i = 0; i < obj.length; i++) {
					//window.alert("hi ben");
					//$("#temp").append(obj[i].username+"<br>");
					usernames.push(obj[i].username);
					imgLinks.push(obj[i].imgLink);
					//window.alert("pushed to both ");
				}
				//indow.alert(usernames[0]);
			dataLength=usernames.length;



				for (var j = 0; j < dataLength; j++) {   //not sure why this needs to be in the get
					//window.alert(j);
		    		$('#feedList').append('<li><a href=""><img src ="'+imgLinks[j]+'"/>' + usernames[j] + '</a></li>').listview('refresh');
				}

	//	window.alert("curr datalength: "+dataLength);
		//$("#temp").append("length of usernames: "+usernames.length+"<br>");

		});  //this is clsing the get!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



		

}