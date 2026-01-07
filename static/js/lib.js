const dati = document.querySelectorAll(".keyboard-key p");
export const ignoredCodes = [
        "ShiftLeft", "ShiftRight",
        "ControlLeft", "ControlRight",
        "AltLeft", "AltRight",
        "AltGraph",
        "MetaLeft", "MetaRight",
        "CapsLock", "Fn", "Escape","undefined"
    ];


export const keyboard_layouts = {
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


export const KeyCodes = [
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

//This is just visually.
export function setlayout(layer)
{
	for (let i=0; i<59; i++)
	{
		document.querySelector(`#Key${i+1}`).textContent = keyboard_layouts[layer][i];
	}
}

// This returns the key at which you would press if you where in a precise layout with a precise key code (the unique identifier of a key in the keyboard, that is layout-independent)
export function getKey(code)
{
	let res;
	const layer = document.querySelector("#Keyboard-Layout").value; 
	for(let i=0;i<KeyCodes.length;i++)
	{
		if(KeyCodes[i] == code)
			res = i;		
	}

	return keyboard_layouts[layer][res];
}


// This is the opposit situation, considering the current keyboard-layout set by the user, you obtain the exact keycode at which is placed the wrote chara
export function getKeyCode(label)
{
	let res;
        let layout_selector = document.querySelector("#Keyboard-Layout");
	const layout = keyboard_layouts[layout_selector.value];
	for(let i=0; i<layout.length;i++)
	{
            if (layout[i] === label)
             	 {
    	       		 res = KeyCodes[i];
       		     break;
  		 }
	}
	return res;
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

export function casepress(arr)
{
	let size = arr.length;
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


export function changekeycolor(code) {
    const key = document.querySelector(
        `.keyboard-key p[data-code="${code}"]`
    );

    if (!key) return;

    const parent = key.closest(".keyboard-key");
    const originalColor = parent.style.backgroundColor;

    parent.style.backgroundColor = "#8c9440";

    setTimeout(() => {
        parent.style.backgroundColor = originalColor;
    }, 50);
}


const themeCheckbox = document.getElementById("Theme");

themeCheckbox.addEventListener("change", () => {
  if (themeCheckbox.checked) { // checkbox ON

	document.body.style.backgroundColor = "#C5C8C6";
	document.body.style.color = "#ffffff";

	console.log("Darkmode");
  } else { // checkbox OFF

	document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#C5C8C6";

	console.log("Lightmode");
  }
});

/*export function themechange(value)
{
  if (value === "Light") {
	  document.body.style.backgroundColor = "#ffffff";
	  document.body.style.color = "#C5C8C6";
  }
  else {document.body.style.backgroundColor = "#C5C8C6";
	document.body.style.color = "#ffffff"; 
  }


}*/

export function UpdateKeyColors(maxPresses)
{
	dati.forEach(tasto => {
        let count = parseInt(tasto.parentElement.dataset.pressCount) || 0;
        
        let intensity = Math.min((count / maxPresses) * 255, 255);
        
        tasto.parentElement.style.backgroundColor = `rgb(${intensity}, 50, 150)`;
    });

}
	
export function ResetKeyColors()
{
	dati.forEach(tasto => {
        	tasto.parentElement.style.backgroundColor = `rgb(1, 50, 150)`;
   	 });

}

export function resetCountKeysVariables(maxPresses)
{

    dati.forEach(tasto => {
            tasto.parentElement.dataset.pressCount = 0;
   });

}
