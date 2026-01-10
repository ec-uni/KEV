export const layoutNames = ["QWERTY", "Colemak", "QWERTZ", "Workman", "Dvorak", "AZERTY", "QZERTY"];

export const LayoutResults = {};

layoutNames.forEach(name => {
	    LayoutResults[name] = {
		    	    totalKeyPress: 0,
		            homeRowUsage: 0,
		            rightHandUsage: 0,
		            leftHandUsage: 0,
		            travelDistance: 0
		        };
});
window.lr = LayoutResults;
console.log(LayoutResults);

const dati = document.querySelectorAll(".keyboard-key p");
const datihomerow = document.querySelectorAll('.keyboard-key p[data-row="home"]');
const datirighthand = document.querySelectorAll('.keyboard-key p[data-hand="right"]');
const datilefthand = document.querySelectorAll('.keyboard-key p[data-hand="left"]');


export const ignoredCodes = [
        "ShiftLeft", "ShiftRight",
        "ControlLeft", "ControlRight",
        "AltLeft", "AltRight",
        "AltGraph",
        "MetaLeft", "MetaRight",
        "CapsLock", "Fn", "Escape","undefined"
    ];


export const keyboard_layouts = {
    [layoutNames[0]]: [
        "Escape","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
        "Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\",
        "CapsLock","a","s","d","f","g","h","j","k","l","ò","'","Enter",
        "Shift","z","x","c","v","b","n","m",",",".","_",
	"ControlLeft","MetaLeft","AltLeft"," ","AltRight","Fn","ControlRight"
    ],

    [layoutNames[1]]: [
        "Escape","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
        "Tab","q","w","f","p","g","j","l","u","y",";","[","]","\\",
        "CapsLock","a","r","s","t","d","h","n","e","i","o","'","Enter",
        "Shift","z","x","c","v","b","k","m",",",".","/",
	"ControlLeft","MetaLeft","AltLeft"," ","AltRight","Fn","ControlRight"
    ],

    [layoutNames[2]]: [
        "Escape","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
        "Tab","q","w","e","r","t","z","u","i","o","p","[","]","\\",
        "CapsLock","a","s","d","f","g","h","j","k","l","-","'","Enter",
        "Shift","y","x","c","v","b","n","m","ü","+","#",
	"ControlLeft","MetaLeft","AltLeft"," ","AltRight","Fn","ControlRight"
    ],
    [layoutNames[3]]: [
        "Escape","1","2","3","4","5","6","7","8","9","0","-","=","Backspace",
        "Tab","q","d","r","w","b","j","f","u","p",";","[","]","\\",
        "CapsLock","a","s","h","t","g","y","n","e","o","i","'","Enter",
        "Shift","z","x","m","c","v","k","l",",",".","/",
	"ControlLeft","MetaLeft","AltLeft"," ","AltRight","Fn","ControlRight"
             ],

    [layoutNames[4]]: [
        "Escape","1","2","3","4","5","6","7","8","9","0","[","]","Backspace",
        "Tab","' ",",",".","p","y","f","g","c","r","l","/","=","\\",
        "CapsLock","a","o","e","u","i","d","h","t","n","s","-","Enter",
        "Shift",";","q","j","k","x","b","m","w","v","z",
	"ControlLeft","MetaLeft","AltLeft"," ","AltRight","Fn","ControlRight"
            ],
    [layoutNames[5]]: [
	 "Escape","&","é","\"","'","(","-","è","_","ç","à",")","=","Backspace",
         "Tab","a","z","e","r","t","y","u","i","o","p","^","$","\\",
         "CapsLock","q","s","d","f","g","h","j","k","l","m","ù","Enter",
	 "ShiftLeft","<","w","x","c","v","b","n",",",";","!",
	 "ControlLeft","MetaLeft","AltLeft"," ","AltRight","Fn","ControlRight"
	],
    [layoutNames[6]]: [
	 "Escape","1","2","3","4","5","6","7","8","9","0","'","ì","Backspace",
	 "Tab","q","z","e","r","t","y","u","i","o","p","è","+","\\",
	 "CapsLock","a","s","d","f","g","h","j","k","l","ò","à","Enter",
	 "ShiftLeft","<","w","x","c","v","b","n","m",",",".",
	 "ControlLeft","MetaLeft","AltLeft"," ","AltRight","Fn","ControlRight"
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

export const KeyScore = {
	    Escape: 5,
	    Digit1: 4, Digit2: 3.5, Digit3: 3, Digit4: 2.5, Digit5: 2.5, 
	    Digit6: 2.5, Digit7: 2.5, Digit8: 3, Digit9: 3.5, Digit0: 4,
	    Minus: 4, Equal: 4, Backspace: 5,
	    Tab: 4,
	    KeyQ: 1, KeyW: 1, KeyE: 1, KeyR: 1, KeyT: 1,
	    KeyY: 1, KeyU: 1, KeyI: 1, KeyO: 1, KeyP: 1,
	    BracketLeft: 2, BracketRight: 2, Backslash: 3,
	    CapsLock: 5,
	    KeyA: 1, KeyS: 1, KeyD: 1, KeyF: 1, KeyG: 1.5,
	    KeyH: 1.5, KeyJ: 1, KeyK: 1, KeyL: 1, Semicolon: 2, Quote: 3, Enter: 3.5,
	    ShiftLeft: 5, ShiftRight: 5,
	    KeyZ: 1, KeyX: 1, KeyC: 1, KeyV: 1, KeyB: 2,
	    KeyN: 2, KeyM: 2, Comma: 2, Period: 2, Slash: 2,
	    ControlLeft: 5, MetaLeft: 4, AltLeft: 3, Space: 1, AltRight: 3, Fn: 3, ControlRight: 5
};



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


function getKeyScore(code)
{
	return KeyScore[code] || 0;
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
export function RetrieveTotalKeyPresses()
{
    let sum = 0;
    dati.forEach(tasto => {
    	   let count = Number(tasto.parentElement.dataset.pressCount || 0);
	   sum += count; 
    });
	console.log("sum: "+sum);
	return sum;
}
export function RetrieveHomeRowPresses()
{
	let sum = 0;
	datihomerow.forEach(tasto => {
		let count = Number(tasto.parentElement.dataset.pressCount || 0);
		sum += count;
	});
	console.log("sum home: "+sum);
	return sum;
}

export function RetrieveHandUsage() {
	    let sumRight = 0, sumLeft = 0;

	    datirighthand.forEach(tasto => {
		            let count = Number(tasto.parentElement.dataset.pressCount || 0);
		            sumRight += count;
		        });

	    datilefthand.forEach(tasto => {
		            let count = Number(tasto.parentElement.dataset.pressCount || 0);
		            sumLeft += count;
		        });

	     const space = document.querySelector('[data-code="Space"]');
	         if(space) {
	                 let count = Number(space.parentElement.dataset.pressCount || 0);
	                 sumLeft += count / 2;
	                sumRight += count / 2;
                    }

             return { left: sumLeft, right: sumRight };
                        }
	


export function RetrieveTravelDistance()
{
	let sum = 0;
    	dati.forEach(tasto => {
    	   	let count = Number(tasto.parentElement.dataset.pressCount || 0);
	   	sum += count * getKeyScore(tasto.dataset.code); 
    	});
	return sum;
}


export function RotateKeyboardLayout(){
		    const layoutSelect = document.getElementById("Keyboard-Layout");
		    const options = Array.from(layoutSelect.options);
		    const currentIndex = layoutSelect.selectedIndex;
		    const nextIndex = (currentIndex + 1) % options.length;
		    layoutSelect.selectedIndex = nextIndex;
		    layoutSelect.dispatchEvent(new Event('change'));
}


export function sleep(ms) {
		    return new Promise(resolve => setTimeout(resolve, ms));
}

