const listEle = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button");

addButton.setAttribute("id", "btn-add");
const focusnext = function (){
        input.focus();
    }
window.addEventListener("load", focusnext);

let buttonClicked = function(){
    let newInputValue = input.value;
    input.value = "";

    const listIten = document.createElement("li");
    const listContent = document.createElement("span");
    const listButton = document.createElement("button");

    listIten.appendChild(listContent);
    listIten.appendChild(listButton);

    listContent.textContent = newInputValue;
    listButton.textContent = "Delete";

    listEle.appendChild(listIten);
    
    const remove = function(){
        listEle.removeChild(listIten);
    }

    listButton.addEventListener("click", remove);
    
    

}

addButton.addEventListener("click", buttonClicked);
addButton.addEventListener("click", focusnext);


