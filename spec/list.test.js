const List = require('../src/list');

describe('List', () => {
  const list = new List();

  it('returns the array of notes', () => {
    expect(list.notes()).toEqual([]);
  });

  pending('adds a new note', () => {
    list.new('New note');
    expect().toBe();
  });
});
