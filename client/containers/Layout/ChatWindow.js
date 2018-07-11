import React from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import uniqid from 'uniqid';

import { Button, Input } from 'semantic-ui-react';

import MessageList from '../Chat/MessageList';

const ChatContainer = glamorous.div({
  position: 'absolute',
  zIndex: 100,
  bottom: 20,
  left: 20,
  width: 450,
  display: 'flex',
  flexDirection: 'column',
  opacity: 0.8,
});

const SendMessage = glamorous.div({
  display: 'flex',
});

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ws: null,
      messages: {},
      inputMsg: '',
      user: uniqid('user-'),
    };
    this.handleSendMsg = this.handleSendMsg.bind(this);
    this.handleMsgUpdate = this.handleMsgUpdate.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentWillMount() {
    const ws = new WebSocket(`ws://${__SERVER__}/ws`);

    ws.onopen = () => {
      // Messages functionality
      ws.addEventListener('message', (e) => {
        const msg = JSON.parse(e.data);
        this.addMessage(msg);
      });
    };
    ws.onerror = (event) => {
      console.log(event);
    };

    this.setState(() => ({
      ws,
    }));
  }

  handleSendMsg() {
    const { ws, inputMsg, user } = this.state;

    if (inputMsg !== '') {
      ws.send(
        JSON.stringify({
          user,
          message: inputMsg,
          id: uniqid('msg-'),
        }),
      );

      // Clear input field
      this.setState(() => ({
        inputMsg: '',
      }));
    }
  }

  handleMsgUpdate(e) {
    e.persist();
    this.setState(() => ({
      inputMsg: e.target.value,
    }));
  }

  addMessage(msg) {
    const { messages } = this.state;
    this.setState(() => ({
      messages: [...messages, msg],
    }));
  }

  keyPress(e){
    if (e.keyCode === 13) {
      this.handleSendMsg();
    }
  }

  render() {
    const { messages, inputMsg } = this.state;
    return (
      <ChatContainer id="messages">
        <MessageList messages={messages} />
        <SendMessage>
          <Input
            placeholder="Type your message..."
            value={inputMsg}
            onChange={e => this.handleMsgUpdate(e)}
            type="text"
            style={{ width: '100%', marginRight: 10 }}
          />
          <Button
            primary
            onClick={this.handleSendMsg}
            style={{ marginRight: 0 }}
          >
            Send
          </Button>
        </SendMessage>
      </ChatContainer>
    );
  }
}

const mapStateToProps = state => ({
  ws: state.ws,
});

export default connect(mapStateToProps)(ChatWindow);
