import React from 'react';
import './NavBar.css';
import FieldIcon from './FieldIcon.png';
import RosterIcon from './RosterIcon.png';
import AboutIcon from './AboutIcon.png';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
    if (props.user) {
      return (
        <div className="nav-bar">
          <div className="nav-bar-links">
            <ul>
              <Link to="/field"><img id="field-icon" src={FieldIcon} /></Link>
              <Link to="/roster"><img id="roster-icon" src={RosterIcon} /></Link>
              <Link to="/about"><img id="about-icon" src={AboutIcon} /></Link>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
}
// https://thenounproject.com/search/?q=baseball%20diamond&i=156667
// https://thenounproject.com/search/?q=about%20icon&i=52713
// https://thenounproject.com/search/?q=board%20icon&i=86458