
    // Function to add the disable-pointer-events class to the link after it's clicked
    function disableLink(event) {
        event.target.classList.add('disable-pointer-events');
        setTimeout(function() {
            event.target.classList.remove('disable-pointer-events');
        }, 5000); // Adjust the delay (in milliseconds) as needed
    }
