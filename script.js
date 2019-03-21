
	document.getElementById("title").style.color = "green";

//Welcome event
	function showPersonalInfo()
		{
		let name = document.createElement("span");
		name.style.color = "Black";
		name.style.fontSize = "100px";
		name.innerHTML = "Welcome!!!";
		document.querySelector("#displayName").appendChild(name);
	}


	

//Change button look 
function changeButton(){
	      let changeBtnTxt = document.querySelector(".changeBtn");
	      changeBtnTxt.style.color = 'white';
	      changeBtnTxt.style.backgroundColor = 'black';
	      changeBtnTxt.style.padding = '10px';
	      changeBtnTxt.style.width = '350px';
	      changeBtnTxt.innerHTML = 'New Button Look';
	      changeBtnTxt.style.textAlign = 'center';
	    }

//Display my info detail
	window.onload = function() {
	  document.getElementById('showInfo').style.display = 'none';
	};
	  function showText() {
	    var x = document.getElementById("showInfo");
	    if (x.style.display === "none") {
	      x.style.display = "block";
	    } else {
	      x.style.display = "none";
	    }
	  }

	    



	document.querySelector('.cock').addEventListener('mouseover', playSound);
	function playSound(){
	let sound = new Audio(); 
	sound.src= "./Rooster-crowing.mp3";
	sound.play();
	}

	document.querySelector('.cat').addEventListener('mouseover', playSound1);
	function playSound1(){

	let sound = new Audio("./Cat-meow.mp3"); 
	sound.play();
	}
//Change button using onmouseover event
function biggerImg(x) {
	  x.style.height = "250px";
	  x.style.width = "250px";
	}

	function normalImg(x) {
	  x.style.height = "150px";
	  x.style.width = "150px";
	}

// Simple calculator

	let resultCal;
	function add(){
		let inputFirst = parseFloat(document.getElementById('input1').value);
		let inputSecond = parseFloat(document.getElementById('input2').value);
		resultCal = (inputFirst + inputSecond).toFixed(2);
		return result(); 
	}
	function subtract(){
		let inputFirst = parseFloat(document.getElementById('input1').value);
		let inputSecond = parseFloat(document.getElementById('input2').value);
		resultCal = (inputFirst - inputSecond).toFixed(2);
		return result(); 
	}

	function multiply(){
		let inputFirst = parseFloat(document.getElementById('input1').value);
		let inputSecond = parseFloat(document.getElementById('input2').value);
		resultCal = (inputFirst * inputSecond).toFixed(2);
		return result(); 
	}

	function division(){
		let inputFirst = parseFloat(document.getElementById('input1').value);
		let inputSecond = parseFloat(document.getElementById('input2').value);
		resultCal = (inputFirst / inputSecond).toFixed(2);
		return result(); 
	}

	function result(){
		let finalResult = document.getElementById('showResult').innerHTML = resultCal;
	}

// Dice game 

	let imageArray = ["dice1.png", "dice2.png","dice3.png","dice4.png","dice5.png", "dice6.png"];
			
			// let imageArray = [[1, "dice1.png"], 
			// 				  [2, "dice2.png"],
			// 				  [3, "dice3.png"],
			// 				  [4, "dice4.png"], 
			// 				  [5, "dice5.png"],
			// 				  [6, "dice6.png"]];
			// let imageArr = [];

			// for(let i = 0; i<imageArray.length; i++){
			// 	imageArr.push(imageArray[i][1]);
			// 	// console.log("test" + imageArr);
				
			// }

		let getImage1 = imageArray[Math.floor(Math.random()*imageArray.length)];

		// let imgPath = "./images/";
		
		function getRandom(){
		  do{
				var getImage2 = imageArray[Math.floor(Math.random()*imageArray.length)];
			}
			while(getImage1 == getImage2)
			console.log("getImage2 : "+getImage2);

			compareResult(imageArray.indexOf(getImage2));
			return getImage2;
		}

		document.querySelector('.image1').src = getImage1;
		document.querySelector('.image2').src = getRandom();

		function compareResult(index2){

				let index1 = imageArray.indexOf(getImage1);


				if(index1>index2){
					document.getElementById("headLine").innerHTML = "Player 1 Won !!!!";
				}else{
					document.getElementById("headLine").innerHTML = "Player 2 Won !!!!";
				}
				
			}