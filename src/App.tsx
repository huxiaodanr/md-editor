import React, { useState, useEffect } from 'react';
import markdownCompiler from './utils/markdown-compiler';
import './App.css';

function App() {
  const [title, setTitle] = useState<string>('简书编辑器模拟');
  const [content, setContent] = useState<string>('');

  /**
   * useEffect is similar to componentDidMount & componentDidUpdate
   * the second parameter is an array of effect dependencies, the callback is executed when title changes
   */
  useEffect(() => {
    document.title = `简书-${title}`;
  }, [title]);

  const onTitltChange = (e: any) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const renderMarkdown = () => {
    const html = markdownCompiler(content);
    return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
  };
  return (
    <div className="App">
      <div className="app">
        <div id="editor" className="editor">
          <div className="editor-header">
            <input
              value={title}
              className="header-input"
              onChange={onTitltChange}
              placeholder="请输入标题"
            />
          </div>
          <div className="control-pannel">this is control pannel</div>
          <div className="editor-content">
            <textarea
              className="content-textarea"
              placeholder="请输入文章内容"
              value={content}
              onChange={onContentChange}
            />
          </div>
        </div>
        <div id="previewer" className="previewer">
          <h1 className="previewer-header">{title}</h1>
          <div className="previewer-content">{renderMarkdown()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
