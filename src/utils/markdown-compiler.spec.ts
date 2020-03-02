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

const fontTestTable = [
  ['*', '*italic*', '<i>italic</i>'],
  ['**', '**strong**', '<b>strong</b>'],
  ['***', '***italic&strong***', '<i><b>italic&strong</b></i>'],
  ['~~', '~~delete line~~', '<s>delete line</s>']
];

const imageTestTable = [
  [
    'image',
    '![](https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540)',
    '<img title="" src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />'
  ]
];

const testTable = [...headerTestTable, ...fontTestTable, ...imageTestTable];

describe.each(testTable)('test font style', (tag, text, html) => {
  test(`should compile ${tag}`, () => {
    expect(markdowCompile(text)).toEqual(html);
  });
});
