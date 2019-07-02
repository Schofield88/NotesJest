const View = require('../src/view');

describe('View', () => {
  const listMock = {
    notes: () => ['Some text', 'Some more text', 'Yet even more text'],
  };
  const emptyListMock = { notes: () => [''] };
  const view = new View(listMock);
  const anotherView = new View(emptyListMock);

  it('returns a string of HTML from the List object', () => {
    const html = '<ul><li>Some text</li><li>Some more text</li><li>Yet even more text</li></ul>';

    expect(view.format()).toEqual(html);
  });

  it('can handle an empty List', () => {
    const emptyHTML = '<ul><li></li></ul>';
    expect(anotherView.format()).toEqual(emptyHTML);
  });
});
