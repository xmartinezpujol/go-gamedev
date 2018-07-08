import React from 'react';
import glamorous from 'glamorous';

const Background = glamorous.div({
  display: 'flex',
  backgroundColor: 'black',
  height: '100%',
  width: '100%',
});


class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Background />
    );
  }
}

export default Canvas;
