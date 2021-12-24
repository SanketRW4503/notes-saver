

let note = document.getElementById('note');
let addNote = document.getElementById('btnADD');
let title = document.getElementById('title');
shownote();
addNote.addEventListener('click', function addnote() {

    if (title.value == "") {
        alert("Title is Empty !");
    } else if (note.value == "") {
        alert("Note is Empty !")
    } else {
        notes = localStorage.getItem('notes');

        if (notes == null) {
            notesOBJ = [];
        } else {
            notesOBJ = JSON.parse(notes);
        }

        let myOBJ = {
            name: title.value,
            text: note.value
        }

        notesOBJ.push(myOBJ);
        localStorage.setItem('notes', JSON.stringify(notesOBJ));
        alert("Note Added Successfully !");
        shownote();
    }
});


function shownote() {
    notes = localStorage.getItem('notes');

    if (notes == null) {
        notesOBJ = [];
    } else {
        notesOBJ = JSON.parse(notes);

    }

    let html = "";

    notesOBJ.forEach(function (element, index) {

        html += "<div class='divNote'><h2>" + element.name + "</h2><p class='note-para'>" + element.text + "</p></br><button id=" + index + " onclick='deletefun(this.id);' class='dltclass' >Delete</button></div>";
    });

    if (notesOBJ.length != 0) {
        document.getElementById('show-notes').innerHTML = html;

    } else {
        document.getElementById('show-notes').innerHTML = "<small>Nothing to show</small>";

    }
}

function deletefun(index) {

    let deletevar = confirm("Are You Sure ? You Want To DELETE This Note ?");
    if (deletevar == true) {
        notes = localStorage.getItem('notes');

        if (notes == null) {
            notesOBJ = [];
        } else {
            notesOBJ = JSON.parse(notes);

        }
        notesOBJ.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notesOBJ));
        shownote();
    } else {
        shownote();
    }
}


