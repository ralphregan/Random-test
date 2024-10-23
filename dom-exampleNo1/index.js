const UL = document.querySelector("ul");
const Input = document.querySelector("input");
const button = document.querySelector("#btn-add");


const clicked =   function(){
    const myList = Input.value;
    const list = document.createElement("li");
    const span = document.createElement("span");
    const listButton = document.createElement("button");

    Input.value = " ";
    listButton.textContent = 'Delete';
    
list.appendChild(span);
list.appendChild(listButton);
span.textContent= myList;
UL.appendChild(list);
const remove = function(){
    UL.removeChild(list);

};
listButton.addEventListener("click",remove);


}

 
button.addEventListener("click", clicked)