const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span");
refreshBtn = document.querySelector(".refresh-word");


const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)]; //getting random object from words 
    let wordArray = randomObj.word.split(""); //Splitting each letter of random word
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random()* (i + 1)); //getting random number
        //shuffling and swiping wordArray letters randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerHTML = wordArray.join(""); //passing shuffled word as word text
    hintText.innerHTML = randomObj.hint; //passing random object hint as hint text
    console.log(randomObj);
}
initGame();

refreshBtn.addEventListener("click", initGame);