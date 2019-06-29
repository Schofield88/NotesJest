class NoteModel {
  constructor(note) {
    this.text = note;
  }

  read() {
    return this.text;
  }
}

module.exports = NoteModel;
