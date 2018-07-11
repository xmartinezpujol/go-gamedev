import React from 'react';
import { Stage } from 'react-pixi-fiber';

import PlayerCharacter from '../Player/PlayerCharacter';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        options={{ backgroundColor: 0x11DBE5 }}
      >
        <PlayerCharacter height={80} width={80} />
      </Stage>
    );
  }
}

export default Canvas;
