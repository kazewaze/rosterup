import React from 'react';
import './RosterEditor.css';

class RosterEditor extends React.Component {
  render() {
    return (
      <div className="roster-editor">
        <form>
          <div id="lo">
            <label>
              LO
              <input />
            </label>
            <input type="submit"/>
          </div>
          <div id="clo">
            CLO
            <label>
              <input />
            </label>
            <input type="submit"/>
          </div>
          <div id="cro">
            CRO
            <label>
              <input />
            </label>
            <input type="submit"/>
          </div>
          <div id="ro">
            RO
            <label>
              <input />
            </label>
            <input type="submit"/>
          </div>
          <div id="fb">
            FB
            <label>
              <input />
            </label>
            <input type="submit"/>
          </div>
          <div id="sb">
            SB
            <label>
              <input />
            </label>
            <input type="submit"/>
          </div>
          <div id="st">
            ST
            <label>
              <input />
            </label>
            <input type="submit"/>
          </div>
          <div id="tb">
            TB
            <label>
              <input />
            </label>
            <input type="submit"/>
          </div>
          <div id="p">
            P
            <label>
              <input />
            </label>
            <input type="submit"/>
          </div>
          <div id="c">
            C
            <label>
              <input />
            </label>
            <input type="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default RosterEditor;