const renderHeader = (html: string) => {
  // (.*) means match any single character(except \n) 0 or more times
  // h6 => more than or equal 6 '#'
  html = html.replace(/#{6,}(.*)/g, '<h6>$1</h6>');
  html = html.replace(/#####(.*)/g, '<h5>$1</h5>');
  html = html.replace(/####(.*)/g, '<h4>$1</h4>');
  html = html.replace(/###(.*)/g, '<h3>$1</h3>');
  html = html.replace(/##(.*)/g, '<h2>$1</h2>');
  html = html.replace(/#(.*)/g, '<h1>$1</h1>');

  return html;
};

const renderFont = (html: string) => {
  html = html.replace(/\*\*\*(.*)\*\*\*/g, '<i><b>$1</b></i>');
  html = html.replace(/\*\*(.*)\*\*/g, '<b>$1</b>');
  html = html.replace(/\*(.*)\*/g, '<i>$1</i>');

  html = html.replace(/~~(.*)~~/g, '<s>$1</s>');
  return html;
};
const markdownCompiler = (text: string) => {
  let html = text;

  html = renderHeader(html);
  html = renderFont(html);

  return html;
};

export default markdownCompiler;
