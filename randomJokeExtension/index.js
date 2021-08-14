const generateBtn = document.getElementById("generateButton");
const showJokePunchlineContainer = document.getElementById("showJokePunchlineContainer");

const spinner = document.getElementById("spinner");

const url = "https://official-joke-api.appspot.com/random_joke";

const options = {
    "method": "GET"
};

let generateJokeAndPunchline = (setup, punchline) => {

    let showJoke = document.createElement("p");
    showJoke.textContent = setup;
    showJokePunchlineContainer.appendChild(showJoke);

    let showPunchline = document.createElement("p");
    showPunchline.textContent = punchline;
    showJokePunchlineContainer.appendChild(showPunchline);
};

generateBtn.onclick = function() {
    showJokePunchlineContainer.textContent = "";
    spinner.classList.toggle("d-none");
    showJokePunchlineContainer.classList.remove("showJokePunchlineContainer");

    fetch(url, options)
    .then(response => response.json())
    .then(jsonData => {
            let {setup, punchline} = jsonData;
            generateJokeAndPunchline(setup, punchline);
            spinner.classList.toggle("d-none");
            showJokePunchlineContainer.classList.add("showJokePunchlineContainer");
        })
}

