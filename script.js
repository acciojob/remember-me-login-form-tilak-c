//your JS code here. If required.
const username=document.getElementById("username")
const password=document.getElementById("password");
const rememberMe=document.getElementById("checkbox");
const btn=document.getElementById("submit");
const existingBtn=document.getElementById("existing");
function checkSavedCredentials(){
	const savedUsername=localStorage.getItem("username");
	const savedPassword=localStorage.getItem("password");
	if(savedUsername && savedPassword){
		existingBtn.style.display="block"
	}else{
		existingBtn.style.display="none";
	}
}
checkSavedCredentials();

btn.addEventListener("click",function(event){
	event.preventDefault();
	const usernameValue=username.value;
	const passwordValue=password.value;
	alert(`Logged in as ${usernameValue}`);
	if(rememberMe.checked){
		localStorage.setItem("username",usernameValue);
		localStorage.setItem("password",passwordValue);
	}
	else{
		localStorage.clear();
	}
	username.value="";
	password.value="";
})
existingBtn.addEventListener("click",function(){
	const savedUsername=localStorage.getItem("username");
	alert(`Logged in as ${savedUsername}`)
})