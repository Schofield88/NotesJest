const List = require('../src/list');

const mockNote = jest.fn().mockName('Note');


describe('List', () => {
  const list = new List(mockNote);

  it('returns the array of notes', () => {
    expect(list.notes()).toEqual([]);
  });

  it('adds a new note', () => {
    list.create('New note');
    expect(mockNote).toHaveBeenCalledWith('New note');
  });
});
