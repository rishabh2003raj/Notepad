// Function to save the note to local storage
function saveNote() {
    const noteContent = document.getElementById('noteContent').value;
    localStorage.setItem('savedNote', noteContent);
}

// Function to delete the note from local storage
function deleteNote() {
    localStorage.removeItem('savedNote');
    document.getElementById('noteContent').value = '';
}

// Load the saved note on page load
window.onload = function () {
    const savedNote = localStorage.getItem('savedNote');
    if (savedNote) {
        document.getElementById('noteContent').value = savedNote;
    }
};