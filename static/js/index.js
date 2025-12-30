// Keyboard Highlighting + Detection
document.addEventListener("keydown", function(event) {
	keycheck(event.key);
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
});
