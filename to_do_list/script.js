const inputBox=document.getElementById("input");
const listItems=document.getElementById("list-items");

function addTask(){
    if (inputBox.value==='')
    alert("you must write something");
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listItems.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    listSave();
}

listItems.addEventListener("click",function(e){
    if(e.target.tagName=='LI'){
        e.target.classList.toggle("checked");
        listSave()
    }
    else  if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        listSave()
    }
},false);

function listSave(){
    localStorage.setItem("data",listItems.innerHTML);
}
function showlist(){
    listItems.innerHTML=localStorage.getItem("data");
  
}
showlist();
