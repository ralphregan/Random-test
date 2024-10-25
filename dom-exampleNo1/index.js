const input = document.querySelector("input");
const addButton = document.querySelector("button");
const list = document.querySelector("ul");

const nextFocus = function(){
    input.focus();
}
window.addEventListener("load", nextFocus);
const addList = function(){
    const listEle = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    
    const inputValue = input.value;
        input.value = "";

        span.textContent = inputValue;
    deleteButton.textContent = "Delete";
   
    listEle.appendChild(span);
    listEle.appendChild(deleteButton);
    list.appendChild(listEle);
   
    const remove = function(){
        listEle.remove();
    };

    deleteButton.addEventListener("click", remove);   
}
const addListKey = function(event){
    const listEle = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    const inputValue = input.value;
    const pressedKey = event.key ;

    if(pressedKey === "Enter"){ 
        listEle.appendChild(span);
        listEle.appendChild(deleteButton);
       
        list.appendChild(listEle);

        deleteButton.textContent = "Delete";
        span.textContent = inputValue;
    }
    const remove = function(){
        listEle.remove();
    };

    deleteButton.addEventListener("click", remove);  

}

addButton.addEventListener("click", addList);
input.addEventListener("keydown", addListKey)
//addButton.addEventListener("keydown", addListKey);


