const Note = require('../src/note');

describe('Note', () => {
  it("Returns 'My favourite language is JavaScript' for read method", () => {
    const note = new Note('My favourite language is JavaScript');
    expect(note.read()).toBe('My favourite language is JavaScript');
  });
});
