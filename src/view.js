function View(list) {
  const listModel = list;

  function format() {
    const arrayOfNotes = listModel.notes();
    if (arrayOfNotes.length === 0) {
      return '<ul><li></li></ul>';
    }
    const listTags = arrayOfNotes.map(note => `<li>${note}</li>`);
    return `<ul>${listTags.reduce((one, next) => one + next)}</ul>`;
  }

  return Object.freeze({
    format,
  });
}

module.exports = View;
