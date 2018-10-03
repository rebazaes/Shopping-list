var button=document.getElementById("enter");
var input=document.getElementById("userInput");
var ul=document.querySelector("ul");
var li=document.querySelectorAll("li");
var deleteButton=document.getElementsByClassName("delete");

function inputLength(){
	return input.value.length;
}
function toggle (){
	this.classList.toggle("done");
}
function remove(){
	this.parentElement.remove();
}
function createListElement(){
	var newElement=document.createElement("li");
	newElement.addEventListener("click",toggle);
	var createButton=document.createElement("button");
	createButton.appendChild(document.createTextNode("Delete"));
	createButton.classList.add("delete");
	createButton.addEventListener("click",remove);
	newElement.appendChild(document.createTextNode(input.value));
	newElement.appendChild(createButton);
	ul.appendChild(newElement);
	input.value="";


}
function addListAfterClick(){
	if(inputLength()>0){
	createListElement();
	}
}


function addListAfterEnter(event){
	if(inputLength()>0 && event.keyCode===13){
	createListElement();
	}
}
function doneElements(){
	for ( let i=0;i<li.length;i++){
		li[i].addEventListener("click",toggle);
	
}
}
function deleteElements(){
	
	for (let i=0;i<li.length;i++){
		deleteButton[i].addEventListener("click",remove);
	}

}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterEnter);
doneElements();
deleteElements();
