function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);

    if (element.value == "Kendra") {
        name1 = document.querySelector("#name1");
        name1.innerText = "Kendra is my favorite!"
    } else if (element.value == "Lisa") {
        name2 = document.querySelector("#name2");
        name2.innerText = "Lisa was my first!"
    } else if (element.value == "Alison") {
        name3 = document.querySelector("#name3");
        name3.innerText = "Alison was an sociopathic bitch!"
    } else if (element.value == "Erin") {
        name4 = document.querySelector("#name4");
        name4.innerText = "Erin was the catalyst for the man I am today!"
    }

    // for(var i=1; i<9; i++) {
    //     var tempSpan = document.querySelector("#temp" + i);
    //     console.log(tempSpan);
    //     var tempVal = parseInt(tempSpan.innerText);
    //     console.log(tempVal)
    //     if(element.value == "°C") {
    //         tempSpan.innerText = f2c(tempVal);
    //     } else {
    //         tempSpan.innerText = c2f(tempVal);
    //     }
    // }
}