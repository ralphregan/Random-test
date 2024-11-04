const Create = document.createElement("button");
Create.textContent ="Size";
Create.className = "Btn";
const Create2 = document.createElement("button");
Create2.textContent="color"

const theBox = document.querySelector(".theBox");

document.body.appendChild(Create);

Create.addEventListener("click", (question)=>{
    question = prompt("what size do you want");
    const prop = 960/question;
       
    for(let i = 0; i < question; i++){
        const row = document.createElement("div");
        
        row.className = "row"
        for(let j = 0; j < question; j++){
            const cell = document.createElement("div");
            cell.className ="cell"
            
            cell.style.width = prop+"px";
            cell.style.height = prop+"px";
            console.log(prop);
            row.appendChild(cell); 
        }
        theBox.appendChild(row);
      
    }
    const Cell = document.querySelectorAll(".cell");
Cell.forEach(one => { 
   
        
        const colowave = ["red", "blue", "yellow", "green", "aqua"]
        let colorIndex = 0;

    one.addEventListener("mouseover", ()=>{
        /*setTimeout(()=>{
        one.style.backgroundColor = colowave[colorIndex]
        colorIndex = (colorIndex + 1) % colowave.length;

},1000)*/

setInterval(()=>{
    one.style.backgroundColor = colowave[colorIndex]
    colorIndex = (colorIndex + 1) % colowave.length;

},1000)
   
})






})

})




