const List = require('../src/list');

const mockNote = jest.fn().mockName('Note');

describe('List', () => {
  const list = new List(mockNote);

  it('returns the array of notes', () => {
    expect(list.notes()).toEqual([]);
  });

  it('adds a new note', () => {
    list.create('New note');
    expect(mockNote.mock.calls[0][0]).toBe('New note');
  });
});
