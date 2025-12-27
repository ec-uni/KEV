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

