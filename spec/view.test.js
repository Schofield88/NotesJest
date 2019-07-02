const View = require('../src/view');

describe('View', () => {
  const listMock = {
    notes: () => ['Some text', 'Some more text', 'Yet even more text'],
  };

  const view = new View(listMock);

  it('returns a string of HTML from the List object', () => {
    const html = '<ul><li>Some text</li><li>Some more text</li><li>Yet even more text</li></ul>';

    expect(view.format()).toEqual(html);
  });
});
