
function deleteNote(noteId) {
    fetch('delete-note', {
        method:'POST',
        body:JSON.stringify({noteId:noteId}),
    }).then((resp) => {
        window.location.href = "/";
    });
}