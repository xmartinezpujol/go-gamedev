import React from 'react';
import glamorous from 'glamorous';

const MessageContainer = glamorous.div({
  display: 'flex',
});

const MsgUser = glamorous.div({
  paddingRight: 5,
  fontWeight: 700,
});

const MsgData = glamorous.div({
});

const Message = props => (
  <MessageContainer>
    <MsgUser>
      {props.user}
      :
    </MsgUser>
    <MsgData>
      {props.message}
    </MsgData>
  </MessageContainer>
);

export default Message;
