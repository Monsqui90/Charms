let myList = ["Solo no puedes, con amigos sí.",
				"Tienes 15 segundos para imaginar. Sí no se te ha ocurrido nada, a lo mejor deberías ver menos la tele.",
				"Nunca darse por vencido y la buena suerte le seguirá",
				"Recuerda la suerte que tienes de seguir vivo",
				"Nunca dejes de buscar",
				"La buena suerte no es casual, es producto del trabajo duro"
]

let button = document.getElementsByTagName("button")[0]

function getRandomnum(max){
	return Math.floor(Math.random()*max) + 1
}

button.addEventListener("click", function() {

let randNum = getRandomnum(6)

if(randNum === 1){
	document.getElementById("first").innerHTML = (myList[0])
} else if(randNum === 2){
	document.getElementById("first").innerHTML = (myList[1])
} else if(randNum === 3){
	document.getElementById("first").innerHTML = (myList[2])
} else if(randNum === 4){
	document.getElementById("first").innerHTML = (myList[3])
} else if(randNum === 5){
	document.getElementById("first").innerHTML = (myList[4])
} else if(randNum === 6){
	document.getElementById("first").innerHTML = (myList[5])
}

})






































