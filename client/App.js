import React from 'react';
import glamorous from 'glamorous';
import { connect } from 'react-redux';

import Canvas from './containers/Layout/Canvas';
import ChatWindow from './containers/Layout/ChatWindow';

const GameWindow = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
});

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GameWindow>
        <Canvas />
        <ChatWindow />
      </GameWindow>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(App);
