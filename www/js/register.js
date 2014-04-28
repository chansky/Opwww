function init(){
	document.addEventListener("deviceready",register,true);
	delete init;
}

function register(){
	$("#registerForm").on("submit",function(e){
		//$("$registerButton",this).attr("disabled","disabled");
		//document.write("inside register");
		var ph = "2672301309";
		var em = $("#email",this).val();
		var u = $("#username",this).val();
		var p = $("#password",this).val();
		if(em!='' && u!='' && p!=''){
			//TODO: field validation
			$.post("https://web.engr.illinois.edu/~mtmarsh2/register.php",{phonenumber:ph,email:em,username:u,password:p},function(res){
				// if(res[1] === 't'){
				 	window.location = "index.html";
				// }
				// else{
				// 	navigator.notification.alert("Username exists",function(){});		
				// }
			});	
		}
		else{
			navigator.notification.alert("field empty",function(){});
		}
	});
}

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 