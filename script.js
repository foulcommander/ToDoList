let inputText= document.getElementById("inp");
let list= document.getElementById("list");

function hello(){
var create=document.createElement("p");
  create.innerText=inputText.value;
  create.className="van";
  create.addEventListener("click",function(){
    create.style.textDecoration="line-through";
  });
  create.addEventListener("dblclick",()=>{
    list.removeChild(create);
  });
list.appendChild(create);
inputText.value="";
}

