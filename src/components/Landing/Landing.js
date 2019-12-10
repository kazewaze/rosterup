import React from 'react';
import './Landing.css';

export default function Landing(props) {
  return (
    <div className="Landing">
      <h1 className="Landing-heading">Welcome to RosterUp</h1>
      <a className="Landing-login" href="http://localhost:3003/auth">Get Started</a>
    </div>
  );
}