const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");
inputField = document.querySelector("input");
refreshBtn = document.querySelector(".refresh-word");
checkBtn = document.querySelector(".check-word");

let correctWord;

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random object from words 
    let wordArray = randomObj.word.split(""); //Splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); //getting random number
        //shuffling and swiping wordArray letters randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerHTML = wordArray.join(""); //passing shuffled word as word text
    hintText.innerHTML = randomObj.hint; //passing random object hint as hint text

    correctWord = randomObj.word.toLowerCase(); //passing random word to correct word
    inputField.value = ""; //making input field empty
    inputField.setAttribute("maxlength", correctWord.length);
    //setting input maxlength attr value to word length

    console.log(randomObj);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();// getting user value
    if(!userWord) return alert("Please enter a word check"); //if user didn't enter anything

    //if user doesn't matched with the correct word
    if (userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`);

    //if above two if conditions are failed then show congrats
    alert(`Congrats! ${userWord.toUpperCase()} is a correct word`);
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);