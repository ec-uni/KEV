// Keyboard Highlighting + Detection
document.addEventListener("keydown", function(event) {
	const dati = document.querySelectorAll(".keyboard-key p");
        dati.forEach(tasto => {
        if (tasto.textContent === event.key) {
           changekeycolor(tasto.parentElement); 
  	   if(event.key === "Shift" || event.key === "CapsLock")
	   {
		   casepress(dati);
	   }
  	  
        }
    });
});

document.addEventListener("keyup", function(event) {
	const dati = document.querySelectorAll(".keyboard-key p");
	if(event.key == "Shift")
	{
		casepress(dati);
	}
});



function keycheck(key)
{
	console.log("Key Printed: " + key);

}

function upcase(arr)
{
	arr.forEach(tasto => {
		if(tasto.textContent.length == 1){
			tasto.textContent = tasto.textContent.toUpperCase();
		}

	});
}
function downcase(arr) { arr.forEach(tasto => {
		if(tasto.textContent.length == 1){
			tasto.textContent = tasto.textContent.toLowerCase();
		}

	});
}
function casepress(arr)
{
	size = arr.length;
	for( let i = 0; i< size; i++)
	{
		if(arr[i].textContent === "A"){
			downcase(arr);
			break;
		}
		if(arr[i].textContent === "a"){
			upcase(arr);
			break;
		}
	}

}

function changekeycolor(yourparent)
{
            yourparent.style.backgroundColor = "#b294bb";
            // torna al colore originale dopo 50ms
            setTimeout(() => {
                yourparent.style.backgroundColor = "#373b41";
            }, 50);
}






// Theme Selection
const theme_selection = document.querySelector("#Theme");
theme_selection.addEventListener("change", () => {
  console.log("Hai switchato tema: ",theme_selection.value);
  if (theme_selection.value == "Light") {
	  document.body.style.backgroundColor = "#ffffff";
	  document.body.style.color = "#000000";
  }
  else {document.body.style.backgroundColor = "#000000";
	document.body.style.color = "#ffffff"; 
  }
});

// Keyboard Layout Selection
const layout_selector = document.querySelector("#Keyboard-Layout"); 
layout_selector.addEventListener("change", () => {
	console.log("Function Keyboard Layout");
  	setlayout(layout_selector.value);	

		
});

const layouts = {
	QWERTY: [
		"q","w","e","r","t","y","u","i","o","p",
		"a","s","d","f","g","h","j","k","l","-",
		"z","x","c","v","b","n","m","è","+","ù",
		"à",",",".","-"
	],

	Colemak: [
		"q","w","f","p","g","j","l","u","y",";",
		"a","r","s","t","d","h","n","e","i","o",
		"z","x","c","v","b","k","m","[","]","/",
		"'",",",".","/"
	],

	QWERTZ: [
		"q","w","e","r","t","z","u","i","o","p",
		"a","s","d","f","g","h","j","k","l","-",
		"y","x","c","v","b","n","m","ü","+","#",
		"ä",",",".","-"
	]
};

function setlayout(layer)
{
	for (let i=0; i<34; i++)
	{
		document.querySelector(`#Key${i+1}`).textContent = layouts[layer][i];	
	}
}

