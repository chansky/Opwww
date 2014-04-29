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


		var usernames=[];
		var imgLinks=[];
		var dataLength=0;
		var c_id=[];
		var choiceText=[];
		var startime=[];
		var endtime=[];
		var v_id=[];
		var orderNum=[];

		$.get("https://web.engr.illinois.edu/~opinio2014/realFeed.php",function(data){
			//window.alert(data);
			if(data.length !==3 && data!= null && data!==undefined){    //VERY CRAPPY NULL CHECKER....
				var obj = jQuery.parseJSON( data );
					//window.alert(obj);
					for(var i = 0; i < obj.length; i++) {
						//window.alert("hi ben");
						//$("#temp").append(obj[i].username+"<br>");
						usernames.push(obj[i].username);
						imgLinks.push(obj[i].imagepath);
						c_id.push(obj[i].c_id);
						v_id.push(obj[i].v_id);
						choiceText.push(obj[i].choiceText);
						startime.push(obj[i].startime);
						endtime.push(obj[i].endtime);
						//orderNum.push(obj[i].orderNum);
						//window.alert("pushed to both ");
					}
					//indow.alert(usernames[0]);
				dataLength=usernames.length;



					for (var j = 0; j < dataLength; j++) {   //not sure why this needs to be in the get
			    		$('#feedList').append('<li><a href=""><img src ="'+imgLinks[j]+'"/><h2>'+usernames[j]+'</h2><p>'+endtime[j]+'</p></a></li>').listview('refresh');

					}

					//store the feed locally:
					var userArr="userArr";
					var c_idArr="c_idArr";
					var choiceTextArr= "choiceTextArr";
					var startimeArr="startimeArr";
					var endtimeArr="endtimeArr";
					var v_idArr="v_idArr";
					var orderNumArr= "orderNumArr";
					if(typeof(window.localStorage) != 'undefined'){ 
						window.localStorage.setItem(userArr,usernames);
						window.localStorage.setItem(c_idArr, c_id);
						window.localStorage.setItem(choiceTextArr, choiceText);
						window.localStorage.setItem(startimeArr, startime);
						window.localStorage.setItem(endtimeArr, endtime);
						window.localStorage.setItem(v_idArr, v_id);
						window.localStorage.setItem(orderNumArr, orderNum);

						window.alert("stored data");
					} 
					else{ 
						console.log("store FAILED");
						throw "window.localStorage, not defined"; 
					}

				}
				else{
					//window.alert("hi me");
					var word="NO FOLLOWERS";
					$('#feedList').append('<li><a href="">' + word + '</a></li>').listview('refresh');
				}


		});  //this is clsing the get!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

}
  /*$('[id^=feedList]').live("click", function(event, ui) {
    //console.log("updateVersion, selected = " + $(this).attr('id'));
    window.alert("entered");
    window.alert("updateVersion, selected = " + $(this).attr('id'));
  }) */


function presentView(ListIndex){

	window.location="chart.html";
}