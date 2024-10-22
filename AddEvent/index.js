var Home = document.querySelector("#container");

var pElement = document.createElement("div");
pElement.textContent = "Hey I'm red";
pElement.style.color = "red";

var hElement = document.createElement("h3");
hElement.style.color = "blue";
hElement.textContent = "i'm blue";

var dElement = document.createElement("div");

var Helement = document.createElement("h1");
Helement.textContent = "i'm in div";

var secPelement = document.createElement("p");
secPelement.innerHTML = "ME TOO";

let trial = function(click){
    let y = keydown.taget;
    if (y == e ){
        return bElement.style.backgroundColor= "yellow";
    }
    else{

        return bElement.style.backgroundColor = "purple"
    }

};


var bElement = document.createElement("button");
bElement.classList.add("btn");
bElement.textContent= "Me Too";
bElement.style.backgroundColor = "skyblue";
bElement.addEventListener("keydown" ,trial)





Home.appendChild(pElement);
Home.appendChild(hElement);
dElement.appendChild(Helement);
dElement.appendChild(secPelement);
Home.appendChild(dElement);
Home.appendChild(bElement);

