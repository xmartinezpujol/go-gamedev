import React from 'react';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

import bunny from "../../../assets/bunny.png";

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sprite texture={PIXI.Texture.fromImage(bunny)} {...props} />
    );
  }
}

export default Player;
