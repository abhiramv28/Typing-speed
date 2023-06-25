const sentences = [
    "Life's but a walking shadow, a poor player, that struts and frets his hour upon the stage, and then is heard no more; it is a tale told by an idiot, full of sound and fury, signifying nothing.",
    " Musk is a famous workaholic who, in a 2021 interview, said that the majority of his working time was spent developing the technology.",
    "Martin Scorsese is an American filmmaker known for his harsh, often violent depictions of American culture. From the 1970s Scorsese created an ambitious body of work that made him one of the most important filmmakers.",
    "All the world's a stage, and all the men and women merely players. They have their exits and their entrances; and one man in his time plays many parts.",
    "The US dominates the air with far more bases, fighter jets and bombers than Russia but Russia is superior on the ground with more tanks, artillery and land vehicles.",
];
const msg = document.getElementById('msg');
const typedWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;
const playGame = () => {
	let randomNumber = Math.floor(Math.random() * sentences.length);
	msg.innerText = sentences[randomNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Done";
}
const endGame = () => {
	let date = new Date();
	endTime = date.getTime();
	let totalTime = 0,
		wordCount = 0;
	totalTime = Math.round((endTime - startTime) / 1000) 
	console.log(totalTime);

	let totalStr = typedWords.value;
	wordCount = wordCounter(totalStr);

	let finalMsg = `You Typed Total ${wordCount} words in ${totalTime} seconds. `;
	msg.innerText = finalMsg;
}
const wordCounter = (str) => {
	let response = str.split(" ").length;
	console.log(response);
	return response;
}
btn.addEventListener('click', function() {
	console.log(this); 
	if (this.innerText == 'Start') {
		typedWords.disabled = false;
		playGame();
	} else if (this.innerText == "Done") {
		typedWords.disabled = true;
		btn.innerText = "Start";
		endGame();
	}
})
