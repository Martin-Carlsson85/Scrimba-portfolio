// Hämta alla knappar och räknare
const buttons = document.querySelectorAll('button');
const homeCount = document.getElementById('home-count');
const guestCount = document.getElementById('guest-count');
const clearButtons = document.querySelectorAll('.btn-clear');
console.log(buttons)
    
    // Lägg till händelselyssnare för varje knapp
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Hämta värdet från den klickade knappen
            const value = parseInt(button.textContent);
            
            // Kolla vilket avsnitt som knappen tillhör och öka motsvarande räknare
            if (button.parentNode.parentNode.id === 'home') {
                updateCounter(homeCount, value);
            } else if (button.parentNode.parentNode.id === 'guest') {
                updateCounter(guestCount, value);
            }
        });
    });
    
    // Funktion för att öka räknaren baserat på knappens värde
    function updateCounter(counterElement, value) {
        let count = parseInt(counterElement.textContent);
        count += value;
        counterElement.textContent = count;
    }

   // Lägg till händelselyssnare för clear-knapparna
   clearButtons.forEach(clearButton => {
    clearButton.addEventListener('click', function() {
        // Kolla vilket avsnitt clear-knappen tillhör och återställ motsvarande räknare
        if (clearButton.parentNode.parentNode.id === 'home') {
            resetCounter(homeCount);
        } else if (clearButton.parentNode.parentNode.id === 'guest') {
            resetCounter(guestCount);
        }
    });
});

// Funktion för att återställa räknaren till noll
function resetCounter(counterElement) {
    counterElement.textContent = '0';
}