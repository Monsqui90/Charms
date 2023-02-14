let myList = ["No lo se",
				"No tienes suerte",
				"Hoy no trabajo",
				"Mañana te atropellan",
				"Tendras un gran día",
				"Ganaras la lotería"
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






































