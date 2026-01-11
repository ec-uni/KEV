import * as ext from "./lib.js";


let maxPresses = 0;
const dati = document.querySelectorAll(".keyboard-key p");

document.addEventListener("keydown",HandleKey);
document.addEventListener("keyup",HandleKey);
document.getElementById("Keyboard-Layout").addEventListener("change", e => UpdateViewKeys({ type: "layoutChange", value: e.target.value }));
document.getElementById("Theme").addEventListener("change", e => UpdateViewKeys({type:"themeselection",value: e.target.value}));
document.getElementById("benchmark").addEventListener("click",RunPress);

let shiftPressed = false, capsLockActive = false;

function HandleKey(e)
{
	UpdateViewKeys(e);
	HandleCapModifiers(e);
	if(e.type === "keydown")
	{
		KeyOverride(e);
		Statistics();
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

   if(e.type === "layoutChange"){
		ext.setlayout(e.value);
   }
   
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
		HeatMap(e);
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
    
    ext.UpdateKeyColors(maxPresses);
   ext.LayoutCountings[document.querySelector("#Keyboard-Layout").value][e.code] = count;
}

function clearButton(){
    const textBox = document.getElementById('battlefield');
    const clearbutton = document.getElementById('btn-clear');
    
    clearbutton.addEventListener('click', () => {
    	textBox.value = '';
	textBox.focus();
	HeatMapReset();
	StatsReset();
    })
}

document.addEventListener('DOMContentLoaded', clearButton);

function RunPress()
{
		const filedom = document.getElementById("inputfile");
		const file = filedom.files[0];

		if(!file)
			{
				alert("");
				return;
			}

		const reader = new FileReader();

		reader.onload = function(e)
		{
					const text = e.target.result;
					console.log("File content: ");
				        //HeatMapFromFile(text);	
					HeatMapFromFileall(text);
		}
		

		reader.readAsText(file);
}

function HeatMapFromFile(text)
{
	HeatMapReset();
	StatsReset();
	for (const letter of text)
		{
			let code = ext.getKeyCode(letter.toLowerCase());
			const key = document.querySelector(
       			 `.keyboard-key p[data-code="${code}"]`
    				);
	    		if (!key) continue;

  		 	 const parent = key.parentElement;

	    		// contatore
			    let count = parseInt(parent.dataset.pressCount) || 0;
			    count++;
			    parent.dataset.pressCount = count;
			     
			    ext.LayoutCountings[document.querySelector("#Keyboard-Layout").value][code] = count;
			    
			    // aggiorna massimo globale
			    if (count > maxPresses) {
				maxPresses = count;
			    }  
			

		}
	console.log("ci sei quasi..");
	ext.UpdateKeyColors(maxPresses);
	Statistics();
}

function HeatMapReset()
{
	maxPresses = 0;
	ext.ResetKeyColors();
	ext.resetCountKeysVariables();
}

function StatsReset()
{
	document.getElementById("countTotalChars").textContent = 0;
	document.getElementById("HomeRowUsage").textContent = "Unknown"; 
	document.getElementById("HandBalanceRight").textContent = "Unknown";
	document.getElementById("HandBalanceLeft").textContent = "Unknown"; 
	document.getElementById("travelDistance").textContent = "Unknown"; 

}

function Statistics()
{
	
	let totalkeypress = ext.RetrieveTotalKeyPresses();
	let homerowusage = (ext.RetrieveHomeRowPresses() / totalkeypress * 100).toFixed(2) ;
	const handusage = ext.RetrieveHandUsage();
	let righthandusage = ((handusage.right / totalkeypress) * 100).toFixed(2);
	let lefthandusage = ((handusage.left / totalkeypress) * 100).toFixed(2);
	let travelDistance = ext.RetrieveTravelDistance();
 	let travelDistancemean = (travelDistance/totalkeypress).toFixed(2);	



	const layout = document.querySelector("#Keyboard-Layout").value;	
	ext.LayoutResults[layout].totalKeyPress = totalkeypress; 
	ext.LayoutResults[layout].homeRowUsage = homerowusage; 
	ext.LayoutResults[layout].rightHandUsage = righthandusage; 
	ext.LayoutResults[layout].leftHandUsage = lefthandusage; 
	ext.LayoutResults[layout].travelDistance = travelDistancemean; 
	


	document.getElementById("countTotalChars").textContent = totalkeypress ;
	document.getElementById("HomeRowUsage").textContent = homerowusage +" %";
	document.getElementById("HandBalanceRight").textContent = righthandusage +" %";
	document.getElementById("HandBalanceLeft").textContent = lefthandusage + " %"; 
	document.getElementById("travelDistance").textContent = travelDistancemean;




	console.log(ext.LayoutResults[layout].totalKeyPress); 
	console.log(ext.LayoutResults[layout].homeRowUsage); 
	console.log(ext.LayoutResults[layout].rightHandUsage);
	console.log(ext.LayoutResults[layout].leftHandUsage); 
	console.log(ext.LayoutResults[layout].travelDistance);	

}

async function HeatMapFromFileall(text)
{	
	for(let i = 0; i<ext.layoutNames.length; i++)
	{
		await ext.sleep(2000);
		ext.RotateKeyboardLayout();
		HeatMapReset();
		StatsReset();	
		ext.resetCountKeysVariables(maxPresses);
		HeatMapFromFile(text);
	}

}

