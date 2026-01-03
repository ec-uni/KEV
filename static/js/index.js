
/*
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
*/

document.addEventListener("keydown", function(event) {
    const battlefield = document.querySelector("#battlefield");
    const dati = document.querySelectorAll(".keyboard-key p");
	keycheck(event.code);
    dati.forEach(tasto => {
        if (tasto.dataset.code === event.code) {
       
		key = getKey(event.code);
		console.log(key);
		if(key.length === 1 || key === " ")
		{
			battlefield.value += key;
		}
		if(key === "Backspace")
		{
			battlefield.value = battlefield.value.slice(0,-1);
		}

        	let count = parseInt(tasto.parentElement.dataset.pressCount) || 0;
	    tasto.parentElement.dataset.pressCount = count + 1;

		let intensity= Math.min((count + 1) * 3,255);
		tasto.parentElement.style.backgroundColor = `rgb(${intensity},50,150)`;
		

	    changekeycolor(tasto.parentElement);
            // gestisci maiuscole
            if(event.code === "ShiftLeft" || event.code === "ShiftRight" || event.code === "CapsLock") {
                casepress(dati);
            }
        }
    });
});

document.addEventListener("keyup", function(event) {
    const dati = document.querySelectorAll(".keyboard-key p");
    if(event.code === "ShiftLeft" || event.code === "ShiftRight") {
        casepress(dati);
    }
});


document.getElementById("wipetext").addEventListener("click", wipepress);

function wipepress(){		
	const battlefield = document.querySelector("#battlefield");
	battlefield.value = "";


}



document.getElementById("benchmark").addEventListener("click", ButtonPressed);

function ButtonPressed() {
    const filedom = document.getElementById("inputfile");
    const file = filedom.files[0];
    
    if (!file) {
        alert("If you don't give a file it won't go further.");
        return;
    }
    
    console.log("Elaboro...");
    
    const reader = new FileReader();

    // This runs when the file is successfully read
    reader.onload = function(e) {
        const text = e.target.result;
        console.log("File content:");
	for( let i=0; i<text.length; i++)
	    {
		    console.log("lettera: ",text[i]);
		    // Here is where w simulate the writing phase, in order to obtain our heatmap

	    }
    };

    // This runs if there is an error reading the file
    reader.onerror = function() {
        alert("Error reading file!");
    };

    reader.readAsText(file); // Start reading the file
}


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
	    let color = yourparent.style.backgroundColor;
            yourparent.style.backgroundColor = "#8c9440";
            // torna al colore originale dopo 50ms
            setTimeout(() => {
                yourparent.style.backgroundColor = color;
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
  else {document.body.style.backgroundColor = "#505050";
	document.body.style.color = "#ffffff"; 
  }
});

// Keyboard Layout Selection
const layout_selector = document.querySelector("#Keyboard-Layout"); 
layout_selector.addEventListener("change", () => {
	console.log("Function Keyboard Layout");
  	setlayout(layout_selector.value);	

		
});
//Map comparison of event.key ( positional way, for each id in a incremental way  )
const layouts = {
    QWERTY: [
        // Riga 0
        "Escape","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
        // Riga 1
        "Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\",
        // Riga 2
        "CapsLock","a","s","d","f","g","h","j","k","l","ò","'","Enter",
        // Riga 3
        "Shift","z","x","c","v","b","n","m",",",".","_",
        // Riga 4
        "Control","Meta","Alt"," ","AltGraph","Fn","Control"
    ],

    Colemak: [
        "Escape","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
        "Tab","q","w","f","p","g","j","l","u","y",";","[","]","\\",
        "CapsLock","a","r","s","t","d","h","n","e","i","o","'","Enter",
        "Shift","z","x","c","v","b","k","m",",",".","/",
        "Control","Meta","Alt"," ","AltGraph","Fn","Control"
    ],

    QWERTZ: [
        "Escape","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
        "Tab","q","w","e","r","t","z","u","i","o","p","[","]","\\",
        "CapsLock","a","s","d","f","g","h","j","k","l","-","'","Enter",
        "Shift","y","x","c","v","b","n","m","ü","+","#",
        "Control","Meta","Alt"," ","AltGraph","Fn","Control"
    ]
};


const codes = [
    "Escape",
    "Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0",
    "Minus","Equal","Backspace",
    "Tab",
    "KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP",
    "BracketLeft","BracketRight","Backslash",
    "CapsLock",
    "KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter",
    "ShiftLeft",
    "KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash",
    "ControlLeft","MetaLeft","AltLeft","Space","AltRight","Fn","ControlRight"
];

function setlayout(layer)
{
	for (let i=0; i<59; i++)
	{
		document.querySelector(`#Key${i+1}`).textContent = layouts[layer][i];	
	}
}

function getKey(code)
{
	let res;
	const layer = document.querySelector("#Keyboard-Layout").value; 
	for(let i=0;i<codes.length;i++)
	{
		if(codes[i] == code)
			res = i;		
	}


	return layouts[layer][res];

}


