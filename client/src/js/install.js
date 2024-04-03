const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button
    butInstall.classList.toggle('hidden', false);
});

// Logic for when the install button is clicked
butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if(!promptEvent){
        return;
    }

    // Shows prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// Logic for when app is installed
window.addEventListener('appinstalled', (event) => {
    //clear prompt
    window.deferredPrompt = null;
});
