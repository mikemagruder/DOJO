////////////////////////////////////////
//BUTTON CHANGE
///////////////////////////////////////
var count = 1;
var countElement = document.querySelector("#count");

// console.log(countElement)

function add() {
    count++;
    countElement.innerText = "The count is " +count;
    // console.log(count);
}

function subtract() {
    count--;
    countElement.innerText = "The count is " +count;
    // console.log(count);
}

///////////////////////////////////////
//DOG VS CAT
///////////////////////////////////////
var animalImg = document.querySelector("#fav-animal");

function pickDog(element) {
    // element.style.backgroundColor = "aquamarine";
    element.classList.add('btn');
    animalImg.src = "images/img_cute_dog.png";
}

function pickCat(element) {
    element.style.backgroundColor = "goldenrod";
    animalImg.src = "images/img_cute_cat.jpeg";
}