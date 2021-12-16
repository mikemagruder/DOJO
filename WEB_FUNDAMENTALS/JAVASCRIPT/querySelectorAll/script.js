var pTags = document.querySelectorAll(".text")

function getColor(element) {
    // console.log(element)
    // pTags.style.color = element.value;
    console.log(pTags)
    for (i = 0; i < pTags.length; i++) {
        if (i%2 == 0){
            pTags[i].style.color = element.value;
            console.log(i)
        }
    }
}


var colors = document.querySelectorAll(".color");
    
function applyColors(){
    for(var i=0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}
