// Keyboard Highlighting + Detection
document.addEventListener("keydown", function(event) {
    const key = event.key;//.toLowerCase(); // il tasto premuto
    const tasti = document.querySelectorAll(".keyboard-key p"); // tutti i <p>
	console.log(key);
    tasti.forEach(tasto => {
        if (tasto.textContent /*.toLowerCase()*/ === key	) {
            const parent = tasto.parentElement;
            parent.style.backgroundColor = "#b294bb";
            
            // torna al colore originale dopo 200ms
            setTimeout(() => {
                parent.style.backgroundColor = "#373b41";
            }, 200);
        }
    });
});


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
