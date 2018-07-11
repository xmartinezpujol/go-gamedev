import React from 'react';
import { connect } from 'react-redux';
import { Sprite } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

import gopher from '../../../assets/gopher.png';

import * as pcActions from '../../redux/modules/Player/character';

class PlayerCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyPress, false);
  }

  keyPress(e) {
    // Down: 38 - Up: 40 - Right: 39 - Left: 37
    switch (e.keyCode) {
      case 38:
        this.props.dispatch(pcActions.movePlayer({ x: 0, y: -80 }));
        break;
      case 40:
        this.props.dispatch(pcActions.movePlayer({ x: 0, y: 80 }));
        break;
      case 39:
        this.props.dispatch(pcActions.movePlayer({ x: 80, y: 0 }));
        break;
      case 37:
        this.props.dispatch(pcActions.movePlayer({ x: -80, y: 0 }));
        break;
      default:
        break;
    }
  }

  render() {
    const { pc } = this.props;

    return (
      <Sprite
        texture={PIXI.Texture.fromImage(gopher)}
        {...this.props}
        x={pc.position.x}
        y={pc.position.y}
      />
    );
  }
}

const mapStateToProps = state => ({
  pc: state.pc,
});

export default connect(mapStateToProps)(PlayerCharacter);
