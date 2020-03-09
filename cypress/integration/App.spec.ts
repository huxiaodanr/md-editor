/// <reference types="cypress" />

const editor = () => {
  return cy.get('#editor');
};

const previewer = () => {
  return cy.get('#previewer');
};
describe('The home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('shoudld show editor', () => {
    editor().should('be.visible');
  });
  it('should show previewer', () => {
    previewer().should('be.visible');
  });
  it('should show preview text basing on the editor', () => {
    editor()
      .get('.header-input')
      .type('hello cypress');
    previewer().should('have.text', 'hello cypress');
  });
});

describe('Syntax', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should render h1-h6 if rows start with #', () => {
    editor()
      .type('# 一级标题{enter}')
      .type('## 二级标题{enter}')
      .type('### 三级标题{enter}')
      .type('#### 四级标题{enter}')
      .type('##### 五级标题{enter}')
      .type('###### 六级标题{enter}')
      .type('####### 六级标题');
    previewer().contains('h1', '一级标题');
    previewer().contains('h2', '二级标题');
    previewer().contains('h3', '三级标题');
    previewer().contains('h4', '四级标题');
    previewer().contains('h5', '五级标题');
    previewer().contains('h6', '六级标题');
  });
  it('should render font style', () => {
    editor()
      .type('**加粗字体**')
      .type('*倾斜字体*{enter}')
      .type('***倾斜加粗字体***{enter}')
      .type('~~删除线~~');
    previewer().contains('b', '加粗字体');
    previewer().contains('i', '倾斜字体');
    previewer()
      .get('i')
      .contains('b', '倾斜加粗字体');
    previewer().contains('s', '删除线');
  });
  it('should render image', () => {
    editor().type(
      '![image](https://www.baidu.com/img/bd_logo1.png?where=super)'
    );
    previewer().find('img');
    previewer().should('not.contain.text', '![');
  });
});
