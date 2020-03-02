import markdowCompile from './markdown-compiler';

const headerTestTable = [
  ['#', '#level1\r\n#level1', '<h1>level1</h1>\r\n<h1>level1</h1>'],
  ['##', '## level2\r\n ##level2', '<h2> level2</h2>\r\n <h2>level2</h2>'],
  ['###', '###level3', '<h3>level3</h3>'],
  ['####', '####level4', '<h4>level4</h4>'],
  ['#####', '#####level5\r\n#####level5', '<h5>level5</h5>\r\n<h5>level5</h5>'],
  [
    '######,',
    '######level6\r\n##########more than 6',
    '<h6>level6</h6>\r\n<h6>more than 6</h6>'
  ]
];

describe.each(headerTestTable)('test h1-h6 headers', (tag, text, html) => {
  test(`shoule compile ${tag}`, () => {
    expect(markdowCompile(text)).toEqual(html);
  });
});

const fontTestTable = [
  ['*', '*italic*', '<i>italic</i>'],
  ['**', '**strong**', '<b>strong</b>'],
  ['***', '***italic&strong***', '<i><b>italic&strong</b></i>'],
  ['~~', '~~delete line~~', '<s>delete line</s>']
];

describe.each(fontTestTable)('test font style', (tag, text, html) => {
  test(`should compile ${tag}`, () => {
    expect(markdowCompile(text)).toEqual(html);
  });
});
