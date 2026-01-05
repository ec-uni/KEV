import * as ext from "./lib.js";


let maxPresses = 0;
const dati = document.querySelectorAll(".keyboard-key p");

document.addEventListener("keydown",HandleKey);
document.addEventListener("keyup",HandleKey);
document.getElementById("Keyboard-Layout").addEventListener("change", e => UpdateViewKeys({ type: "layoutChange", value: e.target.value }));
document.getElementById("Theme").addEventListener("change", e => UpdateViewKeys({type:"themeselection",value: e.target.value}));

let shiftPressed = false, capsLockActive = false;

function HandleKey(e)
{
	UpdateViewKeys(e);
	HandleCapModifiers(e);
	if(e.type === "keydown")
	{
		KeyOverride(e);
		HeatMap(e);
	}
}

function HandleCapModifiers(e)
{
	if(e.type === "keydown")
	{
		if(e.code === "ShiftLeft" || e.code === "ShiftRight")
		{	shiftPressed = true;}
	
		if(e.code === "CapsLock")
		{
			capsLockActive = !capsLockActive;
		}
	}
	else if(e.type === "keyup")
	{
		if(e.code === "ShiftLeft" || e.code === "ShiftRight")
			{shiftPressed = false;}
	}
}

function UpdateViewKeys(e) {
    if(e.type === "keydown")
	{
	if(!e.repeat)
		{
		if (    e.code === "ShiftLeft" ||
        		e.code === "ShiftRight" ||
        		e.code === "CapsLock")
			{
   	        	ext.casepress(dati);
			}
	
    		ext.changekeycolor(e.code);
		}
	}

    else if (e.type === "keyup")
	{
	if(!e.repeat && (e.code === "ShiftLeft" || e.code === "ShiftRight")) 
		{
			ext.casepress(dati);
		}

	}

   if(e.type === "layoutChange")
		ext.setlayout(e.value);
   
   /*if(e.type === "themeselection")
	ext.themechange(e.value);*/	

}

// This is where key event gets override and the text area or whatever receives output as if you're using another layout.
// Keep in mind that the override works just in the website itself... so we limit the typing to one single textarea

function KeyOverride(e) {
    const battlefield = document.querySelector("#battlefield");
    if (document.activeElement !== battlefield) return;

    e.preventDefault(); 

    console.log("You're writing in the text area.");
    console.log(e.code);
    
    if (e.code === "Backspace") {
        battlefield.value = battlefield.value.slice(0, -1);
    } else if(e.code === "Space"){
	battlefield.value += " ";	
    } else if (e.code === "Enter") {
        battlefield.value += "\n";
    } else if (e.code === "Tab") {
        battlefield.value += "\t";
    } else if (!ext.ignoredCodes.includes(e.code) && ext.getKey(e.code) !== undefined) {
	let res = ext.getKey(e.code);	
	    if(res.length === 1 && res.match(/[a-z]/i)){
			const upper = shiftPressed !== capsLockActive; 
			res = upper ? res.toUpperCase() : res.toLowerCase();
        		battlefield.value += res; 
	    }
	    else
	    {
		    battlefield.value += res;
	    }
    }
    battlefield.scrollTop = battlefield.scrollHeight;
}

function HeatMap(e) {
    const key = document.querySelector(
        `.keyboard-key p[data-code="${e.code}"]`
    );
    if (!key) return;

    const parent = key.parentElement;

    // contatore
    let count = parseInt(parent.dataset.pressCount) || 0;
    count++;
    parent.dataset.pressCount = count;

    // aggiorna massimo globale
    if (count > maxPresses) {
        maxPresses = count;
    }  
    console.log("sium:" + maxPresses);
    console.log(count);
    
    ext.UpdateKeyColors(maxPresses);
}

