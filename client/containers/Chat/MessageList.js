import React from 'react';
import glamorous from 'glamorous';

import Message from '../../components/Chat/Message';

const MessageListContainer = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'yellow',
  minHeight: 200,
  padding: 5,
  marginBottom: 5,
  borderRadius: 3,
});


class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { messages } = this.props;
    return (
      <MessageListContainer>
        {typeof (messages) !== 'undefined' &&
        messages.length > 0 &&
        messages.map(message => (
          <Message key={message.id} user={message.user} message={message.message} />
        ))}
      </MessageListContainer>
    );
  }
}

export default ChatWindow;
