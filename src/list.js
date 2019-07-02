function List(noteModel) {
  const notesArray = [];
  const NoteModel = noteModel;

  function notes() {
    return notesArray;
  }

  function create(text) {
    const newNote = new NoteModel(text);
    notesArray.push(newNote);
  }

  return Object.freeze({
    notes,
    create,
  });
}

module.exports = List;
