document.addEventListener("keydown", function(event) {
    const key = event.key.toLowerCase(); // il tasto premuto
    const tasti = document.querySelectorAll(".keyboard-key p"); // tutti i <p>

    tasti.forEach(tasto => {
        if (tasto.textContent.toLowerCase() === key) {
            const parent = tasto.parentElement;
            parent.style.backgroundColor = "#b294bb";
            
            // torna al colore originale dopo 200ms
            setTimeout(() => {
                parent.style.backgroundColor = "#373b41";
            }, 200);
        }
    });
});



const select = document.querySelector("#Theme");
select.addEventListener("change", () => {
  console.log("Hai switchato tema: ",select.value);
  if (select.value == "Light") {
	  document.body.style.backgroundColor = "#ffffff";
	  document.body.style.color = "#000000";
  }
  else {document.body.style.backgroundColor = "#000000";
	document.body.style.color = "#ffffff"; 
  }
});

