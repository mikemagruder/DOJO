var userCard = document.querySelector("#cards");
var h3 = document.querySelector("h3");
var currentUsername = "";

function getUername(element) {
    console.log(element.value);
    currentUsername = element.value;
}

function makeCoderCard(data) {
    h3.remove();
    var res =   `<div class="card">
                    <img src="${data.avatar_url} alt="${data.login}" />
                    <div>
                    <h3>Login/Name: ${data.login} - ${data.name}</h3>
                    <p>Repos URL: ${data.repos_url}</p>
                    <p>URL: ${data.url}</p>
                    </div>
                </div>`;  
    return res;
    // var userCard = document.querySelector("#cards")
    // userCard.innerText = res;
}

async function search() {
    var response = await fetch("https://api.github.com/users/" + currentUsername);
    var coderData = await response.json();
    console.log(coderData);
    userCard.innerHTML = makeCoderCard(coderData) + userCard.innerHTML;

    // var msg = document.querySelector("h3");
    // msg.innerText = "You just made your first Fetch call!";
}