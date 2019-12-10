import React, { Fragment } from 'react';
import './FieldEditor.css';

class FieldEditor extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      leftOutfield: 'Left',
      centerLeftOutField: 'Center Left',
      centerRightOutField: 'Center Right',
      rightOutfield: 'Right',
      thirdBase: 'Third Base',
      secondBase: 'Second Base',
      firstBase: 'First Base',
      shortStop: 'Short Stop',
      pitcher: 'Pitcher',
      catcher: 'Catcher'
    }

    this.returnPlayers = this.returnPlayers.bind(this);
  }

  componentDidMount() {
    // this.props.dispatch(GET_PLAYER);
  }

  returnPlayers(position) {
    return (
      <Fragment>
        <option>Kaycee</option>
        <option>William</option>
        <option>Ingram</option>
      </Fragment>
    );
  }

  render() {
  // DH ?, Shortstop, Catcher, Pitcher.
    return (
      <div className="field-editor">
        <div className="outfield">
          <div className="left-outfield">
            <select>
              {this.returnPlayers('left-outfield')}
            </select>
          </div>
          <div className="left-center-outfield">
            <select>
              {this.returnPlayers('left-center-outfield')}
            </select>
          </div>
          <div className="right-center-outfield">
            <select>
              {this.returnPlayers('right-center-outfield')}
            </select>
          </div>
          <div className="right-outfield">
            <select>
              {this.returnPlayers('right-outfield')}
            </select>
          </div>
        </div>
        <div className="infield">
          <div className="third-base">
            <select>
              {this.returnPlayers('third-base')}
            </select>
          </div>
          <div className="short-stop">
            <select>
              {this.returnPlayers('short-stop')}
            </select>
          </div>
          <div className="second-base">
            <select>
              {this.returnPlayers('second-base')}
            </select>
          </div>
          <div className="first-base">
            <select>
              {this.returnPlayers('first-base')}
            </select>
          </div>
        </div>
        <div className="pitcher">
          <div className="the-pitcher">
            <select>
              {this.returnPlayers('the-pitcher')}
            </select>
          </div>
        </div>
        <div className="catcher">
          <div className="the-catcher">
            <select>
              {this.returnPlayers('the-catcher')}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default FieldEditor;