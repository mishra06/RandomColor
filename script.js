let colorCOntainerParent = document.getElementById("colorContainer");

for(let i=0;i<32;i++){
    let colorContainer = document.createElement("div");

    colorContainer.classList.add("color-container");
    colorCOntainerParent.appendChild(colorContainer);
}

let allDivs = document.querySelectorAll(".color-container");

allDivs.forEach((div) =>{
    let newColor = randomColor();
    div.style.backgroundColor = newColor;
    div.innerText = newColor;

})

function randomColor(){
    let str = "0123456789abcdef";
    let colorStr = "#";
    for(let i = 0;i<6;i++){
        let randomIndex = Math.floor(Math.random() * str.length);

        colorStr += str[randomIndex];
    }
    return colorStr;
    
}
randomColor();