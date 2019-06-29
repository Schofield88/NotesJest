function Note(note) {
  const text = note;

  function read() {
    return text;
  }

  return Object.freeze({
    read,
  });
}

module.exports = Note;
