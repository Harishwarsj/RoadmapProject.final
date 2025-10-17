const consentPopup = document.getElementById('cookieConsent');
const acceptBtn = document.getElementById('acceptBtn');

// Check if consent already given
if (!localStorage.getItem('cookieConsent')) {
    consentPopup.style.display = 'flex'; // Show the popup
}

// When user clicks "Accept"
acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'true'); // Save consent
    consentPopup.style.display = 'none'; // Hide popup
});