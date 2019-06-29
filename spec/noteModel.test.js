const noteModel = require('../src/noteModel');

describe('noteModel', () => {
  it("Returns 'My favourite language is JavaScript' for read method", () => {
    const note = new noteModel('My favourite language is JavaScript');
    expect(note.read()).toBe('My favourite language is JavaScript');
  });
});
