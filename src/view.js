function View(list) {
  const listModel = list;

  function format() {
    const arrayOfNotes = listModel.notes();
    const listTags = arrayOfNotes.map(note => `<li>${note}</li>`);
    return `<ul>${listTags.reduce((one, next) => one + next)}</ul>`;
  }

  return Object.freeze({
    format,
  });
}

module.exports = View;
