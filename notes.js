console.log("Notes.js Started");

var addNote = (title, body) => {
    console.log("Adding Note", title, body);
};

var getAll = () =>{
    console.log("Getting all notes");
};

var getNote = (title) =>{
    console.log("Reading Note", title);
};

var removeNote = (title) => {
    console.log("Removing Note", title);
};

module.exports = {
    addNote, //or write as variable: function like addNote: addNote
    getAll,
    getNote,
    removeNote
}; 