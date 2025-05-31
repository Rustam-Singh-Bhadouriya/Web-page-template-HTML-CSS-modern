document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('download-btn').addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default link behavior

        // Create a new Blob object with the content of the file
        const fileContent = "Welcome to Final Strike! Download the launcher to get started.";
        const blob = new Blob([fileContent], { type: 'text/plain' });

        // Create a link element
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'launcher_instructions.txt';  // Set the file name

        // Programmatically click the link to trigger the download
        link.click();

        // Clean up by revoking the object URL
        URL.revokeObjectURL(link.href);
    });
});
