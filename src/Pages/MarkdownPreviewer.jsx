import '../Assets/MarkdownPreviewer.scss';
import RocketIcon from '../Assets/Icons/icon-rocket.svg';
import ExpandIcon from '../Assets/Icons/icon-expand.svg';
import ShrinkIcon from '../Assets/Icons/icon-shrink.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

function Header(props) {
  let [expand, setExpand] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (expand) {
      setExpand(false);
      props.dataExpand(false);
    } else {
      setExpand(true);
      props.dataExpand(true);
    }
  };

  return (
    <div className="header flex items-center justify-between">
      <div className="flex">
        <img src={RocketIcon} alt="rocket-icon" height={20} width={20} className="mr-3" />
        <span>{props.text}</span>
      </div>
      <div className="flex">
        {!expand ? (
          <img src={ExpandIcon} alt="expand-icon" height={20} width={20} className="cursor-pointer" onClick={handleClick} />
        ) : (
          <img src={ShrinkIcon} alt="shrink-icon" height={20} width={20} className="cursor-pointer" onClick={handleClick} />
        )}
      </div>
    </div>
  );
}

function Previewer(props) {
  const receiveDataExpandPreviewer = (val) => {
    props.dataExpandPreviewer(val);
  };
  return (
    <div>
      <Header dataExpand={receiveDataExpandPreviewer} text="Previewer" />
      <div dangerouslySetInnerHTML={{ __html: marked(props.markdown, { breaks: true }) }} id="preview" />
    </div>
  );
}

function MarkdownPreviewer() {
  let i = 0;
  const txt = 'Welcome to my React Markdown Previewer!';
  let [dynamicText, setDynamicText] = useState('');

  let placeholder = `# ${dynamicText}

by <u>**Azmi Fitra**</u> (Build a Markdown Previewer challenged by <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer" target="_blank" style="color: #0000EE!important"><u>**_freecodecamp.org_**</u></a>)
## Here's some cool stuff:


Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
     - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

  let [markdown, setMarkdown] = useState(placeholder);
  let [dataPropsExpandPreviewer, setDataPropsExpandPreviewer] = useState(false);
  let [dataPropsExpandEditor, setDataPropsExpandEditor] = useState(false);

  let tempText = '';
  const typeWriter = () => {
    if (i < txt.length) {
      tempText += txt.charAt(i);
      setDynamicText(tempText);
      i++;
      setTimeout(typeWriter, 75);
    }
  };

  useEffect(() => {
    typeWriter();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setMarkdown(placeholder);
  }, [placeholder]);

  const handleEditorChange = (e) => {
    setMarkdown(e.target.value);
  };

  const receiveDataExpandPreviewer = (val) => {
    setDataPropsExpandPreviewer(val);
  };
  const receiveDataExpandEditor = (val) => {
    setDataPropsExpandEditor(val);
  };
  return (
    <div className="MarkdownPreviewer bg-slate-900">
      <div className="flex item-center mb-10 pb-2 border-b-4 border-white">
        <FontAwesomeIcon icon={faCode} size="2x" />
        <h1 className="font-semibold text-white text-4xl px-4">Markdown Previewer</h1>
        <FontAwesomeIcon icon={faCode} size="2x" />
      </div>

      {!dataPropsExpandPreviewer ? (
        <div className="w-full">
          <Header dataExpand={receiveDataExpandEditor} text="Editor" />
          <textarea id="editor" className="w-full h-56" onChange={handleEditorChange} value={markdown} style={{ height: dataPropsExpandEditor ? '75vh' : '' }} />
        </div>
      ) : (
        <div />
      )}
      {!dataPropsExpandEditor ? <Previewer markdown={markdown} dataExpandPreviewer={receiveDataExpandPreviewer} /> : <div />}
    </div>
  );
}

export default MarkdownPreviewer;
