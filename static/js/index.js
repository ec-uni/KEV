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
    const dati = document.querySelectorAll(".keyboard-key p");
	keycheck(event.code);
    dati.forEach(tasto => {
        if (tasto.dataset.code === event.code) {
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

function setlayout(layer)
{
	for (let i=0; i<59; i++)
	{
		document.querySelector(`#Key${i+1}`).textContent = layouts[layer][i];	
	}
}



