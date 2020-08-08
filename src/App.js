import React from 'react';
import logo from './logo.svg';
import './App.css';
import cx from 'classnames';

// {text, type, from, timestamp}
const REACT_ICON_URL = "/static/media/logo.5d5d9eef.svg";

function App() {
  const [messages, setMessages] = React.useState([]);
  const addMessage = (message) => setMessages([...messages, message]);

  return (
    <div className="App">
      <Messages messages={messages} />
      <MessageInput onSubmit={addMessage} />
    </div>
  );
}

const Messages = ({messages}) => {
  return (
    <div>
      {messages.map(({
        text, 
        type, 
        from, 
        timestamp,
        imgSrc,
      }) => 
        <div className={cx("message", { 'with-margin': from })}>
          {from && 
            <img className="avatar" src={imgSrc || REACT_ICON_URL}/> ||
            <div className="avatar"/>
          }
          <div className="message-contents">
            { from &&
              <div className="message-header">
                <span className="text-header"><b>{from}</b></span>
                <span className="text-secondary">{timestamp}</span>
              </div>
            }
            <div className="message-body">
              <span className="message-text">{text}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const MessageInput = ({onSubmit}) => {
  const [imgSrc, setImgSrc] = React.useState('');
  const [text, setText] = React.useState('');
  const [from, setFrom] = React.useState('');
  const [ts, setTs] = React.useState('');

  return (
    <form onSubmit={e => e.preventDefault()}>
      <label>image url:</label><input type="text" onChange={e => setImgSrc(e.target.value)}/>
      <label>from:</label><input type="text" onChange={e => setFrom(e.target.value)}/>
      <label>timestamp:</label><input type="text" onChange={e => setTs(e.target.value)}/>
      <label>text*:</label><input type="text" onChange={e => setText(e.target.value)}/>
      <button type="submit" onClick={() => onSubmit({text, from, timestamp: ts, imgSrc})}>Add</button>
    </form>
  )
}

export default App;
